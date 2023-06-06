import "./globals.css";
import StyledComponentsRegistry from '../lib/registry';

export const metadata = {
  title: "Empreguei",
  description: "O lugar para encontrar o emprego que você precisa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
