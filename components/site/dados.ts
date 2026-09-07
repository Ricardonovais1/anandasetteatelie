/** Dados de contato e navegação — um único lugar para atualizar. */

export const contato = {
  telefone: "(31) 98571-8801",
  whatsapp: "https://wa.me/5531985718801",
  whatsappTexto:
    "https://wa.me/5531985718801?text=Ol%C3%A1%2C%20Ananda!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20aulas.",
  whatsappListaEspera:
    "https://wa.me/5531985718801?text=Ol%C3%A1%2C%20Ananda!%20Quero%20entrar%20na%20lista%20de%20espera%20das%20jornadas%20de%20arteterapia%20t%C3%AAxtil%20de%202027.",
  email: "setteananda@gmail.com",
  instagram: "https://www.instagram.com/anandasette/",
  instagramTecerAlma: "https://www.instagram.com/teceralma/",
  youtube: "https://www.youtube.com/@anandasette",
  cidade: "Belo Horizonte · MG",
};

export const navegacao = [
  { href: "/#atelie", rotulo: "O ateliê" },
  { href: "/#caminhos", rotulo: "Caminhos" },
  { href: "/#jornadas", rotulo: "Jornadas" },
  { href: "/#ananda", rotulo: "Sobre Ananda" },
  { href: "/#criacoes", rotulo: "Criações" },
  { href: "/#contato", rotulo: "Contato" },
];

/** Link do formulário de lista de espera das jornadas de arteterapia.
 *
 *  ⚠ CONFERIR: a Ananda tem um formulário próprio, com os valores de cada
 *  turma. Enquanto a URL não entra aqui, o botão cai no WhatsApp — que
 *  funciona, só dá mais trabalho para ela. Troque só esta linha. */
export const listaEspera = contato.whatsappListaEspera;
