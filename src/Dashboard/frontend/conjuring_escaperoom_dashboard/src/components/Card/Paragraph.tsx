import { ReactNode } from "react";

interface CardParagraphInterface {
    children?: ReactNode;
}

const CardParagraph: React.FC<CardParagraphInterface> = ({children}) => {


    return (
        <p className="text-xl text-clip font-thin max-h-[300px] leading-relaxed overflow-auto my-4">
            {children}
        </p>
    )
}

export default CardParagraph