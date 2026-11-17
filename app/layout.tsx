import type { Metadata, Viewport } from 'next';
import './globals.css';
import './responsive.css';
// Use each device viewport while preserving browser zoom.
export const viewport: Viewport={width:'device-width',initialScale:1,userScalable:true};
export const metadata: Metadata={title:'HB • Escola de Futebol | Paracatu–MG',description:'O futebol começa aqui. Conheça a Escola de Futebol HB em Paracatu–MG. Categorias do Sub-6 ao Sub-13. Faça sua pré-matrícula.',icons:{icon:'/images/hb-logo.webp'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
