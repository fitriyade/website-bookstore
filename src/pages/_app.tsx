import type { AppProps } from "next/app";
import { CartProvider } from "@/context/cardContext";
import { Outfit } from "next/font/google";
import "@/styles/globals.css";

// Konfigurasi font Outfit
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${outfit.className} font-sans antialiased`}>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </div>
  );
}
