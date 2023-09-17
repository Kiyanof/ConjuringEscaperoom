import { StaticImageData } from "next/image";
import ImageContainer from "../Image";

interface CardImageInterface  {
    src?: string | StaticImageData;
    className?: string;

}

const CardImage: React.FC<CardImageInterface> = ({src, className}) => {

    return (
        <div className={` relative w-64 h-64 mx-auto shadow-lg dark:shadow-md dark:hover:shadow-sm
                        dark:border-primary-900 dark:shadow-zinc-700  hover:shadow-sm transition-all 
                          duration-200 ease-in-out border rounded-md  ${className}`}>
            {src && <>
                        <ImageContainer className={`w-full h-full rounded-md`} src={src} />
                        <div className="dark:block hidden absolute top-0 left-0 w-full h-full bg-black opacity-20 mix-blend-multiply"></div>
                    </>}
        </div>
    )
}

export default CardImage