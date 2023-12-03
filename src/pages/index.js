import Image from 'next/image'
import Products from '../components/Products'

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:8080/products');
  const data = await res.json();

  return {
      props: {
          products: data
      }
  }
}

export default function Home({products}) {
  return (
    <div
      className={`flex-col min-h-screen items-center mt-24`}
    >
      <div className='hero flex justify-between'>
      <div className="flex-col max-w-5xl w-full items-center font-sans p-5 hero-img">
        <h1 className='text-6xl font-bold mb-5'>Handmade, <br/>With an Extra <br/>Pinch of <span className='text-red-600'>Love</span></h1>
        <h1 className='text-2xl text-slate-700'> Lorem ipsum is simply dummy text of the <br/>printing and typesetting industry.</h1>
        <div className="container py-10">
                <a className='btn pr-40'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline-block">
                  <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg> &nbsp; Order Now</a></div>
      </div>
      <div className="hero">
        <Image src={'/hero-banner.png'} width={900} height={400}/>
      </div>
      </div>

      <div className=' daily-fresh flex justify-between'>
        <div>
          <Image src={'/e82bgvrojresi06noobt.png'} width={400} height={400}/>
        </div>
        <div className='justify-between'>
          <h1 className='text-3xl font-bold pt-20'>Daily fresh and <br/>always tasty</h1>
          <h2 className='text-l text-slate-700 pt-10'>There are many variations of passages of <br/>Lorem ipsum availiable, but the majority <br/>haved</h2>
        </div>
        <div>
          <Image className='mr-20' src={'/daily-pizza.png'} width={300} height={400}/>
        </div>
      </div>

      <div className="products flex-col pt-10 mb-20 mx-2 ">
          <div className="title my-10">
            <h2 className='text-xl font-semibold text-red-600'> Popular Dishes</h2>
            <h1 className='text-4xl font-bold'>Browse our Menu</h1>
          </div>
          <Products products={products}/>
      </div>

      <div className="our-strength mb-5 overflow-hidden pt-14 pb-24 bg-yellow">
        <div className='absolute right-0'>
          <Image src={'/strength-vacter.png'} width={200} height={200}/>
        </div>
        <div className='why-us mx-2'>
          <h2 className='font-semibold text-xl  text-red-600 mb-2' >Our Strength</h2>
          <h1 className='font-bold text-4xl'>Why We Are The Best?</h1>
        </div>
        
        <div className='grid grid-cols-4 gap-10 mt-10 mx-2'>
          <div>
            <span><Image src={'/rice (1).png'} width={30} height={40}/></span>
            <h3 className='text-sm my-3 font-bold'>All Kinds of Foods</h3>
            <h3 className='text-sm text-slate-500'>Lorem ipsum is simply dummy text of the <br/>printing and typesetting industry.</h3>
          </div>
          <div>
            <span><Image src={'/fresh-foods.png'} width={30} height={40}/></span>
            <h3 className='text-sm my-3 font-bold'>All Kinds of Foods</h3>
            <h3 className='text-sm text-slate-500'>Lorem ipsum is simply dummy text of the <br/>printing and typesetting industry.</h3>
          </div>
          <div>
            <span><Image src={'/happy.png'} width={30} height={40}/></span>
            <h3 className='text-sm my-3 font-bold'>All Kinds of Foods</h3>
            <h3 className='text-sm text-slate-500'>Lorem ipsum is simply dummy text of the <br/>printing and typesetting industry.</h3>
          </div>
          <div>
            <span><Image src={'/location.png'} width={30} height={40}/></span>
            <h3 className='text-sm my-3 font-bold'>All Kinds of Foods</h3>
            <h3 className='text-sm text-slate-500'>Lorem ipsum is simply dummy text of the <br/>printing and typesetting industry.</h3>
          </div>
        </div>
      </div>

      <div className="testimonials mx-2 relative overflow-hidden">
        <div className='customer mb-12'>
          <Image src={'/leaf_aylae4.png'} width={100} height={100}/>
          <h2 className='font-semibold text-xl  text-red-600 mb-2' >Customer Feedback</h2>
          <h1 className='font-bold text-4xl'>Client Testimonials</h1>
        </div>
        <div className='grid grid-cols-4 gap-5 mx-2'>
          <div className='px-10 py-10 border border-solid border-gray-200 rounded-2xl text-center'>
            <Image className='overflow-hidden mx-auto rounded-full' src={'/client-1.jpg'} width={100} height={100}/>
            <h2 className='font-semibold text-xl mb-2' >
              Takar Bowa
            </h2>
            <h1 className='text-base text-slate-500'>Lorem Ipsum is simply <br/> dummy text of the print <br/> industry. it has survived not <br/> only five centuries but also <br/> the leap</h1>
          </div>
          <div className='px-10 py-10 border border-solid border-gray-200 rounded-2xl text-center'>
            <Image className='overflow-hidden mx-auto rounded-full' src={'/client-2_sjfy2z.jpg'} width={100} height={100}/>
            <h2 className='font-semibold text-xl mb-2' >
              Takar Bowa
            </h2>
            <h1 className='text-base text-slate-500'>Lorem Ipsum is simply <br/> dummy text of the print <br/> industry. it has survived not <br/> only five centuries but also <br/> the leap</h1>
          </div>
          <div className='px-10 py-10 border border-solid border-gray-200 rounded-2xl text-center'>
            <Image className='overflow-hidden mx-auto rounded-full' src={'/client-3_utvld0.jpg'} width={100} height={100}/>
            <h2 className='font-semibold text-xl mb-2' >
              Takar Bowa
            </h2>
            <h1 className='text-base text-slate-500'>Lorem Ipsum is simply <br/> dummy text of the print <br/> industry. it has survived not <br/> only five centuries but also <br/> the leap</h1>
          </div>
          <div className='px-10 py-10 border border-solid border-gray-200 rounded-2xl text-center'>
            <Image className='overflow-hidden mx-auto rounded-full' src={'/client-4_yqf75b.jpg'} width={100} height={100}/>
            <h2 className='font-semibold text-xl mb-2' >
              Takar Bowa
            </h2>
            <h1 className='text-base text-slate-500'>Lorem Ipsum is simply <br/> dummy text of the print <br/> industry. it has survived not <br/> only five centuries but also <br/> the leap</h1>
          </div>
        </div>
      </div>

    </div>
 ) 
}
