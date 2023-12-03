import Link from "next/link";
import Image from "next/image";
import Products from "../../components/Products";

export const getStaticProps = async () => {
    const res = await fetch('http://localhost:8080/products');
    const data = await res.json();

    return {
        props: {
            products: data
        }
    }
}
const products = ({products}) => {
    return ( 
		<div className="overflow-hidden mt-10 py-20">
			<div className="shop-filter mx-4 mb-5">
					<div className="flex justify-between align-items-center">
						<div className="">
							<div className="btn">
								 <a href=""><Image className="inline-block" src={"/filter.png"} width={20} height={20}/> &nbsp; &nbsp; Filter</a>
							</div>
						</div>
						<div className="">
							<div className="sorting flex justify-between">
								<span className="results font-semibold">Showing all 9 results &nbsp; &nbsp;</span>
								<div className="text-xs py-1 font-semibold text-slate-400 border rounded-md border-solid border-gray-200">
									<select className="form-control">
										<option> &nbsp;Default Sorting&nbsp;</option>
										<option>A - Z</option>
										<option>Z - A</option>
									</select>
								</div>
							</div>
						</div>
					</div>
			</div>
            <Products products={products}/>
        </div>
        
     );
}
 
export default products;