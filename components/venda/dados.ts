import type { Curso } from "./tipos";

/* ==================================================================
   Conteúdo recuperado das páginas de vendas originais — ver o
   cabeçalho de `tipos.ts` para as fontes exatas.

   ⚠ CONFERIR antes de publicar:
   · Preços e links de checkout são os de 2022. Os links `off=` apontam
     para ofertas específicas da Hotmart; confirme se ainda valem.
   · A garantia está em 30 dias, como você pediu. A página antiga de
     Modelagem anunciava 15 dias.
   · Os vídeos de vendas no Vimeo são de 2018–2021: confirme se ainda
     estão públicos. Para tirar o vídeo, apague o campo `vimeo`.
   · A página antiga de Modelagem dizia "acesso liberado por 24 meses"
     num bloco e "acesso vitalício" no FAQ. Ficou vitalício.
================================================================== */

const GARANTIA = 30;

/* ---------------------------------------------------------------- */

export const costuraCriancas: Curso = {
  slug: "/costura-afetiva-para-criancas/",
  nome: "Costura Afetiva para Crianças",
  promessa: "Costurar é crescer",
  tema: "tijolo",
  eyebrow: "Curso 100% online · Acesso vitalício",
  resumo:
    "Curso online para quem quer costurar com as crianças: 15 módulos de projetos, moldes e didática lúdica, para pais, mães e educadores.",
  /* Curto de propósito: o vídeo divide a primeira dobra com o texto.
     O parágrafo que saía daqui abre agora a seção "Sobre o que é". */
  chamadaHero: [
    "Plantar a semente da costura e das poéticas manuais nos corações das crianças é o nosso propósito.",
  ],
  destaquesHero: [
    "15 módulos em vídeo, do zero",
    "Moldes em PDF para baixar e imprimir",
    "Acesso vitalício, no seu ritmo",
    "Certificado de participação, 30 horas",
  ],
  vimeo: "300256683",
  imagem: {
    src: "/img/aula-criacoes.webp",
    alt: "Turma de crianças segurando as bonecas de pano que costuraram",
    w: 1080,
    h: 1080,
  },
  numeros: [
    ["15 módulos", "de atividades essenciais em vídeo"],
    ["30 horas", "com certificado de participação"],
    ["Vitalício", "acesso ao curso e aos bônus"],
  ],
  paraQuem: {
    texto:
      "Pais, mães, educadores infantis, profissionais da costura e pessoas em geral que queiram se conectar com as crianças por meio dos fazeres manuais.",
    prerequisito: "O pré-requisito é apenas querer!",
  },
  sobre: {
    titulo: "Sobre o que é este curso",
    paragrafos: [
      "Este é um curso sobre a costura na infância — mas é muito mais que isso. É uma poderosa ferramenta de conexão entre você e a sua criança.",
      "A costura afetiva para crianças traz em sua estrutura a preocupação com uma infância saudável e implicada com a evolução desses pequenos seres de maneira integral. Ou seja: o pensamento, o sentimento e o fazer integrados em experiências ricas de significado.",
      "Mas não se engane: não é um curso de entretenimento apenas. Os trabalhos manuais aqui propostos têm o intuito de auxiliar as crianças a superar desafios e proporcionar a elas atividades que exigem dedicação, disciplina e paciência, fortalecendo o querer e o pensamento lógico equilibrados com o cultivo da beleza e da vontade criativa.",
      "É para quem quer desenvolver a costura com as crianças e não tem ideia de por onde começar. É para quem precisa despertar aquela alma costureira que há tempos anda adormecida. Tem muita diversão, conversa boa e mão na massa aqui!",
    ],
    destaque: "É uma ferramenta de transformação. E de duração inestimada.",
  },
  comoFunciona: {
    titulo: "Como funciona",
    paragrafos: [
      "O Curso Costura Afetiva para Crianças é 100% on-line. São 15 módulos, que você pode assistir idealmente uma vez por semana — mas nada te impede de maratonar.",
      "Vamos falar a respeito de educação infantil e da costura como forma de criação de vínculos entre pais e filhos, educadores e crianças, e de como desenvolver gradualmente a costura à mão e à máquina, aliadas à criatividade.",
      "Cada módulo é composto de vídeo-aulas com projetos passo a passo e moldes para baixar e imprimir. E, nos conteúdos complementares, há várias atividades criativas com materiais que você encontra em casa, além de histórias que vão enriquecer ainda mais a conexão criança-educador-costura.",
      "Não consegue acompanhar semanalmente? Não tem problema: todo o conteúdo fica disponível com acesso vitalício, para você colocar em prática no seu tempo, sem pressão.",
    ],
    destaque:
      "Aulas de costura desenvolvem nas crianças o estado contemplativo e a beleza de viver o tempo presente.",
  },
  tituloModulos: "O que tem neste curso",
  introModulos:
    "O curso aborda 15 atividades essenciais detalhadas em vídeo-aulas, que podem ser desdobradas em criações de cada professor.",
  modulos: [
    {
      titulo: "Atividades-chave",
      texto:
        "15 atividades essenciais detalhadas em vídeo-aulas, que cada professor pode desdobrar nas próprias criações.",
    },
    {
      titulo: "Aprender brincando",
      texto: "Objetos lúdicos e jogos — a costura entrando pela porta da brincadeira.",
    },
    {
      titulo: "Treino da coordenação motora fina",
      texto: "Atividades introdutórias de pré-costura e pontos de bordado.",
    },
    {
      titulo: "Criatividade",
      texto:
        "Vivência da cor, textura e materiais. Com costura à mão ou à máquina, fortalecendo o querer com o cultivo da beleza e da vontade criativa.",
    },
    {
      titulo: "Moldes",
      texto:
        "PDF de todos os moldes das atividades exploradas no curso, para você baixar, imprimir e usar nas suas aulas sem complicação.",
    },
    {
      titulo: "Atividades extras",
      texto:
        "Trabalhos manuais que resgatam a poesia do feito à mão, para enriquecer ainda mais as suas aulas.",
    },
  ],
  oQueTem: [
    "Vídeo-aulas passo a passo detalhadas",
    "Moldes em PDF para facilitar tudo",
    "Suporte e grupo de alunas via WhatsApp",
    "Certificado de participação, 30 horas",
    "Conteúdos complementares com atividades e histórias",
    "Acesso por computador, celular ou tablet",
  ],
  beneficios: {
    titulo: "6 benefícios principais da costura para crianças",
    itens: [
      "Coordenação motora fina",
      "Paciência",
      "Criatividade",
      "Pensamento lógico",
      "Autonomia",
      "Concentração",
    ],
  },
  esperar: [
    "Aprender uma didática lúdica e objetiva",
    "Trocar experiências",
    "Se empoderar do que você já possui latente dentro de você",
    "Desenvolver novas capacidades",
  ],
  atuacao: {
    titulo: "Com este curso você poderá atuar em",
    itens: [
      "Cursos no seu ateliê e em escolas regulares",
      "Incrementando a sua didática artística",
      "Oficinas curtas para eventos e festas infantis",
      "Em casa, com os filhos e netos",
    ],
  },
  bonus: [
    {
      titulo: "Aula com curadoria de conteúdos relacionados",
      texto:
        "Vídeo-aula com indicação de livros e vídeos sobre fiação, tecelagem, tintura natural, tipos de tecido e outros assuntos ligados à costura e à educação infantil na área dos trabalhos manuais.",
    },
    {
      titulo: "Conto expressão nas aulas de costura",
      texto:
        "Vídeo-aula em que a Ananda compartilha a técnica do conto expressão, desenvolvida por Claudine Bernardes e usada no livro “Contos que Curam”, do qual é coautora. Pequenos contos e histórias viram forma de se conectar com o mundo lúdico infantil e trabalhar habilidades socioemocionais.",
    },
    {
      titulo: "PAP de 4 atividades avançadas",
      texto:
        "Passo a passo em PDF de quatro atividades avançadas para você aplicar com os alunos depois do curso.",
      imagem: {
        src: "/img/aula-crianca.webp",
        alt: "Ananda ensinando uma criança a costurar",
        w: 1080,
        h: 1080,
      },
    },
  ],
  paraQuemSim: [
    "Pais e mães que querem se conectar com os filhos pelos fazeres manuais",
    "Educadores infantis que querem ampliar a didática artística",
    "Profissionais da costura que querem abrir turmas para crianças",
    "Quem quer desenvolver a costura com crianças e não sabe por onde começar",
    "Avós que querem costurar com os netos",
  ],
  paraQuemNao: [
    "Quem procura só entretenimento — aqui as atividades exigem dedicação e paciência",
    "Quem quer aula presencial: o curso é 100% em vídeo, pré-gravado",
    "Quem espera resultado sem pôr a mão na massa junto com a criança",
  ],
  /* Depoimentos originais da página, na íntegra. */
  depoimentos: [
    {
      nome: "Carla Pivoto",
      detalhe: "Arquiteta e professora de costura",
      texto:
        "Este curso é a realização de um sonho. Eu tinha medo de pegar em agulha com as crianças e agora vejo que é possível, comecei com meu filho de 4 anos. Quero voltar e mostrar minhas turmas!",
      avatar: "/img/dep-carla-pivoto-2.webp",
    },
    {
      nome: "Cláudia Pitanguy",
      detalhe: "Analista internacional",
      texto:
        "Estou adorando o curso. Está abrindo várias possibilidades de como envolver as crianças nesse mundo, que é muito gostoso, mágico e apaixonante. O curso está sendo fantástico.",
      avatar: "/img/dep-claudia-pitanguy.webp",
    },
    {
      nome: "Regina Caram",
      detalhe: "Médica",
      texto:
        "Foi maravilhoso fazer os trabalhos como se eu fosse uma criança… e o melhor foi depois fazer alguma coisa com as netas. Aí eu brinquei de professora. Sem preço esta experiência.",
      avatar: "/img/dep-regina-caram.webp",
    },
  ],
  bioChamada: "Ser mãe da Rosa, Lira e Aurora é a sua missão primordial.",
  bio: [
    "Graduada em Belas Artes e Estilismo na UFMG, especialista em Design de Moda pelo SENAI CETIQT e arteterapeuta. Criou as marcas de roupa Botões e Botõeszinhos, atuantes no mercado desde 1998, e atua como figurinista para teatro, grupos musicais e de dança desde então.",
    "Começou a dar aulas de modelagem e costura no seu ateliê, para adultos e crianças, porque descobriu que essa é a missão que está no seu DNA e no das suas ancestrais. Inspirando mulheres a se reconectarem com os fazeres manuais e as crianças a se desenvolverem de maneira mais integral pela costura, vem incluindo contos e dinâmicas curativas nesses processos.",
  ],
  /* A página original não tinha FAQ. Estas respostas saem do próprio
     texto da página (100% online, vitalício, certificado, suporte). */
  faq: [
    {
      pergunta: "O curso é para as crianças ou para mim?",
      resposta:
        "Para você. O curso ensina o adulto — pai, mãe, educador ou profissional da costura — a conduzir a costura com as crianças: a didática, os projetos, os moldes e a progressão da costura à mão até a máquina.",
    },
    {
      pergunta: "Preciso saber costurar para começar?",
      resposta:
        "Não. O pré-requisito é apenas querer. O curso parte das atividades introdutórias de pré-costura e vai desenvolvendo gradualmente a costura à mão e à máquina.",
    },
    {
      pergunta: "Como o curso é entregue?",
      resposta:
        "É 100% on-line e pré-gravado. São 15 módulos com vídeo-aulas, projetos passo a passo e moldes em PDF para baixar e imprimir, acessíveis por computador, celular ou tablet.",
    },
    {
      pergunta: "Quanto tempo terei acesso?",
      resposta:
        "O acesso é vitalício. Você pode acompanhar semanalmente ou maratonar, e voltar ao conteúdo sempre que quiser.",
    },
    {
      pergunta: "Recebo certificado?",
      resposta: "Sim: certificado de participação de 30 horas.",
    },
    {
      pergunta: "Tem suporte?",
      resposta:
        "Sim. O curso conta com suporte e um grupo de alunas no WhatsApp para troca de experiências.",
    },
    {
      pergunta: "E se eu comprar e não gostar?",
      resposta: `Você tem ${GARANTIA} dias para pedir o reembolso, sem precisar justificar. Basta escrever para setteananda@gmail.com ou pedir pela própria Hotmart, e a devolução é integral.`,
    },
  ],
  oferta: {
    checkout: "https://pay.hotmart.com/A27711314Q?off=umg2mxl6&checkoutMode=10",
    precoAVista: "R$ 497,00", // ⚠ CONFERIR
    parcelas: "12x de R$ 48,42", // ⚠ CONFERIR
    acesso: "Acesso vitalício",
    garantiaDias: GARANTIA,
    botao: "Sim! Quero encantar as crianças com a costura",
    inclui: [
      "Acesso vitalício ao curso Costura Afetiva para Crianças",
      "15 módulos com vídeo-aulas passo a passo",
      "Moldes em PDF de todas as atividades",
      "Bônus 1: aula com curadoria de conteúdos relacionados",
      "Bônus 2: conto expressão nas aulas de costura",
      "Bônus 3: passo a passo de 4 atividades avançadas em PDF",
      "Suporte via WhatsApp e grupo de alunas",
      "Certificado de participação, 30 horas",
    ],
  },
  ctaFinal:
    "Inscreva-se hoje mesmo. Todo o conteúdo é pré-gravado — você acessa quando quiser, por computador, celular ou tablet.",
};

/* ---------------------------------------------------------------- */

export const modelagem: Curso = {
  slug: "/modelagem-descomplicada-afetiva/",
  nome: "Modelagem Descomplicada Afetiva",
  promessa: "Autonomia em modelagem e costura de roupas em até 3 meses",
  tema: "petroleo",
  eyebrow: "Curso 100% online · Acesso vitalício",
  resumo:
    "Curso online de modelagem e costura: 8 módulos para modelar saias, blusas, vestidos, calças, macacões, mangas e camisas nas suas medidas.",
  /* Curto de propósito: o vídeo divide a primeira dobra com o texto.
     A frase completa sobre as peças virou a citação no meio da página. */
  chamadaHero: [
    "Mesmo que você nunca tenha modelado antes. Do primeiro traço ao acabamento, com moldes base para imprimir e vídeo-aulas de costura de cada peça.",
  ],
  destaquesHero: [
    "8 módulos, 7 peças modeladas nas suas medidas",
    "Moldes base para baixar, imprimir e montar",
    "Vídeo-aulas de costura de todas as peças",
    "Certificado de participação, 45 horas",
  ],
  vimeo: "530496636",
  imagem: {
    src: "/img/modelagem-mesa.webp",
    alt: "Molde traçado a lápis em papel kraft com curva francesa por cima",
    w: 436,
    h: 436,
  },
  numeros: [
    ["8 módulos", "de modelagem, corte e costura"],
    ["45 horas", "com certificado de participação"],
    ["Vitalício", "acesso ao curso e aos bônus"],
  ],
  paraQuem: {
    texto:
      "Mulheres, profissionais da costura que queiram ampliar os seus conhecimentos e pessoas em geral que queiram ter autonomia para criar as suas próprias roupas.",
    prerequisito: "O pré-requisito é apenas querer!",
  },
  sobre: {
    titulo: "Quais competências este curso trabalha",
    paragrafos: [
      "Este é um curso bem completo. Por isso você vai aprender desde a modelagem, passando pelo corte e finalizando as peças com um passo a passo da costura.",
      "Para ampliar ainda mais os seus conhecimentos na área de confecção de roupas, o curso conta com aulas de aprofundamento em acabamentos e em fibras, fios e materiais têxteis.",
    ],
    destaque: "Modelagem · Corte · Costura · Acabamentos · Fios, fibras e materiais têxteis",
  },
  tituloModulos: "Curso completo: 8 módulos",
  introModulos:
    "Em cada módulo você modela uma peça nas suas medidas e aprende a costurá-la do começo ao fim.",
  modulos: [
    {
      titulo: "Saias",
      aulas: [
        "Como construir diferentes modelos de saias",
        "Diferença de caimento de saia evasê e enviesada",
        "Tipos de cós e acabamentos adequados para cada modelo",
        "Modelagem de uma saia evasê com cós e zíper, nas suas medidas",
      ],
    },
    {
      titulo: "Blusas",
      aulas: [
        "Entendimento do corpo feminino",
        "Análise do corpinho, moldes base, aplicação das pences",
        "Transposição de pences de acordo com cada modelo",
        "Modelagem de uma blusa básica com pences e revel, nas suas medidas",
      ],
    },
    {
      titulo: "Calça pijama",
      aulas: [
        "Entendimento do corpo feminino, parte inferior",
        "Análise das curvas de gancho",
        "Como alterar volumes na boca, na cintura e mais",
        "Como construir modelos diferentes: pantalona, cigarrete, saruel",
        "Modelagem de uma calça tipo pijama, nas suas medidas",
      ],
    },
    {
      titulo: "Vestido",
      aulas: [
        "Transposição das pences para um modelo com recorte",
        "Revel de decote e cava juntos",
        "Como alterar roda",
        "Modelagem de um vestido acinturado com recorte longitudinal, nas suas medidas",
      ],
    },
    {
      titulo: "Pantalona",
      aulas: [
        "Construção de uma calça mais complexa, com abertura de boca, braguilha e petingal",
        "Como usar os recortes para alterar volumes na boca da calça do jeito que você quiser",
      ],
    },
    {
      titulo: "Macacão",
      aulas: [
        "Corpinho duplo acinturado por pences",
        "Alteração de manga",
        "Calça pantacourt com barra irregular",
        "Modelagem de um macacão nas suas medidas",
      ],
    },
    {
      titulo: "Mangas",
      aulas: [
        "Abordagem de inúmeros tipos de manga diferentes",
        "Como inserir os volumes para transformar a manga básica",
        "Modelagem de 6 tipos de manga nas suas medidas",
      ],
    },
    {
      titulo: "Camisa",
      aulas: [
        "Tipos de camisa",
        "Elementos aprofundados de uma camisa clássica",
        "Modelagem de uma camisa clássica feminina de manga longa nas suas medidas",
      ],
    },
  ],
  oQueTem: [
    "Vídeo-aulas detalhadas, teóricas e práticas, com PDF da aula",
    "Moldes base com curvas perfeitas, para baixar, imprimir e montar",
    "Vídeo-aulas de costura de todas as peças modeladas no curso",
    "Suporte e grupo de alunas no Telegram",
    "Acesso por computador, tablet ou celular",
    "Certificado de participação, 45 horas",
  ],
  beneficios: {
    titulo: "Benefícios principais de quem domina modelagem",
    itens: [
      "Autonomia",
      "Concentração",
      "Criatividade",
      "Pensamento lógico",
      "Paciência",
      "Autoconfiança",
      "Ganho financeiro",
    ],
  },
  esperar: [
    "Ter autonomia para criar as suas próprias roupas",
    "Criar roupas para você e para a sua família",
    "Poder criar a sua própria marca para vender roupas",
    "Perder o medo de modelar",
  ],
  atuacao: {
    titulo: "Com a Modelagem Descomplicada Afetiva você poderá atuar como",
    itens: [
      "Proprietária de marca",
      "Modelista independente",
      "Professora de costura e modelagem",
      "Costureira por hobby",
    ],
  },
  bonus: [
    {
      titulo: "Guia completo de acabamento em roupa",
      texto:
        "Linhas e agulhas, tipos de costura, tipos de bainha, acabamentos de decotes, cavas e camisas, fechamentos, uso de entretela e passamanarias.",
      imagem: {
        src: "/img/acabamentos-roupa.webp",
        alt: "Vestido de xadrez vermelho com botões forrados, linha, alfinetes e tesoura",
        w: 592,
        h: 544,
      },
    },
    {
      titulo: "Tudo sobre fibras, fios e tecidos",
      texto: "Tipos de fibras, fiação, tecelagem e acabamentos nos tecidos.",
    },
    {
      titulo: "Construindo o seu negócio de moda",
      texto:
        "Aula ao vivo interativa pelo Zoom: público-alvo, assertividade para escolher nome e marca, tendências para inovação, missão e posicionamento de marca.",
    },
    {
      titulo: "Apostila de gradação de moldes",
      texto:
        "Como aumentar ou diminuir o seu molde, adulto e infantil, com tabelas de tamanho — inclusive com alterações para peças em malha.",
    },
    {
      titulo: "Grupo exclusivo no Telegram",
      texto:
        "Espaço só para interação e troca de experiências, com suporte individualizado e análise de cada molde.",
    },
  ],
  paraQuemSim: [
    "Quem deseja modelar e costurar roupas para si, a família e os amigos, como terapia ou hobby",
    "Costureiras e aprendizes que têm dificuldade com modelagem",
    "Modelistas que já trabalham na área e querem modelar de forma mais rápida e descomplicada",
    "Estudantes de moda que querem de fato aprender a modelar e costurar",
    "Quem quer criar a própria marca e vender roupas",
  ],
  paraQuemNao: [
    "Quem procura fórmulas complexas e decoradas — aqui o caminho é o oposto",
    "Quem quer aula presencial: o curso é 100% em vídeo, pré-gravado",
    "Quem não pretende praticar: as peças são modeladas nas suas medidas, uma a uma",
  ],
  /* Depoimentos originais da página, na íntegra. */
  depoimentos: [
    {
      nome: "Carla Pivoto",
      detalhe:
        "Arquiteta, professora de costura e proprietária do ateliê Costurinhas de Mamãe",
      texto:
        "Eu precisava aprender modelagem para uma demanda por fantasias personalizadas. Aprendi com a Ananda, tudo com muito carinho, amor, desde vestidos, saias, calças e blusas, para adultos e crianças.",
      avatar: "/img/dep-carla-pivoto.webp",
    },
    {
      nome: "Claudia Garcia",
      detalhe: "Terapeuta ocupacional, mãe e costureira amadora",
      texto:
        "Eu nunca tinha feito um molde, nunca tinha tirado uma medida ou cortado um tecido e com a Ananda eu venho aprendendo bastante. Já fiz roupas para mim e para os meus filhos.",
      avatar: "/img/dep-claudia-garcia.webp",
    },
    {
      nome: "Cris Nunes",
      detalhe: "Professora de educação física e costureira amadora",
      texto:
        "Saí do zero, nunca tinha modelado, nunca tinha costurado e hoje eu consigo fazer roupas para mim, minha filha e minha neta. É muito recompensador adquirir essa autonomia!",
      avatar: "/img/dep-cris-nunes.webp",
    },
  ],
  /* Os três depoimentos em vídeo da página original, no Vimeo. */
  depoimentosVideo: [
    { nome: "Alessandra", vimeo: "464016889", titulo: "Fez uma marca de roupas" },
    { nome: "Aline", vimeo: "464017013", titulo: "Mais propriedade na hora de criar" },
    { nome: "Cynthia", vimeo: "464017058", titulo: "Melhorou o trabalho de figurinista" },
  ],
  bioChamada:
    "A minha história com a modelagem começou na minha infância, no ateliê de costura da minha mãe.",
  bio: [
    "Nesse caminhar criei figurinos, me graduei em Belas Artes e criei as minhas marcas: Botões e Botõeszinhos. Cursei estilismo na UFMG e fiz pós-graduação em Design de Moda pelo SENAI CETIQT.",
    "Depois descobri um propósito maior, que é inspirar mulheres que, assim como eu, querem se reconectar com sua ancestralidade, colocar para fora sua criatividade, resgatar fazeres manuais, empreender, se vestir de forma diferente e ter autonomia para criar roupas. Seja para vestir ou vender!",
  ],
  /* FAQ original da página, recuperado do cache do Breeze. */
  faq: [
    {
      pergunta: "Qual é o método de modelagem ensinado no curso?",
      resposta:
        "O método ensinado é o Modelagem Descomplicada Afetiva, criado pela Ananda a partir dos seus conhecimentos e do estudo de vários métodos de modelagem. Assim como a maior parte das modelistas profissionais, ela desenvolveu a sua própria maneira de modelar. Neste método usamos moldes base — disponíveis no curso para baixar, imprimir e montar — para facilitar e descomplicar todo o processo.",
    },
    {
      pergunta: "Preciso gostar ou saber matemática para modelar?",
      resposta:
        "Não. Na Modelagem Descomplicada Afetiva você não precisa decorar nem fazer fórmulas complexas. Você precisa fazer contas simples do dia a dia — divisão, soma e multiplicação — e vai fazer essas contas entendendo o porquê de cada coisa.",
    },
    {
      pergunta: "Este curso é para iniciantes?",
      resposta:
        "O curso usa uma didática simples, objetiva e descomplicada, por isso iniciantes na arte de modelar e costurar têm grande aproveitamento e conseguem modelar peças do zero. Modelistas mais experientes também ampliam e aperfeiçoam seus conhecimentos para desenvolver modelagens de forma mais rápida.",
    },
    {
      pergunta: "O que eu recebo ao me inscrever no curso?",
      resposta:
        "Você aprende a modelar do zero cada peça de roupa: são 7 peças e muitas modificações de mangas. Além das aulas teóricas e práticas de modelagem, o curso tem o passo a passo de costura de cada peça, uma aula riquíssima de acabamentos e uma aula sobre fibras, fios e materiais têxteis.",
    },
    {
      pergunta: "Como receberei o acesso?",
      resposta:
        "Seu acesso é enviado imediatamente para o seu e-mail assim que o pagamento é confirmado. Para compras com boleto o acesso pode demorar até 72 horas, mas normalmente acontece no dia seguinte.",
    },
    {
      pergunta: "Algum material será enviado pelo correio?",
      resposta:
        "Não. O curso é totalmente online. Você recebe tudo na área de membros: vídeos, PDFs e suporte exclusivo pelo grupo de alunas no Telegram.",
    },
    {
      pergunta: "Quanto tempo terei acesso ao curso?",
      resposta:
        "O seu acesso é vitalício. Depois da compra você recebe imediatamente todas as aulas na área de membros e pode acessar sempre que quiser, inclusive as atualizações que eventualmente ocorram.",
    },
    {
      pergunta: "E se eu comprar e não gostar?",
      resposta: `Você tem ${GARANTIA} dias para testar e aplicar. Nesse período pode pedir reembolso a qualquer momento, caso considere que o curso não cumpre o que promete — basta enviar um e-mail para setteananda@gmail.com.`,
    },
  ],
  oferta: {
    checkout: "https://pay.hotmart.com/X41477412M?off=yzqn5a4u&checkoutMode=10",
    precoDe: "R$ 897,00", // ⚠ CONFERIR
    precoAVista: "R$ 447,00", // ⚠ CONFERIR
    parcelas: "12x de R$ 44,61", // ⚠ CONFERIR
    acesso: "Acesso vitalício",
    garantiaDias: GARANTIA,
    botao: "Sim! Quero dominar a modelagem",
    inclui: [
      "Acesso ao curso online completo Modelagem Descomplicada Afetiva",
      "8 módulos, com 7 peças modeladas nas suas medidas",
      "Bônus 1: guia completo de acabamentos em roupa",
      "Bônus 2: tudo sobre fibras, fios e tecidos",
      "Bônus 3: vídeo-aula “Construindo o seu Negócio de Moda”",
      "Bônus 4: apostila de gradação de moldes",
      "Grupo no Telegram exclusivo para interação",
      "Certificado de participação, 45 horas",
    ],
  },
  ctaFinal:
    "Tenha acesso completo ao curso online Modelagem Descomplicada Afetiva e conquiste a sua autonomia para criar roupas — para vestir ou para vender.",
};

export const cursos: Curso[] = [costuraCriancas, modelagem];
