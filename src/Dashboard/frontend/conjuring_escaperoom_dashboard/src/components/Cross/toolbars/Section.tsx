import Divider from "@/components/Divider";
import { HTMLAttributes } from "react";

interface SectionInterface extends HTMLAttributes<HTMLDivElement> {
    title?: string,
}

const Section: React.FC<SectionInterface> = ({className, children, title, ...props}) => {

    const classes = `m-1 p-4 bg-slate-200 dark:bg-slate-800 rounded-lg ${className}`

    return (
        <div className={`${classes}`} {...props}>
            <h3 className="w-full text-center"> {title} </h3>
            <Divider />
            {children}
        </div>
    )
}

export default Section