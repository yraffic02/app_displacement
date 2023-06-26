'use client'
import Header from '@/components/Header/header'
import './globals.css'
import { GlobalContextProvider } from './Context/store'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <GlobalContextProvider>
          <Header />
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  )
}