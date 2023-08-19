import Link from 'next/link'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

const Featured = () => {
  const infoPng = "/images/bg-hero.jpg"
  return (
    <>
        <div className='grid grid-cols-1 md:grid-cols-10 md:gap-2 bg-gray-100'>
            <div className='col-span-6 text-center py-5'>
                <span className='font-bold text-1xl text-[#555]'>Best Product</span>
                <img src={infoPng} alt="" className='w-[70%] ml-12 md:mx-auto py-8 rounded-xl'/>
                <h1 className='text-[#555] text-2xl font-bold lg:text-3xl text-left ml-12 md:text-center md:ml-0'>Liquid honey</h1>
                <p className='uppercase font-bold text-1xl text-left ml-12 md:text-center md:ml-0'>Price per Kg</p>
                <p className='font-bold text-2xl text-left ml-12 md:text-center md:ml-0'>€ 6.45</p>
                <Link href="" target="_blank">
                    <button className='font-bold pt-4 rounded inline-flex items-center'>
                        <span className='mr-3 text-2xl text-[var(--primary-color)] uppercase'>order now</span>
                        <BsFillArrowRightCircleFill className='text-3xl'/>
                    </button>
                </Link>
            </div>
            <div className='col-span-4 text-center'>
                <div className='flex itmes-center justify-center h-full'>
                    <img src="/images/img-info2.png" alt=""  className='w-full'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Featured