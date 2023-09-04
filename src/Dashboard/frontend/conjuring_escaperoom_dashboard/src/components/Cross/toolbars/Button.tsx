import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

interface ButtonInterface extends FontAwesomeIconProps {

}

const Button: React.FC<ButtonInterface> = ({className, ...props}) => {

        const classes = `text-slate-500 hover:text-slate-700
                        cursor-pointer 
                        border border-slate-300 dark:border-slate-700 
                        dark:shadow-slate-700 rounded-lg  hover:shadow-md
                        p-4 w-4 h-4
                        transition-all duration-200 ease-in-out hover:-translate-y-1
                        ${className}`

        return (
            <FontAwesomeIcon
                className={classes}
                {...props}
              />
        )
}

export default Button