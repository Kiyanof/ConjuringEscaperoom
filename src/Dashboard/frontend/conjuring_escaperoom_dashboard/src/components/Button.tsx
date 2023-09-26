'use client'

import { ButtonHTMLAttributes, ReactNode, useEffect, useState } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: string,
    children?: ReactNode,
    sound?: string;
}

const Button: React.FC<ButtonProps> = ({sound, color, children, className, onClick, dir, ...props}) => {

    const [isClicked, setIsClicked] = useState(false)
    const [audio, setAudio] = useState<HTMLAudioElement>()

    useEffect(() => {
        if(sound) {
            const audioElement = document.createElement('audio')
            audioElement.src = sound
            setAudio(audioElement)
        }
    }, [sound, audio])

    const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
        setIsClicked(true);
        await new Promise((resolve) => setTimeout(resolve, 100));
        setIsClicked(false);
        if (onClick) {
          onClick(event);
        }
        audio?.play();
      };

    const colorObject: Record<string, string> = {
        'primary': 'border-primary-400 dark:border-primary-600',
        'success': 'border-success-400 dark:border-success-600',
        'danger': 'border-danger-400 dark:border-danger-600',
        'warn': 'border-warning-600 dark:border-warning-600',
        'dark': 'border-secondary-700 dark:border-secondary-900',
        'light': 'border-secondary-100 dark:border-secondary-100',
    }
    const elementColor = color ? `border ${colorObject[color]}` : ``

    const classValue =   `
                         py-2 px-4 my-2 mx-3
                         ${elementColor}   
                         ${className}
                         rounded-full
                         hover:shadow-md   
                         border-slate-200 dark:border-slate-800             
                         dark:hover:shadow-zinc-700
                         transition-all ease-in duration-150
                         ${isClicked ? 'rotate-3 transform-gpu"' : ''}
                         `

    return (
        <button className={classValue} onClick={handleClick} {...props}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    color: 'primary',
    children: 'Click Me!',
}

export default Button