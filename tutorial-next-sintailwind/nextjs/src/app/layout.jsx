import './globals.css'
import { Navigation } from './components/Navigation'
import { font } from './font.js'




export default function RootLayout({ children }) {
  return (
    <html >
      <head>
        <title>Next.js</title>
      </head>

      <body className={font.className}>
        <Navigation />

        {children}</body>
    </html>
  )
}
