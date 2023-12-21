import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

const Order = () => {
	const router = useRouter();
    const { orderId, name, phoneNumber, address, subtotal, discount, total } = router.query;

    return ( 
			<div className="mt-20 pt-20 mx-2">
				<div className="grid grid-cols-3">
					<div className="col-span-2">
						<div className="text-left">
							<table className="table-auto w-full">
								<thead>
							    	<tr>
							    		<th className=" pr-20 py-2 text-sm">Order Id</th>
                                        <th className=" pr-20 py-2 text-sm">Customer</th>
                                        <th className=" pr-20 py-2 text-sm">Phone Number</th>
							    		<th className=" pr-14 py-2 text-sm">Address</th>
							    		<th className=" py-2 text-sm">Total</th>
							    	</tr>
							    </thead>
							    <tbody className="border-t border-b border-solid border-gray-200">
									<tr key={orderId}>
										<td className="product-name pr-20 py-2">{orderId}</td>
										<td className="pr-20 py-2 text-sm">{name}</td>
										<td className="pr-14 py-2 text-sm">{phoneNumber}</td>
                                        <td className="pr-14 py-2 text-sm">{address}</td>
										<td className="pr-10 py-2 text-sm">${total}</td>
							    	</tr>
							    </tbody>
							</table>
						</div>
                        <div className="grid grid-cols-2 md:grid-cols-4  pt-8 justify-items-center w-full">
                            <div class="flex flex-col ">
                                <Image alt="Paid" width="50" height="50" src={'/paid.png'}/>
                                <p>Payment</p>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-[40px] text-[#1b7f00] " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm106.5 150.5L228.8 332.8h-.1c-1.7 1.7-6.3 5.5-11.6 5.5-3.8 0-8.1-2.1-11.7-5.7l-56-56c-1.6-1.6-1.6-4.1 0-5.7l17.8-17.8c.8-.8 1.8-1.2 2.8-1.2 1 0 2 .4 2.8 1.2l44.4 44.4 122-122.9c.8-.8 1.8-1.2 2.8-1.2 1.1 0 2.1.4 2.8 1.2l17.5 18.1c1.8 1.7 1.8 4.2.2 5.8z"></path>
                                </svg>
                            </div>
                            <div class="flex flex-col animate-pulse">
                                <Image alt="Preparing" width="50" height="50" src={'/preparing.png'}/>
                                <p className="text-gray-500 ">Preparing</p>
                            </div>
                            <div class="flex flex-col mt-6 md:mt-0">
                                <span className="relative">
                                    <Image src={'/delivery.webp'} alt="Delivering" width="50" height="50"/>
                                    <div className="absolute inset-0 bg-gray-100 opacity-50"></div>  
                                    <p className="text-gray-500">On the way</p>
                                </span>      
                            </div>
                            <div class="flex flex-col mt-6 md:mt-0">
                                <span className="relative">
                                    <Image src={'/delivered.png'} alt="Delivered" width="50" height="50"/>
                                    <div className="absolute inset-0 bg-gray-100 opacity-50"></div>  
                                    <p className="text-gray-500">On the way</p>
                                </span>
                            </div>
                        </div>
					</div>

					<div className="col-span-1 border border-solid border-black-800 bg-zinc-800 text-white px-12 pt-8 mr-8 max-h-72">
						<div className="cart-totals mb-10">
							<h1 className="cart-title font-bold text-2xl mb-4">CART TOTAL</h1>
							<table className="table">
							    <tbody>
		  							<tr className="gap-0">
		  								<td className="font-bold text-sm">Subtotal</td>
		  								<td className="px-2 text-sm"> ${subtotal}</td>
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
                                <div className="my-12">
									<div className="btn text-center">
										<button className="text-base font-bold">PAID</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
     );
}
 
export default Order;