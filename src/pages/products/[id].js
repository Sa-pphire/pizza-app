import Image from 'next/image'
import { useCart } from '@/context/cartContext'

export const getStaticPaths = async () => {
	const res = await fetch('http://localhost:8080/products')
	const data = await res.json()
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

export const getStaticProps = async (context) => {
	const id = context.params.id
	const res = await fetch('http://localhost:8080/products/' + id)
	const data = await res.json()

	return {
		props: {product: data}
	}
}

const ProductDetail = ({product}) => {
	const { cart, addToCart } = useCart();
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

				<div className="add-cart-box flex justify-between mt-10">
						<div className="number border border-solid border-slate-200 mr-5">
							<input className='p-3' type="number"/>
						</div>
						<div className="mr-5 p-2">
							<button onClick={() => addToCart(product)} className="btn text-lg font-bold">Add To Cart</button>
						</div>
						<div className="wish-list border border-solid rounded-full border-slate-200 p-3">
							<a  className="wish-btn"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
							<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
							</svg>
							</a>
						</div>
				</div>
            </div>
		</div>
     );
}
 
export default ProductDetail;