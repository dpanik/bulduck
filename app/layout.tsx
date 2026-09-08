import type { Metadata } from 'next';
import './globals.css';
const assetPrefix=process.env.NEXT_PUBLIC_ASSET_PREFIX||'';
const siteUrl=process.env.NEXT_PUBLIC_SITE_URL||'http://localhost:3008';
export const metadata:Metadata={metadataBase:new URL(siteUrl),title:'BULDAK HOT CLUB — Мило не будет',description:'Выбери свой уровень жара. Buldak Original, Carbonara, Cheese и 2X Spicy в ярком anime pop магазине.',openGraph:{title:'BULDAK HOT CLUB',description:'Влюбись во вкус. Выдержи огонь.',images:[`${siteUrl}/mascots.webp`]},icons:{icon:`${assetPrefix}/favicon.svg`}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="ru"><body>{children}</body></html>}
