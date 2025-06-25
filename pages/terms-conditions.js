/* eslint-disable @next/next/no-img-element */
import Layout from "../components/Layout/Layout";

export default function TermsPage() {
  return (
    <Layout>
      <section className="section-box mt-20">
        <div className="container">
          <h1 className="text-3xl font-bold mb-30">Termos e Condições</h1>

          <p className="mb-4">
            Ao aceder e utilizar a plataforma Jet Hire — disponível em <a href="https://www.jethire.pt" className="text-primary underline">www.jethire.pt</a> e <a href="https://dashboard.jethire.pt" className="text-primary underline">dashboard.jethire.pt</a> — o utilizador aceita integralmente os termos e condições aqui descritos. Caso não concorde com algum dos pontos, deverá cessar imediatamente a utilização da plataforma.
          </p>

          <p className="mb-4">
            A Jet Hire funciona como um intermediário digital entre candidatos à procura de oportunidades e empresas que procuram novos talentos. Embora nos esforcemos por facilitar esta ligação de forma eficaz, não garantimos qualquer tipo de colocação profissional nem asseguramos o sucesso dos processos de recrutamento realizados através da plataforma.
          </p>

          <p className="mb-4">
            O registo na Jet Hire pressupõe o fornecimento de dados reais, completos e atualizados. As contas criadas são pessoais, confidenciais e intransmissíveis. A utilização indevida, fraudulenta ou com fins ilícitos poderá resultar na suspensão ou remoção da conta, sem aviso prévio.
          </p>

          <p className="mb-4">
            Toda a informação publicada pelas empresas, incluindo ofertas de trabalho, é da exclusiva responsabilidade das mesmas. A Jet Hire não se responsabiliza pelo conteúdo dessas ofertas nem por eventuais informações incorretas, desatualizadas ou enganosas publicadas por terceiros.
          </p>

          <p className="mb-4">
            O utilizador compromete-se a utilizar a plataforma de forma ética, legal e respeitadora dos direitos de terceiros. É expressamente proibida a publicação de conteúdos ofensivos, discriminatórios, difamatórios ou enganosos.
          </p>

          <p className="mb-4">
            Todos os elementos presentes na plataforma — incluindo logótipos, textos, gráficos, funcionalidades, imagens e código-fonte — são propriedade da Jet Hire ou encontram-se licenciados para uso exclusivo da mesma. É proibida qualquer reprodução, distribuição ou utilização desses conteúdos sem autorização expressa e por escrito.
          </p>

          <p className="mb-4">
            A Jet Hire reserva-se o direito de atualizar os presentes Termos e Condições sempre que necessário. Qualquer modificação entra em vigor a partir do momento em que é publicada, sendo da responsabilidade do utilizador consultar regularmente esta página.
          </p>

          <p className="mb-4">
            Para quaisquer questões, sugestões ou esclarecimentos adicionais, poderá contactar a nossa equipa através do endereço de email{" "}
            <a href="mailto:suporte@jethire.pt" className="text-primary underline">
              suporte@jethire.pt
            </a>.
          </p>

          <p className="text-sm italic mt-6">Jet Hire, Junho 2025</p>
        </div>
      </section>
    </Layout>
  );
}
