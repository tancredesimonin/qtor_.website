import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="h-full bg-gray-900">
      <Head />
      <body className="h-full bg-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}