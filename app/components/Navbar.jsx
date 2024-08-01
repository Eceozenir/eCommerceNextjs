import Link from "next/link"
export default function Navbar(){
    return(
        <div className="container">
            <div className="topNav">
                <div className="phoneAndInsta icons">
                    <Link href="/"><img src="phoneLogo.svg"></img></Link>
                    <Link href="/"><img src="instagramLogo.svg"></img></Link>
                </div>
                    <div>
                        <Link href="/"><img className="logo" src="logo.png"></img></Link>
                    </div>
                <div className="userAndShop icons">
                    <Link href="/"><img src="userLogo.svg"></img></Link> 
                    <Link href="/"><img src="shoppingLogo.svg"></img></Link>
                </div>
            </div> 
            <div className="bottomNav">
                <ul className="liste">
                   <li><Link href="/urunler">Ürünler</Link></li> 
                    <li><Link href="/kadin">Kadın</Link></li>
                   <li><Link href="/erkek">Erkek</Link></li> 
                    <li><Link href="/home">Home</Link></li>
                </ul>
            </div>          
        </div>
    )
}