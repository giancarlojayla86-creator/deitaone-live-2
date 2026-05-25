export const metadata = {
  title: "DEITAONE LIVE",
  description: "Realtime news"
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
