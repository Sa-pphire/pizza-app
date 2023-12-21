import Image from "next/image"

export const getStaticProps = async () => {
    const data = [
        {
            "id": 1,
            "title": "Burga Pizza",
            "price": 20,
            "rating": 5,
            "description": "This is burga pizza",
            "image": "/bxnbmb4etcl5i4vgre4s.jpg",
            "reviews": 8,
            "category": "Chicken Lunch Pizza Burger",
            "tags": "Healthy Organic Chicken Sauce"
        },
        {
            "id": 2,
            "title": "Burga Pizza",
            "price": 20,
            "rating": 5,
            "description": "This is burga pizza",
            "image": "/bxnbmb4etcl5i4vgre4s.jpg",
            "reviews": 8,
            "category": "Chicken Lunch Pizza Burger",
            "tags": "Healthy Organic Chicken Sauce"
        },
        {
            "id": 3,
            "title": "New Pizza",
            "price": 10,
            "rating": 3,
            "description": "This is a new pizza",
            "image": "/mjs3jgodaqehrtvcoutq.png",
            "reviews": 8,
            "category": "Chicken Lunch Pizza",
            "tags": "Healthy Organic Chicken Sauce"
        },
        {
            "id": 4,
            "title": "Greek Pizza",
            "price": 40,
            "rating": 4,
            "description": "This is a greek pizza",
            "image": "/whkayb8vpzhlsczydg3j.png",
            "reviews": 8,
            "category": "Chicken Lunch Pizza",
            "tags": "Healthy Organic Chicken Sauce"
        }
    ]

    return {
        props: {
            products: data
        }
    }
}


const Dashboard = ({products, orders}) => {
    return ( 
        <div className="grid grid-cols-2 mt-20 mx-2 pt-20 gap-5">
            <div className="Products">
                <p className="text-2xl font-semibold">Products</p>
                <div className="text-left">
							<table className="table-auto w-full">
								<thead>
							    	<tr>
							    		<th className=" pr-20 py-2 text-sm">Image</th>
                                        <th className=" pr-20 py-2 text-sm">Id</th>
							    		<th className=" pr-14 py-2 text-sm">Title</th>
							    		<th className=" pr-14 py-2 text-sm">Price</th>
							    		<th className=" py-2 text-sm">Action</th>
							    	</tr>
							    </thead>
							    <tbody className="border-t border-b border-solid border-gray-200">
									{products.map( product => (
										<tr key={product.id} className="border-t border-b border-solid border-gray-200">
											<td className="product-name pr-20 py-2">
                                                <Image src={product.image} width={70} height={70}/>
											</td>
											<td className="pr-20 py-2 text-sm">
                                                {product.id}
											</td>
											<td className="pr-14 py-2 text-sm">
                                                {product.title}
											</td>
											<td className="pr-14 py-2 text-sm">${product.price}</td>
											<td className="px-2 py-2 text-sm">
												<button className="px-2 py-1 mr-2 text-white bg-green-700">Edit</button>
                                                <button className="px-2 py-1 text-white bg-red-600">Delete</button>
											</td>
							    	</tr>
									))}
							    </tbody>
							</table>
				</div>
            </div>
            <div className="Orders">
                <p className="text-2xl font-semibold">Orders</p>
                <div className="text-left">
					<table className="table-auto w-full">
								<thead>
							    	<tr>
							    		<th className="pr-14 py-2 text-sm">Id</th>
                                        <th className="pr-14 py-2 text-sm">Customer</th>
							    		<th className="pr-7 py-2 text-sm">Total</th>
							    		<th className="pr-4 py-2 text-sm">Payment</th>
							    		<th className="py-2 text-sm">Status</th>
							    		<th className="py-2 text-sm">Action</th>
							    	</tr>
							    </thead>
							    <tbody className="border-t border-b border-solid border-gray-200">
									{products.map( product => (
										<tr key={product.id} className="border-t border-b border-solid border-gray-200">
											<td className="product-name pr-14 py-2">
											    {product.id}
											</td>
											<td className="pr-14 py-2 text-sm">
												<div>
													<a href="" className="pro-title">{product.title}</a>
												</div>
											</td>
											<td className="pr-7 py-2 text-sm">
                                                ${product.price}
											</td>
											<td className="pr-4 py-2 text-sm">cash</td>
											<td className="pr-2 py-2 text-sm">delivered</td>
											<td className="pr-2 py-2 text-sm">
                                                <button className="px-2 py-1 text-white bg-green-700">Next Stage</button>
                                            </td>
							    	</tr>
									))}
							    </tbody>
					</table>
				</div>
            </div>
        </div>
     );
}
 
export default Dashboard;