import Header from "@/components/layout/Header";
import "./globals.scss";

export const metadata = {
  title: "Portfolio by Next",
  description: "create portfolio by Next",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="scrollBar">
        <Header />
        {children}
      </body>
    </html>
  );
}
