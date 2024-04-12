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
    <main className={cn(monserrat.className, "light bg-[url('https://cdn.discordapp.com/attachments/1227579080442904662/1228210856836464750/Education_Sketchnotes_Presentation_Template.png?ex=662b377f&is=6618c27f&hm=73440e748cc3dd1a6fa05d1a5049568d11b8052e823357d957790dfffb1c0a3a&')] bg-no-repeat bg-cover bg-center")}>
      <ThemeProvider enableSystem={false} themes={["light", "dark"]} defaultTheme="light" attribute="class">
        <SocketProvider>
          <Component {...pageProps} />
        </SocketProvider>
      </ThemeProvider>
    </main>
  );
}
