import { HTMLAttributes, ReactNode, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface SwitchProps extends HTMLAttributes<HTMLInputElement> {
  color?: string;
  icon?: IconDefinition;
  checkedIcon?: IconDefinition;
  uncheckedIcon?: IconDefinition;
  border?: string,
  disabled?: boolean,
  checked?: boolean,
}

const Switch: React.FC<SwitchProps> = ({
  color,
  icon,
  checkedIcon,
  uncheckedIcon,
  className,
  onChange,
  border,
  disabled = false,
  checked = false,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    if (onChange) {
      onChange(event);
    }
  };

  const colorObject: Record<string, string> = {
    primary: "bg-blue-600 dark:bg-sky-700",
    success: "bg-green-500 dark:bg-green-700",
    danger: "bg-red-500 dark:bg-rose-700",
    warn: "bg-yellow-500 dark:bg-yellow-500",
    dark: "bg-neutral-700 dark:bg-slate-700",
    light: "bg-rose-200 dark:bg-slate-400",
  };

  const elementColor =
    color && isChecked ? ` ${colorObject[color]}` : "bg-transparent";

  const classValue = `
    mx-auto my-auto
    shadow-md dark:shadow-zinc-700
    hover:shadow-lg
    relative inline-flex flex-shrink-0 h-6 w-12 rounded-full cursor-pointer
    transition-colors ease-in-out duration-300 focus:outline-none ${border ? border : 'border border-1 border-slate-300 dark:border-slate-500 '}
    ${elementColor}
    ${className}
  `;

  const thumbClassValue = `
  inline-flex items-center justify-center h-5 w-5 my-auto py-4 rounded-full bg-slate-100 shadow-sm dark:shadow-zinc-700 dark:bg-indigo-950 shadow transform transition-transform duration-300
  ${isChecked ? "translate-x-6" : "translate-x-1"}
  `;

  return (
    <label className={classValue}>
      <input
        type="checkbox"
        className="sr-only"
        checked={isChecked}
        onChange={handleToggle}
        disabled={disabled}
        {...props}
      />
      <span className={thumbClassValue}>
        {isChecked && checkedIcon && (
          <FontAwesomeIcon
            icon={checkedIcon}
            className="text-sm text-blue-500"
          />
        )}
        {!isChecked && uncheckedIcon && (
          <FontAwesomeIcon
            icon={uncheckedIcon}
            className="text-sm text-gray-400"
          />
        )}
        {!checkedIcon && !uncheckedIcon && icon && (
          <FontAwesomeIcon icon={icon} className="text-sm text-gray-400" />
        )}
      </span>
    </label>
  );
};

Switch.defaultProps = {
  color: "primary",
};

export default Switch;
