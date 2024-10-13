// pages/biography.tsx

import Layout from "../components/Layout";

const Biography = () => {
  return (
    <Layout title="Biographie" description="Apprenez-en plus sur l'artiste">
      <h1 className="text-3xl font-bold">Biographie de l'artiste</h1>
      <p className="mt-4">Voici quelques informations sur l'artiste et son parcours.</p>
      {/* Ajoutez des détails sur la biographie ici */}
    </Layout>
  );
};

export default Biography;
