import Cross from "@/components/Cross/Cross"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from "react";

const CrossPage = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const settings = {
        dots: true, // Show navigation dots
        infinite: true, // Loop through the slides
        speed: 500, // Transition speed in milliseconds
        slidesToShow: 1, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll at a time
        autoplay: false, // Auto-play the carousel
        
        autoplaySpeed: 3000, // Auto-play speed in milliseconds
        afterChange: (current: number) => setActiveIndex(current),
        appendDots: (dots: any) => (
            <div className="bg-transparent rounded-lg p-2">
                <ul className="m-0">
                    {dots}
                </ul>
            </div>
        ),
        customPaging: (i: any) => (
            <div className={`${activeIndex === i ? 'border-rose-300 dark:border-rose-800' : 'border-slate-300 dark:border-slate-800'} w-7 border  text-slate-500  dark:text-slate-400 rounded-full pt-1`}>
                {i+1}
            </div>
        ),
      };

    return (
        <div className="w-full h-full p-2">
            <Slider   className="h-full" {...settings}>
                {Array.from({length: 10}, (v, k) => (
                    <div key={k} className="h-[650px] w-full border border-slate-300 dark:border-slate-800 p-4 rounded-xl">
                        <Cross index={k}/>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default CrossPage;