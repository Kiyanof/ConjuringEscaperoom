import React, { HTMLAttributes } from "react";

export interface ToolbarInterface extends HTMLAttributes<HTMLDivElement> {

}

const Toolbar: React.FC<ToolbarInterface> = ({className, children}) => {

    const classes = ` 
                    w-[250px] h-full
                    overflow-y-auto overflow-x-hidden
                    border border-slate-300 dark:border-slate-800
                    rounded-lg
                    ${className}`

    return (
        <div className={classes}>
            {children}
        </div>
    )
}

export default Toolbar

