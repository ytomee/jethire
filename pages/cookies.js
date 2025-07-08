/* eslint-disable @next/next/no-img-element */
import Layout from "../components/Layout/Layout";

export default function CookiesPolicyPage() {
  return (
    <Layout>
      <section className="section-box mt-20 mb-50 pt-70">
        <div className="container">
          <h1 className="text-3xl font-bold mb-40">Política de Cookies</h1>

          <p className="mb-4">
            A Jet Hire utiliza cookies com o objetivo de melhorar a experiência de navegação dos seus utilizadores, analisar o tráfego no website e permitir a personalização de conteúdos de acordo com as preferências individuais de cada visitante. Ao continuar a utilizar o nosso site, está a consentir a utilização de cookies conforme descrito nesta política.
          </p>

          <p className="mb-4">
            Os cookies são pequenos ficheiros de texto armazenados no dispositivo do utilizador através do navegador, permitindo o reconhecimento do mesmo aquando de visitas futuras. Estes ficheiros podem ser temporários, desaparecendo ao fechar o navegador, ou persistentes, mantendo-se no dispositivo por um período mais alargado.
          </p>

          <p className="mb-4">
            A nossa plataforma utiliza diferentes tipos de cookies, nomeadamente: cookies estritamente necessários ao funcionamento do site (como os que permitem manter a sessão ativa ou guardar as preferências de idioma), cookies analíticos, que nos ajudam a compreender a forma como os visitantes interagem com o site para melhorar continuamente a sua usabilidade, e cookies funcionais, que possibilitam uma navegação mais personalizada.
          </p>

          <p className="mb-4">
            É importante referir que nenhum dos cookies utilizados recolhe informações pessoais ou sensíveis. Os dados armazenados são de natureza técnica e destinam-se exclusivamente à melhoria do desempenho da plataforma e da experiência do utilizador.
          </p>

          <p className="mb-4">
            A qualquer momento, o utilizador pode configurar o seu navegador para bloquear ou eliminar os cookies existentes. No entanto, ao desativar cookies essenciais, algumas funcionalidades do site poderão não funcionar corretamente ou ficar comprometidas.
          </p>

          <p className="mb-4">
            Recomendamos que consulte a secção de ajuda do seu navegador para obter informações detalhadas sobre como gerir cookies de forma personalizada. Caso tenha dúvidas sobre esta política ou sobre o uso de cookies na plataforma Jet Hire, poderá contactar-nos através do email{" "}
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
