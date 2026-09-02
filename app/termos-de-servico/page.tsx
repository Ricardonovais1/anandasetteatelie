import type { Metadata } from "next";
import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import PaginaLegal, { type BlocoLegal } from "@/components/site/PaginaLegal";
import { contato } from "@/components/site/dados";
import { costuraCriancas, modelagem } from "@/components/venda/dados";

/* ------------------------------------------------------------------
   ⚠ REVISAR COM ADVOGADO antes de publicar. Não é o texto antigo: os
   termos originais eram um modelo genérico de loja virtual, diziam que
   o site era "operado pelo Amigo Mestre" e falavam de carrinho e
   cartão de crédito — nada disso existe aqui.

   ⚠ CONFERIR: o prazo de garantia sai de `components/venda/dados.ts`,
   hoje em 30 dias. A página antiga anunciava 15.
------------------------------------------------------------------- */

const RAZAO_SOCIAL = "Ananda Lucia Batista Sette Camara"; // conforme CNPJ 60.666.584/0001-60
const CNPJ = "60.666.584/0001-60";
const GARANTIA = modelagem.oferta.garantiaDias;

export const metadata: Metadata = {
  title: "Termos de Serviço",
  description:
    "Condições de uso do site do Ateliê Ananda Sette e regras dos cursos online vendidos pela Hotmart: acesso, garantia, direitos autorais e suporte.",
  alternates: { canonical: "/termos-de-servico/" },
};

const blocos: BlocoLegal[] = [
  {
    titulo: "Visão geral",
    paragrafos: [
      `Este site é operado por ${RAZAO_SOCIAL}, inscrita sob o CNPJ ${CNPJ}, do Ateliê Ananda Sette, em Belo Horizonte. Ao navegar por ele, você concorda com estes Termos de Serviço e com a Política de Privacidade.`,
      "Estes termos podem ser atualizados a qualquer momento. A data de revisão no topo indica a versão vigente, e o uso continuado do site depois de uma alteração significa que você a aceitou.",
    ],
  },
  {
    titulo: "O que este site é",
    paragrafos: [
      "Este site é informativo. Ele apresenta o ateliê, as aulas presenciais, as jornadas de arteterapia têxtil e os cursos online. Não há cadastro, carrinho nem pagamento neste domínio.",
    ],
  },
  {
    titulo: "Compra dos cursos online",
    paragrafos: [
      `Os cursos ${costuraCriancas.nome} e ${modelagem.nome} são vendidos pela plataforma Hotmart. Ao clicar em um botão de compra, você é levado ao checkout da Hotmart, que é responsável pelo processamento do pagamento, pela emissão fiscal e pela liberação do acesso.`,
      "A relação de consumo referente ao pagamento segue também os termos da Hotmart. Os preços e as condições exibidos aqui podem mudar sem aviso prévio; vale sempre o que estiver no checkout no momento da compra.",
    ],
  },
  {
    titulo: "Acesso ao curso",
    paragrafos: [
      "Após a confirmação do pagamento, o acesso é liberado na área de alunos da Hotmart e enviado para o e-mail informado na compra. Pagamentos por boleto podem levar até 72 horas para serem confirmados.",
      "O acesso é pessoal e intransferível, vinculado ao e-mail da compradora. É vedado compartilhar login, gravar, redistribuir ou revender as aulas.",
    ],
  },
  {
    titulo: "Garantia e reembolso",
    paragrafos: [
      `Você tem ${GARANTIA} dias, contados da confirmação da compra, para pedir o reembolso integral, sem precisar justificar. Basta solicitar pela própria Hotmart ou escrever para ${contato.email}.`,
      "Esse prazo é maior que o direito de arrependimento de 7 dias previsto no Código de Defesa do Consumidor, que continua garantido de qualquer forma.",
    ],
  },
  {
    titulo: "Direitos autorais",
    paragrafos: [
      "Todo o conteúdo do site e dos cursos — textos, vídeos, moldes, apostilas, fotografias, marca e identidade visual — é de titularidade do Ateliê Ananda Sette e está protegido pela Lei nº 9.610/1998.",
      "É permitido usar os moldes e as técnicas ensinadas nas suas próprias criações, inclusive para vender as peças que você fizer. Não é permitido reproduzir, republicar ou comercializar o material didático em si, nem ministrar os cursos como se fossem seus.",
    ],
  },
  {
    titulo: "O que esperamos de você",
    itens: [
      "Usar o site e o conteúdo dos cursos para fins lícitos",
      "Não tentar burlar, copiar ou redistribuir o acesso à área de alunos",
      "Não usar a marca ou o material do ateliê sem autorização por escrito",
      "Tratar as demais alunas com respeito nos grupos de suporte",
    ],
  },
  {
    titulo: "Resultados",
    paragrafos: [
      "Os cursos ensinam técnica e método. O resultado de cada aluna depende da prática, da dedicação e do tempo que ela investir. Nenhum depoimento publicado neste site é promessa de resultado, e não garantimos ganho financeiro a partir do que é ensinado.",
    ],
  },
  {
    titulo: "Aulas presenciais e jornadas",
    paragrafos: [
      "As aulas no ateliê e as jornadas de arteterapia têxtil são combinadas diretamente com a Ananda, e as condições de cada turma — vagas, valores, materiais e calendário — são acertadas nessa conversa.",
    ],
  },
  {
    titulo: "Links para outros sites",
    paragrafos: [
      "Este site remete a serviços de terceiros, como Hotmart, Vimeo, WhatsApp, Instagram e YouTube. Não respondemos pelo conteúdo nem pelas políticas desses serviços; ao acessá-los, valem os termos de cada um.",
    ],
  },
  {
    titulo: "Disponibilidade",
    paragrafos: [
      "Fazemos o possível para manter o site no ar e as informações corretas, mas ele pode ficar indisponível por manutenção ou por fatores fora do nosso controle. Reservamos o direito de alterar ou descontinuar qualquer parte do site a qualquer momento.",
    ],
  },
  {
    titulo: "Foro e contato",
    paragrafos: [
      `Estes termos são regidos pela lei brasileira. Fica eleito o foro da comarca de Belo Horizonte, Minas Gerais, para dirimir eventuais controvérsias. Dúvidas sobre estes termos: ${contato.email} ou ${contato.telefone}.`,
    ],
  },
];

export default function TermosDeServico() {
  return (
    <>
      <Header solido />
      <main id="conteudo">
        <PaginaLegal
          titulo="Termos de Serviço"
          resumo="As regras de uso do site e as condições dos cursos online: como funciona a compra, o acesso, a garantia e o uso do material."
          atualizadoEm="1º de setembro de 2026"
          blocos={blocos}
        />
      </main>
      <Footer />
    </>
  );
}
