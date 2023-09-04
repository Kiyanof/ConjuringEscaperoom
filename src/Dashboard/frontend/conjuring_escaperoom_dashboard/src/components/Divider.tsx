import React from "react"

interface DividerInterface extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement> {
    className?: string,

}

const Divider: React.FC<DividerInterface> = ({className, ...props}) => {

   

    return (
        <hr className={`mx-auto border-slate-300 dark:border-zinc-700 my-3 ${className}`} {...props}>
        
        </hr>
    )
}

export default Divider