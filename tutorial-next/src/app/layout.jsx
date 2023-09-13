import './globals.css'
import { Navigation } from './components/Navigation'


export default function RootLayout({ children }) {
  return (
    <html >
      <head>
        <title>Next.js</title>
      </head>

      <body >
        <Navigation />

        {children}</body>
    </html>
  )
}
