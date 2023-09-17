"use client"

import { useCallback, useEffect, useMemo, useState } from "react"

interface CardProps extends React.HTMLProps<HTMLDivElement> {
    hiddenable?: boolean
}

const Card: React.FC<CardProps> = ({hiddenable = false, hidden = false, className, children, ...props}) => {

    const [hide, setHide] = useState<boolean>(hidden);
    const [size, setSize] = useState({width: 100, height: 100});

    const setSizeOfBox = useCallback((num: number) => {
        const newWidth = size.width + num;
        const newHeight = size.height + num;
        setSize({ width: newWidth, height: newHeight });
    }, [size.width, size.height]);

    useEffect(() => {
        if (hidden) {
            if (size.width > 30 && size.height > 30) {
                setTimeout(() => {
                    setSizeOfBox(-1);
                }, 2);
            } else if (!hide) {
                setHide(true);
            }
        } else {
            if (hide) {
                setHide(false);
            } else if (size.width < 100 && size.height < 100) {
                setTimeout(() => {
                    setSizeOfBox(1);
                }, 2);
            }
        }
    }, [hidden, hide, setSizeOfBox]);

    return (
        <div hidden={hide}  {...props} className={`
                        ${className}
                        ${hiddenable ? '' : 'w-fit'}
                        hover:-translate-y-1
                        p-5 
                        rounded-xl
                        bg-slate-100 dark:bg-slate-900
                        border border-slate-200
                        shadow-lg dark:shadow-md dark:hover:shadow-sm hover:shadow-sm dark:shadow-zinc-700
                        dark:border-slate-800 
                        transition ease-in-out duration-200`}
                        style={hiddenable ? {width: `${size.width}%`, height: `${size.height}%`} : {}}>
            {children}
        </div>
    )
}

Card.defaultProps = {

}

export default Card