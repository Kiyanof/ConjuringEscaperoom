import { ChangeEvent, HTMLAttributes, ReactNode, useEffect, useState } from "react";

interface CheckboxItem {
  title: string;
  id: string | number;
  active: boolean;
}

interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  items: CheckboxItem[];
  multiply?: boolean;
  onChange?: (checkedItems: (string | number)[]) => void;
  color?: "primary" | "success" | "danger" | "warn" | "dark" | "light";
}

const Checkbox: React.FC<CheckboxProps> = ({
  items,
  multiply,
  onChange,
  className,
  color,
  ...props
}) => {
  const [checkedItems, setCheckedItems] = useState<(string | number)[]>([])

  const handleToggle = (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    const itemId = event.target.value;
    if (multiply) {
      if (isChecked) {
        setCheckedItems((prevState) => [...prevState, itemId]);
      } else {
        setCheckedItems((prevState) => prevState.filter((item) => item !== itemId));
      }
    } else {
      setCheckedItems([itemId]);
    }
    onChange?.(checkedItems);
  };

  const colorObject: Record<string, string> = {
    primary: "checked:bg-blue-600 checked:dark:bg-sky-700",
    success: "checked:bg-green-500 checked:dark:bg-green-700",
    danger: "checked:bg-red-500 checked:dark:bg-rose-700",
    warn: "checked:bg-yellow-500 checked:dark:bg-yellow-500",
    dark: "checked:bg-neutral-700 checked:dark:bg-slate-700",
    light: "checked:bg-rose-200 checked:dark:bg-slate-400",
  };

  const elementColor = color ? ` ${colorObject[color]}` : "bg-transparent";

  const classValue = `
    flex items-center space-x-2
    ${className}
  `;

  const checkboxClassValue = `
    appearance-none ${multiply ? 'rounded-md' : 'rounded-full'} border border-slate-300 dark:border-slate-500 w-5 h-5 checked:border-transparent focus:outline-none
    ${elementColor}
  `;

  return (
    <div className={classValue}>
      {items.map((item) => (
        <label key={item.id} className="flex items-center relative">
          <input
            type={multiply ? "checkbox" : "radio"}
            value={item.id}
            {...checkedItems.includes(item.id) ? checked : null}
            onChange={handleToggle}
            className={checkboxClassValue}
            {...props}
          />
          <span className="ml-2">{item.title}</span>
        </label>
      ))}
    </div>
  );
};

Checkbox.defaultProps = {
  color: 'success'
}

export default Checkbox;
