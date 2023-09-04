import React, { ChangeEvent, HTMLAttributes, useEffect, useState } from "react";

interface RangeProps extends HTMLAttributes<HTMLInputElement> {
  min: number;
  max: number;
  value: number;
  color?: string;
  showValue?: boolean;
}

const Range: React.FC<RangeProps> = ({ min, max, value, onChange, color, showValue, ...props }) => {
    const [val, setVal] = useState(value)
    const [accentColor, setAccentColor] = useState(color ? color : 'primary')
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    setVal(newValue)
    if(onChange) onChange(e);
  };

  useEffect(() => {
    setAccentColor(color ? color : 'primary')
  }, [color])

  return (
    <div className="flex flex-row items-center space-x-4">
      <input
        {...props}
        type="range"
        min={min}
        max={max}
        value={val}
        onChange={handleChange}
        className={`w-full h-4 ${accentColor}`}
      />
      {showValue && <span className="w-4">{val}</span>}
    </div>
  );
};

export default Range;
