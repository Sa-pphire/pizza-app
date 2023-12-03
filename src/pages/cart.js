import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/context/cartContext";
import Modal from "@/components/Modal";

const Cart = () => {
	const { cart, getTotalPrice } = useCart();
	const [toggleBtn, setToggleBtn] = useState(false);
	const [PODModalOpen, setPODModalOpen] = useState(false);
	const discount = 0
	const total = getTotalPrice() - discount

	const openModal = () => {
		setPODModalOpen(true);
	};

	const closeModal = () => {
		setPODModalOpen(false);
	};

	const handleClick = () => {
		setToggleBtn(!toggleBtn);
	  };

    return ( 
			<div className="mt-20 pt-20 mx-2">
				<div className="grid grid-cols-3">
					<div className="col-span-2">
						<div className="text-left">
							<table className="table-auto w-full">
								<thead>
							    	<tr>
							    		<th className=" pr-20 py-2 text-sm">Product</th>
                                        <th className=" pr-20 py-2 text-sm">Name</th>
							    		<th className=" pr-14 py-2 text-sm">Extra</th>
							    		<th className=" pr-14 py-2 text-sm">Price</th>
							    		<th className=" py-2 text-sm">Quantity</th>
							    		<th className=" py-2 text-sm">Total</th>
							    	</tr>
							    </thead>
							    <tbody className="border-t border-b border-solid border-gray-200">
									{cart.map( product => (
										<tr key={product.id}>
											<td className="product-name pr-20 py-2">
												<div className="product-img">
													<a href=""><Image src={product.image} width={100} height={100}/></a>
												</div>
											</td>
											<td className="pr-20 py-2 text-sm">
												<div>
													<a href="" className="pro-title">{product.title}</a>
												</div>
											</td>
											<td className="pr-14 py-2 text-sm">
												<div>

												</div>
											</td>
											<td className="pr-14 py-2 text-sm">{product.price}</td>
											<td className="px-2 py-2 text-sm">
												<div className="">
													<input type="number" value="4"/>
												</div>
											</td>
											<td className="pr-10 py-2 text-sm">$160</td>
							    	</tr>
									))}
							    </tbody>
							</table>
						</div>
					</div>

					<div className="col-span-1 border border-solid border-black-800 bg-zinc-800 text-white px-12 pt-8 mr-8 max-h-72">
						<div className="cart-totals mb-10">
							<h1 className="cart-title font-bold text-2xl mb-4">CART TOTAL</h1>
							<table className="table">
							    <tbody>
		  							<tr className="gap-0">
		  								<td className="font-bold text-sm">Subtotal</td>
		  								<td className="px-2 text-sm"> ${getTotalPrice()}</td>
		  							</tr>
		  							<tr className="gap-0">
		  								<td className="font-bold text-sm">Discount</td>
		  								<td className="px-2 text-sm">${discount}</td>
		  							</tr>
		  							<tr className="gap-0">
		  								<td className="font-bold text-sm">Total</td>
		  								<td className="px-2 text-sm">${total}</td>
		  							</tr>
		  						</tbody>
							</table>
							<div className="">
								{toggleBtn ? (
									<div className="mt-5 mb-10 flex flex-col gap-2">
										<div className="bg-white text-center">
											<button onClick={openModal} className="text-sm text-green-800 font-semibold"> CASH ON DELIVERY</button>
										</div>
										<div className=" bg-amber-400 text-center h-8">
											<button onClick={handleClick} className="mt-[-8px]"><span><Image src={'/paypal.png'} width={50} height={50}/></span></button>
										</div>
								</div>
								) : (
									<div className="my-12">
										<div className="btn text-center">
											<button onClick={handleClick} className="text-base font-bold">CHECKOUT NOW!</button>
										</div>
									</div>
									
								)}
							</div>
							<Modal isOpen={	PODModalOpen} onClose={closeModal}>
								<div className="w-80 h-[400px] text-left mt-5 mb-10 mx-6 px-2">
									<div>
										<p className="font-semibold text-3xl">
											You will pay ${total} on <br/> delivery.
										</p>
									</div>
									<form className="flex flex-col">
										<div className="top-0">
											<div className="flex flex-col my-2">
												<label className="mt-2 text-sm">Full Name</label>
												<input className="mt-2 p-1 w-full border border-solid border-zinc-500"/>
											</div>
											<div className="flex flex-col my-2">
												<label className="mt-2 text-sm">Phone Number</label>
												<input className="mt-2 p-1 w-full border border-solid border-zinc-500"/>
											</div>
											<div className="flex flex-col my-2">
												<label className="mt-2 text-sm">Address</label>
												<textarea className="mt-2 pt-1 pl-1 pb-10 w-full border border-solid border-zinc-500"/>
											</div>
										</div>
										<div className="text-center mt-2">
											<button className="w-24 px-2 py-1 bg-amber-500 border-2 border-solid border-black rounded-md">Order</button>
										</div>
									</form>
								</div>
							</Modal>
						</div>
					</div>
				</div>
			</div>
     );
}
 
export default Cart;