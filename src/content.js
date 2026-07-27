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
  email: "farpa.rec@gmail.com",
};

export const HERO = {
  nome: "Farpa Encravada",
  logo: "logo.png", // marca tribal — arquivo em /public (transparente ou svg de preferência)
  banner: "banner.jpg", // imagem de topo — arquivo em /public
  quem: "Vinicius Lunardi",
  oneliner: "Guitarrista & Produtor musical.",
  sub: "Produção musical, home studio, palco e estrada.",
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

export const PRODUCAO = {
  titulo: "Produção & Mix",
  descricao:
    "Produção, gravação, mix & master. Trabalho como assistente e engenheiro de gravação no Estúdio El Rocha em São Paulo, ao lado do grande querido Fernando Sanches. Quer trabalhar comigo? Responde esse formulário!",
  // TODO: créditos reais (task "Portfolio" no board)
  // TODO: anexar link do form
  // formato: { banda, release, ano, credito, link }
  creditos: [],
};

export const CONTEUDO = {
  titulo: "Conteúdo",
  descricao:
    "Produção musical, home studio, guitarra, gear e vlogs ensaio.",
  chamadaYt: "Assistir no YouTube",
  chamadaIg: "Seguir no Instagram",
};

export const CONTATO = {
  titulo: "Contato",
  descricao:
    "Quer produzir, mixar, tem alguma ideia e gostaria da minha ajuda pra tirar do papel, ou só quer trocar uma idea? Fala comigo por aqui ;)",
};
