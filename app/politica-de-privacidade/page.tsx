import type { Metadata } from "next";
import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import PaginaLegal, { type BlocoLegal } from "@/components/site/PaginaLegal";
import { contato } from "@/components/site/dados";

/* ------------------------------------------------------------------
   ⚠ REVISAR COM ADVOGADO antes de publicar. Este texto foi escrito
   para descrever o que ESTE site faz — não é a política antiga, que
   era o modelo padrão do WordPress, citava "Amigo Violão" cinco vezes
   e falava de comentários, Gravatar e contas de usuário que não
   existem mais.

------------------------------------------------------------------- */

const RAZAO_SOCIAL = "Ananda Lucia Batista Sette Camara"; // conforme CNPJ 60.666.584/0001-60
const CNPJ = "60.666.584/0001-60";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como o Ateliê Ananda Sette trata os dados de quem visita o site: o que é coletado, por quê, com quem é compartilhado e quais são os seus direitos pela LGPD.",
  alternates: { canonical: "/politica-de-privacidade/" },
};

const blocos: BlocoLegal[] = [
  {
    titulo: "Quem é o responsável pelos dados",
    paragrafos: [
      `Este site é mantido por ${RAZAO_SOCIAL}${CNPJ ? `, inscrita sob o CNPJ ${CNPJ}` : ""}, com ateliê em Belo Horizonte, Minas Gerais. Para qualquer assunto relativo a dados pessoais, incluindo os pedidos previstos na Lei Geral de Proteção de Dados (Lei nº 13.709/2018), escreva para ${contato.email}.`,
      "O endereço deste site é https://anandasette.com.br.",
    ],
  },
  {
    titulo: "O que este site coleta",
    paragrafos: [
      "Este site é estático e informativo. Ele não tem cadastro, não tem área de login, não tem comentários e não processa pagamentos. Não existe formulário que grave dados em nossos servidores.",
      "Se você nos procurar por WhatsApp, e-mail, Instagram ou YouTube, receberemos os dados que você mesmo enviar — nome, telefone ou e-mail, e o conteúdo da mensagem. Usamos isso apenas para responder e conversar sobre os cursos e as aulas.",
    ],
  },
  {
    titulo: "Cookies e tecnologias semelhantes",
    paragrafos: [
      "Por padrão, este site não instala cookies de publicidade nem de rastreamento. Guardamos no seu navegador apenas a sua escolha sobre cookies, para não perguntar de novo a cada visita — esse registro fica no seu próprio aparelho e não é enviado a ninguém.",
      "Se você autorizar os cookies de medição no aviso exibido na primeira visita, passaremos a usar ferramentas de estatística de audiência para entender quais páginas são mais lidas. Você pode mudar de ideia a qualquer momento limpando os dados do site no seu navegador.",
    ],
  },
  {
    titulo: "Conteúdo incorporado de outros sites",
    paragrafos: [
      "As páginas dos cursos exibem vídeos hospedados no Vimeo. Esses vídeos são carregados com o modo de não rastreamento ativado, mas o Vimeo ainda registra requisições ao servidor dele, como o seu endereço de IP e o tipo de navegador, do mesmo modo que aconteceria se você visitasse o site do Vimeo diretamente.",
      "O tratamento desses dados segue a política de privacidade do Vimeo, sobre a qual não temos controle.",
    ],
  },
  {
    titulo: "Compras dos cursos",
    paragrafos: [
      "As compras não acontecem neste site. Ao clicar em um botão de compra, você é levado para a plataforma Hotmart, que é responsável pelo checkout, pelo pagamento, pela emissão fiscal e pela entrega do curso na área de alunos.",
      "Os dados que você informa no checkout são coletados e tratados pela Hotmart, segundo a política de privacidade dela. Recebemos da Hotmart apenas as informações necessárias para identificar as alunas matriculadas e prestar suporte — nome e e-mail, entre outros dados do pedido.",
    ],
  },
  {
    titulo: "Hospedagem e registros de acesso",
    paragrafos: [
      "O site é hospedado na Cloudflare, que mantém registros técnicos de acesso — como endereço de IP, data e hora — para operar a rede, proteger contra ataques e garantir a disponibilidade das páginas. Esses registros são tratados pela Cloudflare conforme as políticas dela.",
    ],
  },
  {
    titulo: "Com quem compartilhamos seus dados",
    paragrafos: [
      "Não vendemos, alugamos nem cedemos dados pessoais a terceiros. Os dados só transitam pelos prestadores necessários para o site funcionar e para os cursos serem entregues, listados nesta política: Hotmart, Vimeo e Cloudflare.",
    ],
  },
  {
    titulo: "Por quanto tempo guardamos",
    paragrafos: [
      "As conversas por WhatsApp e e-mail ficam guardadas enquanto forem úteis ao atendimento e ao histórico da relação, ou até você pedir a exclusão. Dados de matrícula e pagamento seguem os prazos da Hotmart e da legislação fiscal.",
    ],
  },
  {
    titulo: "Seus direitos",
    paragrafos: [
      `A LGPD garante que você possa, a qualquer momento, pedir: confirmação de que tratamos dados seus, acesso a esses dados, correção do que estiver incompleto ou desatualizado, anonimização ou exclusão, informação sobre com quem compartilhamos, e a revogação do seu consentimento. Basta escrever para ${contato.email} — respondemos no menor prazo possível.`,
    ],
  },
  {
    titulo: "Crianças e adolescentes",
    paragrafos: [
      "O curso Costura Afetiva para Crianças é destinado a adultos — pais, mães e educadores — que vão conduzir a costura com as crianças. Não coletamos deliberadamente dados de menores de idade por meio deste site. Se souber de algum dado assim, escreva para nós e faremos a exclusão.",
    ],
  },
  {
    titulo: "Mudanças nesta política",
    paragrafos: [
      "Se o site passar a usar novas ferramentas, esta política será atualizada e a data de revisão no topo mudará junto. Vale a pena reler de vez em quando.",
    ],
  },
];

export default function PoliticaDePrivacidade() {
  return (
    <>
      <Header solido />
      <main id="conteudo">
        <PaginaLegal
          titulo="Política de Privacidade"
          resumo="O que este site coleta, o que não coleta, com quem os dados transitam e como exercer os seus direitos."
          atualizadoEm="1º de setembro de 2026"
          blocos={blocos}
        />
      </main>
      <Footer />
    </>
  );
}
