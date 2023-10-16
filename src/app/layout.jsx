import AppContainer from "@/components/frame/appContainer";
import "../assets/css/styles.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "씨네스투어",
  description: "씨네스투어",
  charset: "utf-8",
  viewPort: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppContainer>{children}</AppContainer>
      </body>
    </html>
  );
}
