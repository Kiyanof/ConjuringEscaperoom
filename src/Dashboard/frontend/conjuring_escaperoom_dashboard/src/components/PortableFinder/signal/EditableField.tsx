import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faIcons } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormEvent, useEffect, useState } from "react";

interface EditableFieldInterface {
    icon?: IconDefinition,
    title?: string,
    value?: string | number | boolean | undefined,
    onInput?: Function,
    
}

const EditableField: React.FC<EditableFieldInterface> = ({icon = faIcons, title = '', value = '', onInput = () => null}) => {

    const [val, setVal] = useState(value)
    const handleInputChange = (e: FormEvent<HTMLHeadingElement>) => {

        if(onInput) onInput(e)
    }

    useEffect(() => {
        if(value === val){
            return
        }
        const newVal = value
        setVal(newVal)
    }, [value, val])

  return (
    <span className="inline-flex gap-2 items-center text-xs border border-slate-300 p-1 rounded-md">
      <FontAwesomeIcon icon={icon} />
       {title}: 
      <h5 className="rounded-sm p-1" dir="ltr" contentEditable onInput={handleInputChange}>
        {val}
      </h5>
    </span>
  );
};

export default EditableField;
