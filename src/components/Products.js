import Image from 'next/image'
import Link from 'next/link';

const Products = ({products}) => {
  return ( 
      <div className="mx-2 grid grid-cols-3 gap-5 h-full" >
        { products.map(product => (
          <div key={product.id}>
            <div className="card bg-white overflow-hidden border border-solid border-gray-200 rounded-2xl">
              <Image className='container object-contain w-30 h-60' src={product.image} width={300} height={600}/>
              <div className='flex-col justify-between ml-5'>
                <div className='mr-40 my-5 flex justify-between'> 
                <span className='font-bold'>{product.title}</span>
                <span className='font-semibold text-red-500'>${product.price}</span>
                </div>
                <span className='block my-5'>Ratings: {product.rating}</span>
                <span className='block my-5 text-sm text-slate-700 bold'>{product.description}</span>
                <div className="container pt-2 pb-10">
                  <Link href={'/products/' + product.id} className='btn pr-40'> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline-block">
                      <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg> &nbsp;  Order Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
 }
 
export default Products;