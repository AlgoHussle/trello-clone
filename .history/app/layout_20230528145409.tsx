import './globals.css'

export const metadata = {
  title: 'MindFlow',
  description: 'Created by AlgoHussle',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <bod y>{children}</bod>
    </html>
  )
}
