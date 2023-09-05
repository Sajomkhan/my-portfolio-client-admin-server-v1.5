import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
// import ReduxProvider from '@/redux/provider'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Portfolio for Saiful Ajom Khan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
