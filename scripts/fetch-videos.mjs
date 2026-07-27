/* ============================================================
   Busca os últimos vídeos do canal via RSS público do YouTube
   (sem chave de API) e gera public/videos.json no build.

   Resiliente por design: se a rede falhar, mantém o videos.json
   anterior (ou escreve lista vazia) e NUNCA quebra o build.
   ============================================================ */

import { writeFileSync, existsSync, readFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const CHANNEL_ID = "UCO1R5SjZU1qFewrVPjWyG5g"; // Farpa Encravada
const MAX_VIDEOS = 6;
const FEED = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, "../public/videos.json");

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();

function parse(xml) {
  const entries = xml.match(/<entry>[\s\S]*?<\/entry>/g) || [];
  const videos = [];
  for (const e of entries) {
    const id = (e.match(/<yt:videoId>(.*?)<\/yt:videoId>/) || [])[1];
    const title = (e.match(/<title>([\s\S]*?)<\/title>/) || [])[1];
    const href = (e.match(/<link rel="alternate" href="(.*?)"/) || [])[1] || "";
    const published = (e.match(/<published>(.*?)<\/published>/) || [])[1];
    if (!id || !title) continue;
    // filtra Shorts — só vídeos normais (/watch)
    if (href.includes("/shorts/")) continue;
    videos.push({
      id,
      title: decode(title),
      url: `https://www.youtube.com/watch?v=${id}`,
      thumb: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      published,
    });
    if (videos.length >= MAX_VIDEOS) break;
  }
  return videos;
}

function write(videos) {
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, JSON.stringify(videos, null, 2) + "\n");
}

try {
  const res = await fetch(FEED, { headers: { "user-agent": "farpa-encravada-build" } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const videos = parse(await res.text());
  if (videos.length === 0) throw new Error("nenhum vídeo parseado");
  write(videos);
  console.log(`[fetch-videos] ok — ${videos.length} vídeos gravados em public/videos.json`);
} catch (err) {
  console.warn(`[fetch-videos] falha (${err.message}) — mantendo videos.json existente`);
  if (!existsSync(OUT)) {
    write([]);
    console.warn("[fetch-videos] sem cache anterior — gravei lista vazia pra não quebrar o build");
  }
}
