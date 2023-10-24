import AppContainer from "@/components/frame/appContainer";
import "@/assets/css/styles.css";

export const metadata = {
  title: "Agent Monitoring - for using Wazhu api",
  description: "Wazhu를 사용한 모니터링 시스템 입니다.",
  charset: "utf-8",
  viewPort: "width=device-width, initial-scale=1.0",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body
        style={{
          maxWidth: "820px",
          minWidth: "320px",
          margin: "auto",
        }}
      >
        <AppContainer>{children}</AppContainer>
      </body>
    </html>
  );
};
export default RootLayout;
