import Link from 'next/link'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

const Featured = () => {
  return (
    <>
        <div className='grid grid-cols-1 md:grid-cols-10 md:gap-2 py-8'>
            <div className='col-span-6 text-center py-5'>
                <span className='font-bold text-1xl text-[#555]'>Bees FEATURED PRODUCT</span>
                <img src="https://media.istockphoto.com/id/691645350/tr/foto%C4%9Fraf/pencere-pervaz%C4%B1na-ar%C4%B1ya.jpg?s=612x612&w=0&k=20&c=jLlVYYNbijpGa8S-ZNxQCif8mhsjevTDfNkhK4KF3H8=" alt="" className='w-[70%] ml-12 md:mx-auto py-8'/>
                <h1 className='text-[#555] text-2xl font-bold lg:text-3xl text-left ml-12 pt-8 md:text-center md:ml-0'>Honey Market</h1>
                <p className='uppercase py-3 font-bold text-1xl text-left ml-12 md:text-center md:ml-0'>Honey</p>
                <p className=' py-3 font-bold text-2xl text-left ml-12 md:text-center md:ml-0'>€ 6.45</p>
                <Link href="https://www.shoppri.com/collections/types?q=honey&cmp_id=17685026095&adg_id=&kwd=&device=c&gclid=EAIaIQobChMIh8abg4nmgAMVEGgYCh1xZA36EAAYASAAEgIpWPD_BwE" target="_blank">
                    <button className='font-bold pt-4 rounded inline-flex items-center'>
                        <span className='mr-3 text-2xl text-[var(--primary-color)] uppercase'>order now</span>
                        <BsFillArrowRightCircleFill className='text-3xl'/>
                    </button>
                </Link>
            </div>
            <div className='col-span-4 text-center py-5'>
                <div className='flex itmes-center justify-center'>
                    <img src="https://cdn.myikas.com/images/4f3888e0-5242-41b5-8187-3c35dd353aa3/9f2a0294-de87-490b-b4a9-72218a5dbcd0/1080/bergama-karakovan-petekli-bal-c2b2-6.webp" alt=""  className='w-full'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Featured