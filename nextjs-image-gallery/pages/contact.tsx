// pages/contact.tsx

import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout title="Contact" description="Contactez-nous pour plus d'informations">
      <h1 className="text-3xl font-bold">Contactez-nous</h1>
      <p className="mt-4">Vous pouvez nous contacter par email ou téléphone.</p>
      {/* Ajoutez un formulaire de contact ou des informations de contact ici */}
    </Layout>
  );
};

export default Contact;
