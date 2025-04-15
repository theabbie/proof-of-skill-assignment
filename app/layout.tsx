
export const metadata = {
  title: 'Next.js App',
  description: 'Created with Next.js',
}

import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
