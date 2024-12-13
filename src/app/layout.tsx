import type { Metadata } from "next";
import { Vazirmatn } from 'next/font/google'
import "./globals.css";

const vazirmatn = Vazirmatn({
    subsets: ['latin' , 'arabic'],
    display: 'swap',
})

export const metadata: Metadata = {
  title: "دکترلند",
  description: "پلتفرم جستجوی دکتر و رزرو نوبت",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.className}>
        {children}
      </body>
    </html>
  );
}
