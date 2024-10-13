// pages/contact.tsx

import Layout from "../components/Layout";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'envoi du formulaire
    console.log({
      name,
      email,
      message,
    });
    setSubmitted(true);
  };

  return (
    <Layout title="Contact" description="Contactez-nous pour plus d'informations">
      <h1 className="text-3xl font-bold">Contactez-nous</h1>
      <p className="mt-4">Vous pouvez nous contacter par email ou téléphone.</p>
      
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Formulaire de contact</h2>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium">
                Nom
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500"
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
            >
              Envoyer
            </button>
          </form>
        ) : (
          <div className="text-center text-green-600">
            <p>Merci de nous avoir contactés ! Nous vous répondrons sous peu.</p>
          </div>
        )}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Nos coordonnées</h2>
        <p>Email : contact@votreentreprise.com</p>
        <p>Téléphone : +33 1 23 45 67 89</p>
        <p>Adresse : 123 Rue de l'Exemple, 75000 Paris, France</p>
      </div>
    </Layout>
  );
};

export default Contact;
