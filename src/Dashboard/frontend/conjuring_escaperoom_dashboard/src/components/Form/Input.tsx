
import { faWarning } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { InputHTMLAttributes, useCallback, useState } from 'react'
import { z } from 'zod'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string
  type?: 'text' | 'password'
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  schema?: any,
}

const Input: React.FC<InputProps> = ({ placeholder, disabled, type, onChange, schema,className, ...props }) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const [errorIconOpacity, setErrorIconOpacity] = useState(1) 
  const [isClick, setIsClick] = useState(false)
  const classNameDefault = `border-slate-300 dark:border-slate-500 
                            focus:border-yellow-400
                            dark:focus:border-yellow-300`
  const [classValue, setClassValue] = useState(classNameDefault)

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value
    setValue(inputValue)
    if(onChange) onChange(event)
  }

  const setOpacity = (input: number, step?: number) => {
    if(input >= 1) return
    else if(step == null) {
      setErrorIconOpacity(input)
      return
    }
    const newOpacity = input + step
    setErrorIconOpacity(newOpacity)
    setTimeout(() => {
      setOpacity(newOpacity, step)
    }, 20);
  }

  const handleClick = () => {
    setIsClick(true)
  }

  const handleBlur = useCallback(() => { // TODO: I want to call just when value change and blur
    const inputValue = value
    if (schema && isClick) {
      try {
        schema.parse(inputValue)
        setClassValue(`border-green-500
                      dark:border-green-700
                      dark:focus:border-green-700
                      text-green-500 dark:text-green-700`)
        setError('')
      } catch (error: any) { // TODO: search what is this type
        setClassValue(`border-red-500
                      dark:border-rose-700
                      dark:focus:border-rose-700
                      text-red-500 dark:text-rose-700`)
        setOpacity(0, 0.1)
        setError(error.message)
      }
    }
  }, [value])

  return (
    <div className='relative block h-fit'>
      <input
        className={`
          ${disabled
            ? 'bg-slate-200 cursor-not-allowed'
            : 'bg-transparent cursor-pointer hover:shadow-md dark:hover:scale-105 '
          }
          pl-[32px]
          md:max-w-full max-w-xs
          dark:bg-transparent
          rounded-md
          pt-2
          pb-1
          px-5
          outline-none
          border ${classValue}
          ${className}
          transition ease-in-out duration-200
        `}
        placeholder={placeholder ? placeholder : 'Type here...'}
        disabled={disabled}
        type={type}
        value={value}
        onChange={handleChange}
        onClick={handleClick}
        onBlur={handleBlur}
        {...props}
      />
      {error &&
        <FontAwesomeIcon
          style={{ opacity: errorIconOpacity }}
          className=' text-red-500 
                      absolute 
                      top-1/3 right-2 
                      w-4 h-4'
          icon={faWarning} />
      }
    </div>
  )
}

Input.defaultProps = {
  disabled: false,
  type: 'text',
}

export default Input
