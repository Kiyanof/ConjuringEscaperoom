import { HTMLAttributes, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faChevronUp } from "@fortawesome/free-solid-svg-icons";

interface Option {
  value: string;
  label: string;
  icon?: IconProp;
}

interface ComboBoxProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  containerClassName?: string;
  width?: string;
}

const ComboBox: React.FC<ComboBoxProps> = ({ options, value, onChange, className, width, containerClassName }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeValue, setActiveValue] = useState("Select ...");

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleOptionSelect = (selectedValue: string, selectedLabel: string) => {
    setActiveValue(selectedLabel);
    onChange(selectedValue);
    setIsExpanded(false);
  };

  return (
    <div className={`relative ${containerClassName}`}>
      <button
        type="button"
        className={`${width}  w-full py-2 px-8 mr-4 overflow-hidden rounded-md border border-slate-300 dark:border-slate-500 bg-transparent text-left`}
        onClick={handleToggle}
      >
        {activeValue || "Select an option"}
        <span className="absolute top-0 right-0 h-full flex items-center pr-6 pointer-events-none">
          <FontAwesomeIcon
            className={`transition-transform duration-200 ${
              isExpanded ? "transform rotate-180" : ""
            }`}
            icon={faChevronUp}
          />
        </span>
      </button>
      {isExpanded && (
        <ul className={`${className} ${width} absolute z-10 w-fit max-h-36 overflow-auto py-2 mt-1 bg-slate-100 dark:bg-indigo-950 rounded-md shadow-lg dark:shadow-zinc-700`}>
          {options.map((option) => (
            <li
              key={option.value}
              className="px-4 py-2 cursor-pointer hover:border-b-[1px] ml-1 border-amber-300 dark:border-yellow-500 flex items-center justify-between"
              onClick={() => handleOptionSelect(option.value, option.label)}
            >
              <div className="flex items-center w-fit mx-2">
                {option.icon && (
                  <FontAwesomeIcon icon={option.icon} className="mr-2" />
                )}
                <span>{option.label}</span>
              </div>
              {value === option.value && (
                <FontAwesomeIcon
                  icon={faCheck}
                  className="ml-5 text-green-500"
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ComboBox;
