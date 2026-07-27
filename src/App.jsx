import React, { useEffect, useState } from "react";
import { LINKS, HERO, QUEM_SOU, BANDA, PRODUCAO, PRODUCAO_STATUS, CONTEUDO, CONTATO } from "./content.js";

const NAV = [
  { href: "#quem-sou", label: "Quem sou" },
  { href: "#budang", label: "Budang" },
  { href: "#producao", label: "Produção" },
  { href: "#conteudo", label: "Conteúdo" },
  { href: "#contato", label: "Contato" },
];

// resolve arquivos de /public respeitando o base do GitHub Pages
const asset = (file) => `${import.meta.env.BASE_URL}${file}`;

const SecHead = ({ num, children }) => (
  <div className="sec-head">
    <span className="sec-num">{num}</span>
    <h2>{children}</h2>
  </div>
);

export default function App() {
  const [videos, setVideos] = useState([]);
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    fetch(asset("videos.json"))
      .then((r) => (r.ok ? r.json() : []))
      .then((data) => {
        if (Array.isArray(data)) setVideos(data);
      })
      .catch(() => {});
  }, []);

  const enviarEmail = (e) => {
    e.preventDefault();
    const params = [];
    if (assunto.trim()) params.push(`subject=${encodeURIComponent(assunto.trim())}`);
    if (mensagem.trim()) params.push(`body=${encodeURIComponent(mensagem.trim())}`);
    const query = params.length ? `?${params.join("&")}` : "";
    window.location.href = `mailto:${LINKS.email}${query}`;
  };

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <a className="wordmark" href="#topo" aria-label={HERO.nome}>
            <img className="wordmark-logo" src={asset(HERO.logo)} alt={HERO.nome} />
          </a>
          <div className="nav-links">
            {NAV.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </div>
        </div>
      </nav>

      <header className="hero" id="topo">
        <h1 className="visually-hidden">{HERO.nome}</h1>
        <img className="hero-banner" src={asset(HERO.banner)} alt={HERO.nome} />
        <div className="wrap hero-copy">
          <div className="hero-sub">
            <span className="hero-quem">{HERO.quem}</span>
            <span className="hero-oneliner">{HERO.oneliner}</span>
          </div>
          <p className="hero-tagline">{HERO.sub}</p>
        </div>
      </header>

      <main>
        <section id="quem-sou">
          <div className="wrap">
            <SecHead num="01">{QUEM_SOU.titulo}</SecHead>
            <div className="sec-body">
              <div>
                {QUEM_SOU.paragrafos.map((p, i) => (
                  <p key={i} className={i === 0 ? "lead" : ""}>{p}</p>
                ))}
              </div>
              {QUEM_SOU.foto ? (
                <img className="sec-foto" src={asset(QUEM_SOU.foto)} alt={HERO.quem} />
              ) : (
                <div className="placeholder">foto — em breve</div>
              )}
            </div>
          </div>
        </section>

        <section id="budang">
          <div className="wrap">
            <SecHead num="02">{BANDA.titulo}</SecHead>
            <div className="sec-body">
              <div>
                <p className="lead">{BANDA.descricao}</p>
                <p>{BANDA.destaque}</p>
                <div className="acoes">
                  <a className="btn cheio" href={LINKS.spotifyBudang} target="_blank" rel="noreferrer">
                    Ouvir no Spotify
                  </a>
                  <a className="btn" href={LINKS.instagram} target="_blank" rel="noreferrer">
                    Datas & bastidores
                  </a>
                </div>
              </div>
              {BANDA.foto ? (
                <img className="sec-foto" src={asset(BANDA.foto)} alt={BANDA.titulo} />
              ) : (
                <div className="placeholder">foto da banda — em breve</div>
              )}
            </div>
          </div>
        </section>

        <section id="producao">
          <div className="wrap">
            <SecHead num="03">{PRODUCAO.titulo}</SecHead>
            <div className="sec-body">
              <div>
                <p className="lead">{PRODUCAO.descricao}</p>
                <div className="acoes">
                  {LINKS.form ? (
                    <a className="btn cheio" href={LINKS.form} target="_blank" rel="noreferrer">
                      {PRODUCAO.formLabel}
                    </a>
                  ) : null}
                  {LINKS.spotifyPlaylist ? (
                    <a className="btn" href={LINKS.spotifyPlaylist} target="_blank" rel="noreferrer">
                      {PRODUCAO.playlistLabel}
                    </a>
                  ) : null}
                </div>
              </div>
              <div className="creditos">
                {PRODUCAO.projetos.length === 0 ? (
                  <div className="placeholder" style={{ gridColumn: "1 / -1" }}>
                    portfolio de produção & mix — em breve
                  </div>
                ) : (
                  PRODUCAO.projetos.map((p, i) => {
                    const inner = (
                      <>
                        <span className={`status-badge status-${p.status}`}>
                          {PRODUCAO_STATUS[p.status] || p.status}
                        </span>
                        <div className="banda">{p.banda}</div>
                        {(p.release || p.ano) && (
                          <div className="meta">
                            {[p.release, p.ano].filter(Boolean).join(" · ")}
                          </div>
                        )}
                        {p.credito && <div className="meta">{p.credito}</div>}
                      </>
                    );
                    return p.link ? (
                      <a key={p.banda + i} className="credito-card" href={p.link}
                        target="_blank" rel="noreferrer">
                        {inner}
                      </a>
                    ) : (
                      <div key={p.banda + i} className="credito-card">{inner}</div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="conteudo">
          <div className="wrap">
            <SecHead num="04">{CONTEUDO.titulo}</SecHead>
            <div className="sec-body">
              <div>
                <p className="lead">{CONTEUDO.descricao}</p>
                <div className="acoes">
                  <a className="btn cheio" href={LINKS.youtube} target="_blank" rel="noreferrer">
                    {CONTEUDO.chamadaYt}
                  </a>
                  <a className="btn" href={LINKS.instagram} target="_blank" rel="noreferrer">
                    {CONTEUDO.chamadaIg}
                  </a>
                </div>
              </div>
              <div className="videos">
                <span className="videos-label">{CONTEUDO.videosTitulo}</span>
                {videos.length === 0 ? (
                  <div className="placeholder">{CONTEUDO.videosVazio}</div>
                ) : (
                  <div className="videos-grid">
                    {videos.map((v) => (
                      <a key={v.id} className="video-card" href={v.url} target="_blank" rel="noreferrer">
                        <div className="video-thumb">
                          <img src={v.thumb} alt={v.title} loading="lazy" />
                        </div>
                        <div className="video-title">{v.title}</div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="contato" style={{ borderBottom: "none" }}>
          <div className="wrap">
            <SecHead num="05">{CONTATO.titulo}</SecHead>
            <p className="contato-intro">{CONTATO.descricao}</p>
            <div className="contato-grid">
              <form className="contato-form" onSubmit={enviarEmail}>
                <label className="campo">
                  <span>{CONTATO.assuntoLabel}</span>
                  <input
                    type="text"
                    value={assunto}
                    onChange={(e) => setAssunto(e.target.value)}
                    placeholder={CONTATO.assuntoPlaceholder}
                  />
                </label>
                <label className="campo">
                  <span>{CONTATO.mensagemLabel}</span>
                  <textarea
                    rows={5}
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    placeholder={CONTATO.mensagemPlaceholder}
                  />
                </label>
                <button className="btn cheio" type="submit">{CONTATO.enviarLabel}</button>
              </form>

              <div className="contato-alt">
                <span className="contato-alt-label">{CONTATO.emailPrefixo}</span>
                <a className="contato-email" href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
                {LINKS.form ? (
                  <p className="contato-form-reforco">
                    {CONTATO.formReforco}{" "}
                    <a href={LINKS.form} target="_blank" rel="noreferrer">
                      {CONTATO.formReforcoLink} →
                    </a>
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap footer-inner">
          <span>© {new Date().getFullYear()} Farpa Encravada</span>
          <span style={{ display: "flex", gap: 16 }}>
            <a href={LINKS.youtube} target="_blank" rel="noreferrer">YouTube</a>
            <a href={LINKS.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a href={LINKS.tiktok} target="_blank" rel="noreferrer">TikTok</a>
            <a href={LINKS.x} target="_blank" rel="noreferrer">X</a>
            <a href={LINKS.spotifyBudang} target="_blank" rel="noreferrer">Spotify</a>
          </span>
        </div>
      </footer>
    </>
  );
}
