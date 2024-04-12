import "@/styles/globals.css";
import { SocketProvider } from "@/context/socket";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";

const monserrat = Montserrat({
  subsets: ["latin"],
  weight: "variable",
  display: "swap"
});

export default function App({ Component, pageProps }) {
  return (
    <main className={cn(monserrat.className, "light")}>
      <ThemeProvider enableSystem={true} themes={["light", "dark"]} defaultTheme="dark" attribute="class">
        <SocketProvider>
          <Component {...pageProps} />
        </SocketProvider>
      </ThemeProvider>
    </main>
  );
}
