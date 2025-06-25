/* eslint-disable @next/next/no-img-element */
import Layout from "../components/Layout/Layout";

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <section className="section-box mt-20 mb-40">
        <div className="container">
          <h1 className="text-3xl font-bold mb-40">Política de Privacidade</h1>

          <p className="mb-4">
            A Jet Hire respeita a privacidade dos seus utilizadores e está empenhada em proteger os dados pessoais que recolhe e trata, em total conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD).
          </p>

          <p className="mb-4">
            No âmbito da utilização da plataforma, recolhemos informações como o nome, endereço de email, localização, bem como dados facultados no perfil, como experiência profissional, currículo, foto ou candidaturas submetidas. Também podem ser recolhidos dados técnicos relativos ao dispositivo e navegador, como o endereço IP e o sistema operativo.
          </p>

          <p className="mb-4">
            Estes dados são utilizados para garantir o funcionamento eficiente e seguro da plataforma, bem como para personalizar a experiência de cada utilizador. Permitimos, por exemplo, que candidatos encontrem ofertas relevantes e que empresas identifiquem os perfis mais adequados às suas necessidades. Os dados são também usados para melhorar continuamente os nossos serviços e resolver questões relacionadas com suporte ou segurança.
          </p>

          <p className="mb-4">
            A Jet Hire compromete-se a não partilhar os seus dados com terceiros sem o seu consentimento, exceto quando tal for necessário para o cumprimento de obrigações legais ou para a execução dos serviços prestados, como no caso de comunicações entre empresas e candidatos iniciadas pela própria candidatura.
          </p>

          <p className="mb-4">
            Todos os dados são armazenados de forma segura e acessíveis apenas a entidades autorizadas. Tomamos medidas técnicas e organizativas para garantir a confidencialidade e integridade da informação tratada.
          </p>

          <p className="mb-4">
            Nos termos da legislação aplicável, o utilizador tem o direito de aceder aos seus dados, solicitar a sua retificação ou eliminação, opor-se ao tratamento ou pedir a portabilidade dos mesmos. Estes direitos podem ser exercidos a qualquer momento, mediante pedido enviado para o endereço de email{" "}
            <a href="mailto:suporte@jethire.pt" className="text-primary underline">
              suporte@jethire.pt
            </a>.
          </p>

          <p className="mb-4">
            Esta política poderá ser atualizada periodicamente, sendo todas as alterações comunicadas nesta página. Recomendamos a sua consulta regular.
          </p>

          <p className="text-sm italic mt-6">Jet Hire, Junho 2025</p>
        </div>
      </section>
    </Layout>
  );
}
