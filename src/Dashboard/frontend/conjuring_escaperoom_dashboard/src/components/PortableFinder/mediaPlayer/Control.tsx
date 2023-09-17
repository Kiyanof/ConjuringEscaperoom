import { faAnglesLeft, faAnglesRight, faArrowRightToFile, faCircleArrowLeft, faCircleArrowRight, faCirclePlay, faDownload, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HTMLAttributes, useState } from "react";

interface ControlInterface extends HTMLAttributes<HTMLDivElement> {
  current?: string,
}

const Control: React.FC<ControlInterface> = ({current = null,  className, ...props }) => {


  const events = [
    { 
        title: "Prev", 
        icon: faAnglesLeft,
        onclick: () => null,
        className: `hover:rotate-2`
    }
    ,
    { 
        title: "Play", 
        icon: faPlay,
        onclick: () => null,
        className: `hover:scale-95`

    }
    ,
    { 
        title: "Next", 
        icon: faAnglesRight,
        onclick: () => null,
        className: `hover:-rotate-2`

    }
    ,
  ];


  const defaultClassName = `border border-slate-200 dark:border-slate-800 p-2 w-full flex flex-row items-center justify-between gap-2`;
  return (
    <div dir="rtl" className={` ${defaultClassName} ${className}`} {...props}>
      <div>
        {current}
      </div>
      <div  dir="ltr">
        {events.map((event, index) => (
            <FontAwesomeIcon 
                className={`text-slate-700 hover:shadow-lg  hover:-translate-y-1 rounded-full shadow-sm p-2 
                            w-[30px] h-[25px]  transition-all duration-200 ease-in cursor-pointer
                            ${event.className}
                            `} 
                key={index} 
                icon={event.icon}/>
        ))}
      </div>
      <div className="flex flex-row items-center">
        <FontAwesomeIcon className={`text-slate-500 hover:text-blue-500 transition-all duration-200 ease-in cursor-pointer`} icon={faArrowRightToFile} />
      </div>
    </div>
    
  )
    
};

export default Control;
