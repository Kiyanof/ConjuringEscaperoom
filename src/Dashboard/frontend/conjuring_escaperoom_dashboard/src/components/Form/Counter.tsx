import {
  IconDefinition,
  faCheck,
  faIcons,
} from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { ChangeEvent, HTMLAttributes, useEffect, useState } from "react";

interface Counter extends HTMLAttributes<HTMLDivElement> {
  value: number,
  icon?: IconDefinition;
  onchange: (newValue: number) => void;
  onsubmit?: (value: number) => void;
  placeholder?: string;
}

const Counter: React.FC<Counter> = ({
  value = 0,
  icon = faIcons,
  onchange = () => null,
  onsubmit = () => null,
  placeholder = 'Counter',
  ...props
}) => {

   const [val, setVal] = useState<number>(value)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (onchange) onchange(+e.target.value)
    }

    const handleSubmit = () => {
        if(onsubmit) onsubmit(val)
    }

    const handleMinus = () => {
      const newValue = value - 1
      onchange(newValue)
    }

    const handlePlus = () => {
      const newValue = value + 1
      onchange(newValue)
    }

    useEffect(() => {
      setVal(value)
    }, [value])

  return (
    <div className="flex flex-row gap-2 items-center justify-center" {...props}>
      {icon && <FontAwesomeIcon icon={icon} />}
      <span
        onClick={handleMinus}
        className="font-medium text-xl border  border-slate-300 py-2 px-2 rounded-full cursor-pointer  hover:shadow-lg  transition-all duration-200 ease-in-out dark:shadow-slate-700  dark:border-slate-700"
      >
        -
      </span>
      <input
        value={val}
        onChange={handleChange}
        placeholder={placeholder}
        className="text-center border border-slate-300 dark:border-slate-700 dark:shadow-slate-400 rounded-lg focus:outline-none hover:shadow-xl dark:hover:shadow-xl bg-transparent w-12 h-12"
      />
      <span
        onClick={handlePlus}
        className="font-medium text-xl border  border-slate-300 py-2 px-2 rounded-full cursor-pointer  hover:shadow-lg  transition-all duration-200 ease-in-out dark:shadow-slate-700  dark:border-slate-700"
      >
        +
      </span>
      <FontAwesomeIcon
        onClick={handleSubmit}
        className="font-medium text-xl border  border-slate-300 py-2 px-2 rounded-full cursor-pointer  hover:shadow-lg  transition-all duration-200 ease-in-out dark:shadow-slate-700 dark:border-slate-700"
        icon={faCheck}
      />
    </div>
  );
};

export default Counter;
