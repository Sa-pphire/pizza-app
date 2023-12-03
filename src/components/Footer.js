
const Footer = () => {
    return ( 
    <div className="flex justify-between bg-yellow overflow-hidden footer-box mx-10">
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
							<li><a href="#" className="facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
							<li><a href="#" className="pinterest"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
							<li><a href="#" className="twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
							<li><a href="#" className="instagram"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
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