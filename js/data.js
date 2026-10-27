export const sources = {
  henriqueBiography: {
    label: "Biografia oficial de Henrique & Juliano",
    url: "https://henriqueejuliano.com.br/biografia/"
  },
  henriqueOfficial: {
    label: "Site oficial de Henrique & Juliano",
    url: "https://henriqueejuliano.com.br/"
  },
  henriqueYoutube: {
    label: "Canal oficial de Henrique & Juliano",
    url: "https://www.youtube.com/@HenriqueeJuliano"
  },
  luanOfficial: {
    label: "Site oficial de Luan Santana",
    url: "https://luansantana.com.br/"
  },
  luanBiography: {
    label: "Área de biografia do site oficial de Luan Santana",
    url: "https://luansantana.com.br/biografia"
  },
  luanYoutube: {
    label: "Canal oficial de Luan Santana",
    url: "https://www.youtube.com/channel/UC6rwiIxv0w2fbmmr66wl1rA"
  }
};

const henriqueProjects = [
  { title: "Ao Vivo em Palmas", year: "2012", artist: "Henrique & Juliano", note: "Registro ao vivo que integra os primeiros projetos citados na biografia oficial.", source: "henriqueBiography", link: "https://www.youtube.com/@HenriqueeJuliano" },
  { title: "Ao Vivo em Brasília", year: "2014", artist: "Henrique & Juliano", note: "Projeto audiovisual gravado na capital federal.", source: "henriqueBiography", link: "https://www.youtube.com/@HenriqueeJuliano" },
  { title: "Novas Histórias", year: "2015", artist: "Henrique & Juliano", note: "Álbum ao vivo que ampliou a sequência de projetos da dupla.", source: "henriqueBiography", link: "https://www.youtube.com/@HenriqueeJuliano" },
  { title: "O Céu Explica Tudo", year: "2017", artist: "Henrique & Juliano", note: "Um dos trabalhos destacados na discografia oficial.", source: "henriqueBiography", link: "https://www.youtube.com/@HenriqueeJuliano" },
  { title: "Menos é Mais", year: "2018", artist: "Henrique & Juliano", note: "Projeto citado entre os lançamentos da dupla.", source: "henriqueBiography", link: "https://www.youtube.com/@HenriqueeJuliano" },
  { title: "Manifesto Musical", year: "2022", artist: "Henrique & Juliano", note: "Projeto que a biografia oficial destaca entre os trabalhos recentes da dupla.", source: "henriqueBiography", link: "https://www.youtube.com/@HenriqueeJuliano" }
];

const luanProjects = [
  { title: "Tô de Cara", year: "2009", artist: "Luan Santana", note: "Um dos primeiros álbuns de estúdio associados ao início da carreira comercial do cantor.", source: "luanYoutube", link: "https://www.youtube.com/channel/UC6rwiIxv0w2fbmmr66wl1rA" },
  { title: "Ao Vivo", year: "2009", artist: "Luan Santana", note: "Registro audiovisual do começo da projeção nacional do artista.", source: "luanYoutube", link: "https://www.youtube.com/channel/UC6rwiIxv0w2fbmmr66wl1rA" },
  { title: "Quando Chega a Noite", year: "2012", artist: "Luan Santana", note: "Álbum de estúdio de uma fase inicial de consolidação do repertório.", source: "luanYoutube", link: "https://www.youtube.com/channel/UC6rwiIxv0w2fbmmr66wl1rA" },
  { title: "O Nosso Tempo é Hoje", year: "2013", artist: "Luan Santana", note: "Projeto audiovisual que marca a continuidade de sua trajetória ao vivo.", source: "luanYoutube", link: "https://www.youtube.com/channel/UC6rwiIxv0w2fbmmr66wl1rA" },
  { title: "1977", year: "2016", artist: "Luan Santana", note: "Projeto que integra a discografia de diferentes fases do cantor.", source: "luanYoutube", link: "https://www.youtube.com/channel/UC6rwiIxv0w2fbmmr66wl1rA" },
  { title: "Luan City", year: "2022", artist: "Luan Santana", note: "Projeto audiovisual ligado à concepção de show e universo visual do artista.", source: "luanYoutube", link: "https://www.youtube.com/channel/UC6rwiIxv0w2fbmmr66wl1rA" }
];

export const artists = {
  "henrique-juliano": {
    name: "Henrique & Juliano",
    monogram: "H&J",
    profileUrl: "henrique-juliano.html",
    biographyUrl: sources.henriqueBiography.url,
    social: [
      { platform: "Instagram", label: "@henriqueejuliano", url: "https://www.instagram.com/henriqueejuliano/" },
      { platform: "YouTube", label: "Canal oficial", url: sources.henriqueYoutube.url },
      { platform: "TikTok", label: "Perfil oficial", url: "https://www.tiktok.com/@henriqueejulianooficial" },
      { platform: "Facebook", label: "Página oficial", url: "https://www.facebook.com/HenriqueeJuliano" },
      { platform: "Site", label: "Site oficial", url: sources.henriqueOfficial.url }
    ],
    references: [sources.henriqueBiography, sources.henriqueOfficial, sources.henriqueYoutube],
    songs: [
      "Arranhão",
      "A Maior Saudade",
      "Acordo",
      "Rasteira",
      "Chá de Casa Nova",
      "Eu e Eu",
      "Liberdade Provisória",
      "Universo Conspirou",
      "Culpados"
    ],
    projects: henriqueProjects,
    timeline: [
      { year: "2012", title: "Ao Vivo em Palmas", description: "A biografia oficial lista este registro entre os primeiros trabalhos lançados pela dupla.", category: "lançamento", source: "henriqueBiography" },
      { year: "2014", title: "Ao Vivo em Brasília", description: "A dupla lança um novo projeto ao vivo, ampliando a circulação de seus registros audiovisuais.", category: "lançamento", source: "henriqueBiography" },
      { year: "2015", title: "Novas Histórias", description: "Mais um trabalho ao vivo passa a integrar a discografia citada pela biografia oficial.", category: "lançamento", source: "henriqueBiography" },
      { year: "2017", title: "O Céu Explica Tudo", description: "O álbum aparece na sequência de trabalhos que consolidam a trajetória da dupla.", category: "lançamento", source: "henriqueBiography" },
      { year: "2018", title: "Menos é Mais", description: "A biografia oficial inclui o projeto entre os lançamentos da dupla.", category: "lançamento", source: "henriqueBiography" },
      { year: "2019", title: "Ao Vivo no Ibirapuera", description: "Um novo registro ao vivo integra a discografia da dupla.", category: "lançamento", source: "henriqueBiography" },
      { year: "2022", title: "Manifesto Musical", description: "Trabalho destacado na biografia oficial. A mesma página registra que o álbum foi o mais ouvido no Spotify Brasil naquele ano.", category: "álbum", source: "henriqueBiography" }
    ],
    gallery: [
      { image: "imagens/h%26j.avif", alt: "Henrique & Juliano juntos em uma fotografia", caption: "Henrique & Juliano", credit: "Imagem fornecida pelo usuário" },
      { image: "imagens/h%26j%20baby.jpg", alt: "Henrique & Juliano na infância", caption: "Henrique & Juliano na infância", credit: "Imagem fornecida pelo usuário" }
    ]
  },
  "luan-santana": {
    name: "Luan Santana",
    monogram: "LS",
    profileUrl: "luan-santana.html",
    biographyUrl: sources.luanBiography.url,
    social: [
      { platform: "Instagram", label: "@luansantana", url: "https://www.instagram.com/luansantana/" },
      { platform: "YouTube", label: "Canal oficial", url: sources.luanYoutube.url },
      { platform: "Site", label: "Site oficial", url: sources.luanOfficial.url }
    ],
    references: [sources.luanOfficial, sources.luanBiography, sources.luanYoutube],
    songs: ["Meteoro", "Amar Não é Pecado", "Te Esperando", "Escreve Aí", "Morena", "Abalo Emocional"],
    projects: luanProjects,
    timeline: [
      { year: "2009", title: "Primeiros álbuns e registro ao vivo", description: "O início da discografia comercial do cantor inclui os projetos “Tô de Cara” e “Ao Vivo”. Consulte os registros oficiais para confirmar edições e datas de lançamento.", category: "lançamento", source: "luanYoutube" },
      { year: "2012", title: "Quando Chega a Noite", description: "Álbum de estúdio que representa uma das fases iniciais de consolidação de seu repertório.", category: "álbum", source: "luanYoutube" },
      { year: "2013", title: "O Nosso Tempo é Hoje", description: "Projeto audiovisual da carreira solo, alinhado à presença crescente do artista nos palcos.", category: "projeto", source: "luanYoutube" },
      { year: "2016", title: "1977", description: "Um dos projetos que compõem a variedade de formatos e repertórios da discografia de Luan Santana.", category: "álbum", source: "luanYoutube" },
      { year: "2022", title: "Luan City", description: "Projeto audiovisual associado à construção de um universo visual e de palco próprio.", category: "projeto", source: "luanYoutube" }
    ],
    gallery: [
      { image: "imagens/luan%20santana.jpg", alt: "Luan Santana em um retrato", caption: "Luan Santana", credit: "Imagem fornecida pelo usuário" },
      { image: "imagens/luan%20baby.jpg", alt: "Luan Santana na infância", caption: "Luan Santana na infância", credit: "Imagem fornecida pelo usuário" }
    ]
  }
};

export const getArtistName = (artistId) => artists[artistId]?.name ?? artistId;
