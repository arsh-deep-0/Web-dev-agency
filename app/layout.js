
import './globals.css'



export const metadata = {
  title: 'ShineSpots',
  description: 'Brightening  Housing  Enterprises',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
         <head>
        <link rel='icon' href='/logo.svg'/>
      </head>
      <body className=''>{children}</body>
    </html>
  )
}
