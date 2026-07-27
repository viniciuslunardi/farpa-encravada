import React from "react";
import { LINKS, HERO, QUEM_SOU, BANDA, PRODUCAO, CONTEUDO, CONTATO } from "./content.js";

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
              </div>
              <div className="creditos">
                {PRODUCAO.creditos.length === 0 ? (
                  <div className="placeholder" style={{ gridColumn: "1 / -1" }}>
                    créditos de produção & mix — lista em breve
                  </div>
                ) : (
                  PRODUCAO.creditos.map((c) => (
                    <a key={c.banda + c.release} className="credito-card" href={c.link || undefined}
                      target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                      <div className="banda">{c.banda}</div>
                      <div className="meta">{c.release} · {c.ano}</div>
                      <div className="meta">{c.credito}</div>
                    </a>
                  ))
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
              <div className="placeholder">últimos vídeos — integração YouTube em breve</div>
            </div>
          </div>
        </section>

        <section id="contato" style={{ borderBottom: "none" }}>
          <div className="wrap">
            <SecHead num="05">{CONTATO.titulo}</SecHead>
            <p style={{ fontSize: 17, marginBottom: 28, maxWidth: "62ch" }}>{CONTATO.descricao}</p>
            <a className="contato-email" href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
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
