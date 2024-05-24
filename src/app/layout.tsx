"use client"

import { Provider } from 'react-redux';
import store from '@/store';
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
