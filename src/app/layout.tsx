import React from 'react';
import '@/styles/globals.css';

export const metadata = {
  title: 'Rick and Morty Characters',
  description: 'A list of characters from Rick and Morty',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
