/* ============================================================
   FARPA ENCRAVADA — todo o conteúdo editável do site vive aqui.
   Trocar placeholders por conteúdo real é editar este arquivo,
   sem mexer em componente. (tasks "Conteúdo" no board)
   ============================================================ */

export const LINKS = {
  youtube: "https://www.youtube.com/@FarpaEncravada",
  instagram: "https://instagram.com/farpaencravada",
  tiktok: "https://www.tiktok.com/@farpaencravada",
  x: "https://x.com/farpaencravada",
  spotifyBudang: "https://open.spotify.com/artist/1ypiQPoiTZnYtOPMFtIgsN",
  // playlist dos lançamentos que produzi/mixei — troca aqui quando mudar
  spotifyPlaylist: "https://open.spotify.com/playlist/1U8dYIU8tlt16mDR1HeYKO",
  // formulário "quer trabalhar comigo?" (Google Forms)
  form: "https://docs.google.com/forms/d/e/1FAIpQLScUt-dVraG0qSF1xIIX_am-vCeA_B3DUwPpaPjGdy7rWYEjJg/viewform",
  email: "farpa.rec@gmail.com",
};

export const HERO = {
  nome: "Farpa Encravada",
  logo: "logo.png", // marca tribal — arquivo em /public (transparente ou svg de preferência)
  banner: "banner.jpg", // imagem de topo — arquivo em /public
  quem: "Vinicius Lunardi",
  oneliner: "Guitarrista & Produtor musical.",
  sub: "Produção musical, estúdio, vídeos e estrada.",
};

export const QUEM_SOU = {
  titulo: "Quem sou",
  // TODO: bio real do Vinicius (task "Conteúdo real" no board)
  paragrafos: [
    "Me chamo Vinicius — sou guitarrista da Budang e produtor musical (além de ser desenvolvedor de software pra pagar as contas rsrs).",
    "Produzo bandas independentes e de vez em quando transformo o que aprendo em vídeo: produção, home studio, guitarra, gear e a realidade de fazer música pesada no Brasil.",
    "Este espaço reúne tudo que eu faço num lugar só. Da um check!",
  ],
  foto: "vinicius.jpg", // arquivo em /public
};

export const BANDA = {
  titulo: "Budang",
  descricao:
    "Guitarrista e membro fundador na Budang. Viajando o Brasil com a banda desde 2019 e fazendo amizades pelo caminho. Tudo de forma independente.",
  destaque: "Em turnê sempre — acompanhe as datas no Instagram da banda.", // @todo link instagram da budang @budang__
  foto: "budang.jpg", // arquivo em /public
};

// Status possíveis de um projeto. A chave é o que você escreve no campo
// `status` de cada projeto; o valor é como aparece no selo do site.
// Pra criar um status novo, adicione uma linha aqui e um estilo em styles.css
// (.status-<chave>). Ex.: "mixagem": "Mixagem".
export const PRODUCAO_STATUS = {
  "em-producao": "Em produção", // rolando agora, ainda não lançado
  lancado: "Lançado", // já saiu (geralmente também na playlist do Spotify)
};

export const PRODUCAO = {
  titulo: "Produção & Mix",
  descricao:
    "Produção, gravação, mix & master. Trabalho como assistente e engenheiro de gravação no Estúdio El Rocha em São Paulo, ao lado do grande querido Fernando Sanches. Quer trabalhar comigo? Responde esse formulário!",
  playlistLabel: "Ouvir os lançamentos", // CTA que aponta pra LINKS.spotifyPlaylist
  formLabel: "Quero trabalhar contigo", // CTA que aponta pra LINKS.form

  // === PORTFOLIO — edite este array manualmente pra manter atualizado ===
  // formato de cada projeto:
  //   banda:   nome da banda/artista            (obrigatório)
  //   release: nome do EP/single/álbum          (opcional)
  //   ano:     ano                              (opcional)
  //   credito: seu papel — "Produção e mix" etc (obrigatório)
  //   status:  chave de PRODUCAO_STATUS acima    (obrigatório)
  //   link:    URL do release ou da banda        (opcional)
  // Ordene como quiser — aparecem na ordem da lista.
  projetos: [
    // TODO: trocar pelos projetos reais
    {
      banda: "Cacofonia",
      release: "Single",
      ano: "2026",
      credito: "Produção, Mix e Master",
      status: "em-producao",
      link: "",
    },
    {
      banda: "Besta Fera",
      release: "Álbum",
      ano: "2026",
      credito: "Produção, Mix e Master (junto do Fernando Sanches)",
      status: "em-producao",
      link: "",
    },
    {
      banda: "Agnoizzze",
      release: "EP",
      ano: "2026",
      credito: "Mix e Master",
      status: "em-producao",
      link: "",
    },
    {
      banda: "Paspalho",
      release: "EP",
      ano: "2026",
      credito: "Mix & master",
      status: "lancado",
      link: "https://open.spotify.com/album/0gdT5JepWa3glEvvO1DOp6",
    },
     {
      banda: "Paraíso Purulento",
      release: "Álbum",
      ano: "2025",
      credito: "Produção, Mix e Master",
      status: "em-producao",
      link: "",
    },
     {
      banda: "Joelhos Gelados",
      release: "EP",
      ano: "2026",
      credito: "Produção (guitarras e baixo), Mix e Master",
      status: "em-producao",
      link: "",
    },
    {
      banda: "Ludovic",
      release: "Álbum",
      ano: "2026",
      credito: "Assistente de Gravação",
      status: "lancado",
      link: "https://open.spotify.com/album/3qfKxz42RXWjWLhiALSVOy",
    },
    {
      banda: "Carl Satan",
      release: "Álbum",
      ano: "2026",
      credito: "Assistente de Gravação",
      status: "lancado",
      link: "https://open.spotify.com/track/4nyP7ONzMKjXz06o9Us4uo",
    },
    {
      banda: "Dente Canino",
      release: "Álbum",
      ano: "2026",
      credito: "Assistente de Gravação",
      status: "lancado",
      link: "https://open.spotify.com/track/3iLVAhL1n6xYp13Y7vGaXU",
    },
     {
      banda: "O Nó",
      release: "Álbum",
      ano: "2026",
      credito: "Assistente de Gravação",
      status: "lancado",
      link: "https://open.spotify.com/track/46DOfqSRuP4BhZNk6tzuC8",
    },
  ],
};

export const CONTEUDO = {
  titulo: "Conteúdo",
  descricao:
    "Produção musical, home studio, guitarra, gear e vlogs ensaio.",
  chamadaYt: "Assistir no YouTube",
  chamadaIg: "Seguir no Instagram",
  videosTitulo: "Últimos vídeos", // rótulo acima do grid
  videosVazio: "Vídeos em breve — o grid puxa do canal automaticamente.", // fallback se a lista vier vazia
};

export const CONTATO = {
  titulo: "Contato",
  descricao:
    "Quer produzir, mixar, tem alguma ideia e gostaria da minha ajuda pra tirar do papel, ou só quer trocar uma idea? Fala comigo por aqui ;)",
  // formulário que abre o e-mail já preenchido (mailto, sem backend)
  assuntoLabel: "Assunto",
  assuntoPlaceholder: "Sobre o que é?",
  mensagemLabel: "Mensagem",
  mensagemPlaceholder: "Manda sua ideia/projeto!",
  enviarLabel: "Enviar e-mail",
  emailPrefixo: "Ou escreve direto:",
  // reforço do Google Forms (aponta pra LINKS.form)
  formReforco: "É um projeto de produção/mix?",
  formReforcoLink: "Responde o formulário",
};
