import Image from 'next/image'
import Link from 'next/link';

const Footer = () => {
    return ( 
    <div className="flex justify-between bg-yellow overflow-hidden footer-box">
        <div>
            <h2 className="footer-title">INFORMATION</h2>
            <ul className="footer-menu">
                <li>Home</li>
                <li>Blog</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Menu</li>
            </ul>
        </div>
        <div>
            <h2 className="footer-title">TOP ITEMS</h2>
                <ul className="footer-menu">
                    <li>Pepperoni</li>
                    <li>Swiss Mushrooms</li>
                    <li>Barbeque Chicken</li>
                    <li>Vegetarian</li>
                    <li>Ham & Cheese</li>
                </ul>
        </div>
        <div>
            <h2 className="footer-title">OTHERS</h2>
                <ul className="footer-menu">
                    <li>Checkout</li>
                    <li>Cart</li>
                    <li>Product</li>
                    <li>Locations</li>
                    <li>Legal</li>
                </ul>
        </div>
        <div>
            <h2 className="footer-title">SOCIAL MEDIA</h2>
            <ul className="footer-social">
							<li><Link href="#" className="facebook p-2"><Image src={'/facebook.png'} width={40} height={40} /></Link></li>
							<li><Link href="#" className="pinterest"><Image src={'/pinterest.svg'} width={40} height={40} /></Link></li>
							<li><Link href="#" className="twitter"><Image src={'/twitter.svg'} width={40} height={40} /></Link></li>
							<li><Link href="#" className="instagram p-2"><Image  src={'/instagram.svg'} width={30} height={30} /></Link></li>
						</ul>
						<div className="footer-text">
							<p>Signup and get exclusive offers and coupon <br/>codes</p>
						</div>
						<div className="footer-btn mb-10 font-bold">
							<a className="btn"> Sign Up</a>
                        </div>
        </div>
    </div> );
}
 
export default Footer;