import React from 'react'
import Image from 'next/image'
import HeroImage from '../../../../public/hero_image.avif'
const HeroBanner: React.FC = () => {
    return (
        <section className=' w-11/12 h-full flex flex-col'>
            {/* Hero Image */}

            <div className='w-full h-4/5 -z-10'>
                <Image
                    src={HeroImage}
                    alt="Hero Image"
                    layout='fill'
                    objectFit='cover'
                    className='w-full h-full bg-no-repeat object-bottom brightness-[30%] rounded-hero-border-radius'
                />
            </div>
            {/* Hero Content Section */}
            <div className='w-11/12 min-h-[100%] text-white flex flex-col mx-auto justify-center mt-36'>
                <h1 className='text-9xl capitalize font-light mx-auto w-10/12 font-sans'>17 goals to transform our world</h1>
            </div>
        </section>
    )
}

export default HeroBanner