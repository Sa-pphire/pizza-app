import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/cartContext";

const Navbar = () => {
    const { cartCount } = useCart();
    return ( 
        <div>
            <nav className="nav w-full">
                <div className="flex justify-between items-center">
                    <div className="logo">
                        <Image src={'/pizza-logo_afsvzn.png'} width={70} height={10}/>
                    </div>
                    <div className="tomato">
                        <Image src={'/pizza-header-img_krzjsl.png'} width={120} height={30}/>
                    </div>
                    <div className="flex text-sans" >
                        <div className="nav-link"> <Link href={'/'}> <a>HOME</a> </Link> </div>
                        <div className="nav-link"> <Link href={'/products'}> <a>PRODUCTS</a> </Link> </div>
                        <div className="nav-link"> <Link href={'/pages'}> <a>PAGES</a> </Link> </div>
                        <div className="nav-link"> <Link href={'/blog'}> <a>BLOG</a> </Link> </div>
                        <div className="nav-link"> <Link href={'/contact'}> <a>CONTACT</a> </Link> </div>
                        <div className="nav-cart"> 
                        <Link href={'/search'}> <a className="search inline-block"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" >
                        <path d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" />
                        </svg>
                        </a> </Link> &nbsp;
                        <Link href={'/cart'}> <a className="cart inline-block relative"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="blue" >
                        <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg><span className="rounded-full cart-badge absolute">{cartCount}</span></a>
                        </Link>
                        </div>
                    </div> 
                </div>
            </nav>
        </div>
    );
}
 
export default Navbar;