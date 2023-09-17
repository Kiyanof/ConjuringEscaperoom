import Image, { StaticImageData } from "next/image";
import { HTMLAttributes } from "react";

interface ImageContainerInterface extends HTMLAttributes<HTMLImageElement> {
    src: string | StaticImageData;
    alt?: string;
    width?: number;
    heigt?: number;
}

const ImageContainer: React.FC<ImageContainerInterface> = ({src, alt = 'Image Not Load', width = 100, heigt = 100, className, ...props}) => {

    return (
        <Image className={` ${className}`} src={src} alt={alt} width={width} height={heigt} />
    )
}

export default ImageContainer