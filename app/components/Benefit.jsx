import Image from "next/image"
import Link from "next/link"
import {BsFillArrowRightCircleFill} from 'react-icons/bs'


const Benefit = () => {
  return (
    <section id="bee" className="mb-10 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex justify-center items-center ">
                <h2 className="text-[var(--primary-color)] text-3xl font-bold mb-5 md:mb-0">Benefit of Honey</h2>
            </div>

            <div className="flex justify-center overflow-hidden ">
                <Image
                    className="w-[80%] rounded-xl"
                    src="/images/img-benefit.jpg"
                    width={500}
                    height={500}
                    alt=""
                    />
            </div>

            <div className="flex justify-center items-center md:col-span-2 lg:col-span-1">
                <div className="px-5 w-full h-full flex flex-col justify-evenly text-center">
                    <div>
                        <p className="font-italic text-2xl my-10">"Honey protects the body from inflammation thanks to the antioxidants it contains."</p>
                    </div>

                    <div>
                        <Link href="https://www.memorial.com.tr/saglik-rehberi/balin-faydalari-nelerdir#:~:text=Bal%2C%20içerdiği%20antioksidan%20sayesinde%20vücudu,şikayetlerinin%20azalmasına%20da%20katkıda%20bulunur." target="_blank">
                            <button className="font-bold rounded inline-flex">
                                <span className="mr-2 text-1xl text-[#555] uppercase"> More read..</span>
                                <BsFillArrowRightCircleFill className="text-2xl"/>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Benefit