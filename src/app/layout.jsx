import StyledComponentsRegistry from '../lib/registry';
import GlobalStyle from "../../theme/globalStyles";
import { ThemeProvider as CustomThemeProvider } from '../../theme/ThemeContext'; // Import the custom ThemeProvider
import React from 'react';
import Head from 'next/head';

export const metadata = {
  title: "Empreguei by Kalify Inc.",
  description: "O lugar para encontrar o emprego que você precisa",
};

export default function RootLayout({ children }) {

  return (
    <html lang="pt">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body>
        <StyledComponentsRegistry>
          <CustomThemeProvider> {/* Use the custom ThemeProvider */}
            <GlobalStyle />
            {children}
          </CustomThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}