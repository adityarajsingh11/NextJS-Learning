import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export default function RootLayout({ children,team }) {
  return (
    <html>
      <body className="w-screen h-screen flex">

        <div>hello world</div>

        <div className="w-[50%] bg-amber-600">{children}</div> 

        <div className="w-[50%] bg-amber-950">{team}</div> 
        
        </body>
    </html>
  );
}
