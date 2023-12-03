import Link from "next/link";
import Image from "next/image";
import Products from "../../components/Products";

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