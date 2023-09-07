import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition} from '@fortawesome/fontawesome-svg-core'
import { faInfo } from '@fortawesome/free-solid-svg-icons'


type AbsoluteIconButtonProps = {
    icon: IconDefinition,
    position?: string,
    btnClassName?: string,
    containerClassName?: string,
    iconClassName?: string,
    onMouseOver?: any,
    onMouseOut?: any,
    index?: number,
    title?: string,
    onClick?: Function,
}

export const AbsoluteIconButton = ({onClick = () => null, icon, position, btnClassName, containerClassName, iconClassName, onMouseOver, onMouseOut, index, title}:AbsoluteIconButtonProps) => {

    return (
        <>
            <div className={`fixed ${position} ${containerClassName} z-20`}>
                <button  
                         onClick={() => onClick()}
                         className={`${btnClassName} hover:shadow-md font-semibold py-2 px-4  rounded-full shadow transition delay-100 ease-in`}>
                    <FontAwesomeIcon className={`${iconClassName}`} icon={icon} />
                </button>
            </div>
        </>
    )
}

AbsoluteIconButton.defaultProps = {
    icon: faInfo,
    position: "left-0 bottom-0",
    btnClassName: "bg-transparent dark:shadow-slate-600  focus:border-indigo-100 focus:border  hover:text-indigo-600 text-indigo-500",
    containerClassName: "p-5",
    iconClassName: "pt-2",
    onMouseOut: null,
}