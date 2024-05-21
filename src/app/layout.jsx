import { Inter } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from "@/context/AuthContext";
import { CookiesProvider } from "next-client-cookies/server";
import { inter } from "@/utils/fonts/fonts";

export const metadata = {
  title: "Eduk2",
  description: "Created by Aragangs.dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CookiesProvider>
          <AuthContextProvider>
            {children}
          </AuthContextProvider>
        </CookiesProvider>
      </body>
    </html>
  );
}
