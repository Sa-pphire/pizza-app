import Image from 'next/image'
import { useState } from 'react'
import { useCart } from '@/context/cartContext'

export const getStaticPaths = async () => {
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
	const paths = data.map(product => {
		return {
			params: {id: product.id.toString()}
		}
	})

	return {
		paths,
		fallback: false
	}
}

export const getStaticProps = async () => {
	const data = 
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
        }
    
	return {
		props: {product: data}
	}
}

const ProductDetail = ({product}) => {
	const { cart, addToCart } = useCart();
    const [qtyCount, setQtyCount] = useState(0);
    return (
		<div className="container flex pt-10 my-20 mx-2">
            <div className="product-image">
                <Image src={product.image} width={500} height={500}/>
            </div>
			<div className="product-detail p-10">
				<div className="text-4xl font-semibold py-2">
					<h2>{product.title}</h2>
				</div>
				<div className="flex pb-2">
					<div className="text-red-500 font-bold">
						<span>${product.price} &nbsp;</span>
					</div>
					<div className="text-slate-500 font-bold">
					    <a><span>{product.reviews} Reviews</span></a>
					</div>
				</div>

				<div className="py-2 text-sm">
					<p>{product.description}</p>
				</div>

				<div className="">
					<div className='flex flex-col'>
						<div className='py-2 text-sm'>
							<span>Category : {product.category}</span>
						</div>
						<div className='py-2 text-sm'>
							<span>Tags : {product.tags} </span>
						</div>
					</div>
				</div>

               <div className='pizza-size py-5'>
                  <h2 className='text-base font-semibold'>Choose Pizza Size</h2>
                <div>
				<div className='inline-block mr-10 relative mb-4'> 
					<Image src={'/Pizza-icon_ns1nad.png'} width={35} height={35}/>
					<span className="rounded-lg badge absolute">Small</span>
				</div>
				<div className='inline-block mr-10 relative mb-3'> 
					<Image src={'/Pizza-icon_ns1nad.png'} width={50} height={50}/>
					<span className="rounded-lg badge absolute">Medium</span>
				</div>
				<div className='inline-block mr-10 relative mb-1'> 
					<Image src={'/Pizza-icon_ns1nad.png'} width={70} height={70}/>
					<span className="rounded-lg badge absolute">Large</span>
				</div>                        
            </div>
        		</div>
                <div>
                        <h2 className='text-base font-semibold'>Choose Additional Ingredients</h2>
                        <div>
                            <input className='inline-block' type='checkbox'/><p className='inline-block'> &nbsp; Sauce</p>
                        </div>
                </div>

				<div className="add-cart-box flex gap-2 mt-10">
						<div className="number border border-solid border-slate-200 mr-2 my-4">
							<input className='p-3' type="number" value={qtyCount} onChange={(e) => setQtyCount(e.target.value)}/>
						</div>
						<div className="mr-2 p-2 mt-4">
							<button onClick={() => addToCart({id: product.id,image: product.image, title: product.title, price: product.price, quantity: qtyCount, total: product.price * qtyCount})} className="btn text-lg font-bold">Add To Cart</button>
						</div>
						<div className="wish-list border border-solid rounded-full border-slate-200 p-4 my-4">
							<a  className="wish-btn"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
							<path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
							</svg>
							</a>
						</div>
				</div>
            </div>
		</div>
     );
}
 
export default ProductDetail;