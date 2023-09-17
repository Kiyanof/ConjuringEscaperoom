import { ReactNode } from "react"

interface CardTitleInterface {
    children?: ReactNode;
}
const CardTitle: React.FC<CardTitleInterface> = ({children}) => {

    return (
        <h2 className="font-bold text-2xl my-3">
            {children}
        </h2>

    )
}

export default CardTitle