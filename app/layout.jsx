import "./globals.css";

export const metadata = {
  title: "Fenêtre Aluminium Premium",
  description:
    "Infographie avant/après présentant les gains d'une fenêtre aluminium moderne.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
