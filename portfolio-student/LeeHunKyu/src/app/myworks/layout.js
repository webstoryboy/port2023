export const metadata = {
  title: "Hoong's Works",
  description: "Works of Javascript, Site Coding",
};

export default function MyWorkLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
