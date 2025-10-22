import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KAS POS - HỆ THỐNG QUẢN LÝ BÁN HÀNG TOÀN DIỆN",
  description:
    "Giải pháp quản lý bán hàng và vận hành chuỗi toàn diện. Tích hợp thanh toán, quản lý kho, báo cáo thông minh - tất cả trong một hệ thống.",
  keywords:
    "POS, quản lý bán hàng, phần mềm quản lý, quản lý kho, thanh toán, báo cáo bán hàng, KAS",
  // cấu hình icon để hiển thị favicon trên tab trình duyệt (nhiều kích thước / định dạng)
  icons: {
    icon: [
      {
        url: "https://api-kom.kas.asia/api/uploads/chat_image/Logo_KAS_1751350227987.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        url: "https://api-kom.kas.asia/api/uploads/chat_image/Logo_KAS_1751350227987.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    shortcut: "https://api-kom.kas.asia/api/uploads/chat_image/Logo_KAS_1751350227987.png",
    apple: [
      {
        url: "https://api-kom.kas.asia/api/uploads/chat_image/Logo_KAS_1751350227987.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "KAS POS - HỆ THỐNG QUẢN LÝ BÁN HÀNG TOÀN DIỆN",
    description:
      "Giải pháp quản lý bán hàng và vận hành chuỗi toàn diện. Tích hợp thanh toán, quản lý kho, báo cáo thông minh.",
    url: "https://posone.vn",
    siteName: "KAS",
    images: [
      {
        url: "https://api-kom.kas.asia/api/uploads/chat_image/Logo_KAS_1751350227987.png",
        width: 1200,
        height: 630,
        alt: "KAS Logo",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KAS POS - HỆ THỐNG QUẢN LÝ BÁN HÀNG TOÀN DIỆN",
    description: "Giải pháp quản lý bán hàng và vận hành chuỗi toàn diện.",
    images: [
      "https://api-kom.kas.asia/api/uploads/chat_image/Logo_KAS_1751350227987.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
