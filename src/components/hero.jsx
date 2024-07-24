import React, {useState, useEffect} from 'react';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import menLogo1 from '/src/assets/menL1.jpg';
import menLogo2 from '/src/assets/menL2.jpg';
import menLogo3 from '/src/assets/menL3.jpg';
import womanLogo1 from '/src/assets/womanL1.jpg';
import womanLogo2 from '/src/assets/womanL2.jpg';
import womanLogo3 from '/src/assets/womanL3.jpg';
import {Link} from 'react-scroll';

const images = [menLogo1, menLogo2, menLogo3, womanLogo1, womanLogo2, womanLogo3];

const Hero = () => {
    // const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    //     }, 6000); // Change slide every 3 seconds

    //     return () => clearInterval(intervalId); // Clear interval on component unmount
    // }, []);

    // const goToPrevious = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    // };
    //
    // const goToNext = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    // };

    return (
        <section className="max-w-[1640px]  max-h-[1500px] mx-auto pt-20">

            <div className=''>

                <div name='first hero' className='mx-auto  h-[750px] flex-col-1 md:flex justify-between '>

                    <div>
                        <img className='w-[400px] h-[300px] p-2  rounded-box  md:hidden' src={womanLogo1} alt='/'/>
                    </div>

                    <div name='whole text' className='flex flex-col justify-center items-center text-center mx-auto'>
                        <div name='title'>
                            <h className='text-[2em] md:text-[4em]'>Explore</h>
                            <h1 className='text-[2em] md:text-[4em]'>Your Style!</h1>
                        </div>
                        <div name='text' className='pt-5 text-[15px] md:text-2xl'>
                            <p>Refresh Your Style On Trend Pieces From Our Best Clothing Collection.</p>
                        </div>
                        <div name='button' className='pt-6 items-start'>
                           <Link to="product"
                               smooth={true}
                               duration={500}>
                               <button className='btn rounded'>Start Shopping</button>
                           </Link>
                        </div>
                    </div>
                    <div name='img' className='items-end flex object-contain  justify-between  right-1 w-[1000px] pb-40'>

                        <img className='w-[400px] h-[300px]  rounded-box hidden md:block' src={menLogo1} alt='/'/>
                        <img className='w-[500px] h-[500px]  rounded-box hidden md:block' src={womanLogo2} alt='/'/>

                    </div>
                </div>


                <div name='second hero' className='hidden md:mx-auto  h-[750px] flex-col-1 md:flex justify-between '>

                    <div>
                        <img className='w-[400px] h-[300px] p-2  rounded-box  md:hidden' src={womanLogo1} alt='/'/>
                    </div>
                    <div name='img' className='items-end flex object-contain  justify-between  right-1 w-[1000px] pb-40'>

                        <img className='w-[400px] h-[300px]  rounded-box hidden md:block' src={womanLogo1} alt='/'/>
                        <img className='w-[500px] h-[500px]  rounded-box hidden md:block' src={menLogo2} alt='/'/>


                    </div>
                    <div name='whole text' className='flex flex-col justify-center items-center  mx-auto'>
                        <div name='title'>
                            <h1 className='text-xl'>NEW TREND!</h1>
                        </div>
                        <div name='text' className='pt-5 text-[15px] md:text-2xl text-center'>
                            <h>Take a Look At Our Latest Autumn Style Collection!</h>
                        </div>
                        <div name='button' className='pt-6 items-start'>
                            <Link to="product"
                                  smooth={true}
                                  duration={500}>
                                <button className='btn rounded'>Take a Look!</button>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Hero;
