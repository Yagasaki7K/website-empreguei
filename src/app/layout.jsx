import "./globals.css";

export const metadata = {
  title: "Empreguei",
  description: "O lugar para encontrar o emprego que você precisa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
