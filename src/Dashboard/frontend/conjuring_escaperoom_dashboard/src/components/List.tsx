import { HTMLAttributes } from "react";
import Divider from "./Divider";

interface ListInterface extends HTMLAttributes<HTMLUListElement> {
    children: React.ReactNode[]
    border?:boolean;
    hoverable?: boolean;
    itemClassName?: string;
}

const List: React.FC<ListInterface> = ({children, hoverable = false, border = true, itemClassName, className, ...props}) => {

    return (
        <ul className={`px-2 py-4 bg-slate-100 dark:bg-slate-900  rounded-md
                        justify-center items-center  g-0 ${border && 'border border-slate-300 dark:border-indigo-900'}
                        ${className}`} {...props}>
            {children.map((item, index) => (
                <li className={`md:py-2 py-4 px-4  rounded-md w-full transition-all duration-150 ease-in
                                ${hoverable && 'cursor-pointer hover:bg-slate-200 dark:hover:bg-indigo-900'} 
                                ${itemClassName}`} 
                    key={index}>
                    {item}
                </li>
            ))}
        </ul>
    )
}

export default List