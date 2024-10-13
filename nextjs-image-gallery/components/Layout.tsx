// components/Layout.tsx

import React from "react";

const Layout = ({ title, description, children }: { title: string; description: string; children: React.ReactNode }) => {
  return (
    <div>
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </head>
      <header>
        <nav>
          {/* Votre barre de navigation ici */}
        </nav>
      </header>
      <main className="container mx-auto p-4">
        {children}
      </main>
      <footer>
        <p>&copy; 2024 Katia Shop</p>
      </footer>
    </div>
  );
};

export default Layout;
