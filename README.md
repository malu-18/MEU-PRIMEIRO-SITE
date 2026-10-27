# Entre Vozes — projeto biográfico

Portal editorial independente sobre Henrique & Juliano e Luan Santana, feito com HTML5, CSS3 e JavaScript nativo. Não há build, dependências, backend ou serviço pago. O site funciona como conteúdo estático; o Live Server é recomendado para servir os módulos JavaScript localmente.

## Estrutura

```text
index.html
henrique-juliano.html
luan-santana.html
css/
  style.css
  artists.css
  responsive.css
js/
  main.js
  timeline.js
  gallery.js
  data.js
assets/
  images/
    henrique-juliano/
    luan-santana/
  videos/
  icons/
imagens/
  h&j.avif
  h&j baby.jpg
  luan santana.jpg
  luan baby.jpg
```

`js/data.js` centraliza biografias em formato de linha do tempo, projetos, canções, fontes, redes sociais e itens da galeria. A marcação das páginas fica em HTML; o comportamento compartilhado é iniciado em `js/main.js`.

## Abrir no VS Code

1. Abra o VS Code e escolha **Arquivo > Abrir Pasta...**.
2. Selecione a pasta raiz deste projeto.
3. Na aba de extensões, instale **Live Server** (Ritwick Dey), se ainda não estiver instalado.
4. Abra `index.html` e use **Go Live** na barra inferior, ou clique com o botão direito no arquivo e escolha **Open with Live Server**.
5. O navegador abrirá o portal. A navegação também pode ser testada abrindo os HTML diretamente, mas os módulos ES são mais consistentes quando servidos pelo Live Server.

Não é necessário executar `npm install`, criar banco de dados ou iniciar backend. Fontes tipográficas externas são opcionais: se a conexão falhar, serão usadas fontes locais alternativas.

## Imagens, vídeo e direitos de uso

As quatro imagens fornecidas na pasta `imagens/` estão sendo usadas nos retratos e nas galerias: `h&j.avif` e `h&j baby.jpg` para Henrique & Juliano; `luan santana.jpg` e `luan baby.jpg` para Luan Santana. A galeria usa `loading="lazy"` e mantém um estado alternativo quando um arquivo não carrega. Clique ou use o teclado para ampliar; feche o modal pelo botão, por `Escape` ou clicando fora da imagem.

Como o projeto recebeu esses arquivos do usuário, os créditos estão identificados como “Imagem fornecida pelo usuário”. Antes de publicar o site, confirme que você possui autorização ou licença para divulgar cada imagem. Os diretórios `assets/images/henrique-juliano/` e `assets/images/luan-santana/` podem ser usados para futuras imagens autorizadas; adicione o caminho relativo, texto alternativo e crédito em `js/data.js`. Mantenha os retratos de destaque com texto alternativo e carregamento funcional.

Os diretórios `assets/videos/` e `assets/icons/` estão preparados para arquivos próprios licenciados. Para vídeos, prefira links para canais oficiais ou incorporação do player oficial somente quando habilitada; não hospede cópias sem autorização. Não há áudio automático.

## Atualizar conteúdo e fontes

- **Biografias, repertório, projetos, redes, galeria e acontecimentos:** edite os objetos `artists` e `sources` em `js/data.js`.
- **Linha do tempo:** cada evento contém ano, título, descrição, categoria e uma chave para a fonte. Use somente datas e descrições documentadas e sempre inclua o link da fonte em `sources`.
- **Álbuns e projetos:** confira título e ano no site/canal do artista ou em uma plataforma oficial antes de acrescentar. Os cartões atuais são uma seleção, não uma discografia completa.
- **Redes sociais:** os endereços atuais foram extraídos dos sites oficiais e canais identificados. Edite a lista `social` somente após conferir o destino no site oficial; redes não verificadas devem permanecer ausentes.
- **Referências:** cada página de artista monta sua lista a partir da propriedade `references`. Atualize-a junto com o conteúdo correspondente.
- **Ano do rodapé:** preenchido automaticamente com o ano atual do navegador. Isso não atualiza as biografias ou a linha do tempo.

Um link para plataforma de streaming não incorpora a faixa nem concede permissão para reproduzir o áudio. O projeto não reproduz conteúdo protegido.

## Fontes e critérios editoriais

Fontes consultadas nesta versão:

- [Biografia oficial de Henrique & Juliano](https://henriqueejuliano.com.br/biografia/) — origem em Palmeirópolis, narrativa sobre a influência do pai, início profissional e relação de projetos com anos publicados. A lista de canções destacadas também foi extraída desta página.
- [Site oficial de Henrique & Juliano](https://henriqueejuliano.com.br/) e [canal oficial no YouTube](https://www.youtube.com/@HenriqueeJuliano) — links para acompanhamento e consulta a lançamentos.
- [Site oficial de Luan Santana](https://luansantana.com.br/), [área de biografia](https://luansantana.com.br/biografia) e [canal oficial no YouTube](https://www.youtube.com/channel/UC6rwiIxv0w2fbmmr66wl1rA) — canais para consultar biografia, agenda, lançamentos e atualizações.
- [Instagram oficial de Luan Santana](https://www.instagram.com/luansantana/) e [perfis oficiais de Henrique & Juliano](https://www.instagram.com/henriqueejuliano/).

Na pesquisa desta versão, a biografia oficial da dupla apresentou os anos de seus projetos e os principais dados biográficos utilizados. A página de biografia de Luan Santana não expôs texto biográfico legível na consulta; portanto, dados pessoais como nome civil, data e cidade de nascimento, prêmios e detalhes da infância foram deliberadamente omitidos, e a página os identifica como pendentes de verificação. Os anos e títulos da seleção discográfica de Luan devem ser conferidos nas plataformas oficiais antes de republicação; nenhum total de audiência ou prêmio foi atribuído a ele.

As fontes e agendas podem mudar. Este site é estático e **não atualiza seu conteúdo automaticamente**. Revise as informações antes de publicar, associe cada afirmação à fonte que a comprova e indique a data da consulta quando fizer atualizações.

## Testes manuais sugeridos

1. Abra as três páginas e navegue entre elas pelo cabeçalho, pelos botões e pelos links de rodapé.
2. Redimensione o navegador para uma largura de celular e verifique o menu, os cartões e a linha do tempo.
3. Use o menu por teclado; confirme foco visível, `Enter` para ativar links e `Escape` para fechar o menu e o modal.
4. No início, filtre a linha do tempo por artista.
5. Abra os cartões da galeria para conferir a ampliação das quatro imagens locais fornecidas.
6. Desative a conexão com a internet para confirmar que a estrutura e os estilos continuam legíveis sem as fontes externas.
7. Confira os links externos e o console do navegador após inserir imagens e atualizar os dados.

## Aviso

Entre Vozes é um projeto biográfico independente, sem vínculo oficial com os artistas, suas equipes ou gravadoras. Marcas, nomes, músicas e imagens pertencem aos respectivos titulares. O site não disponibiliza gravações de áudio nem pretende substituir os canais oficiais.
