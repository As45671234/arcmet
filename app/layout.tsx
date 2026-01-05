import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARCMET - Строительные материалы",
  description: "Профессиональные строительные материалы: гидроизоляция, теплоизоляция, кровля.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}
