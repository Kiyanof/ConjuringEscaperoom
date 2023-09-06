import Divider from "@/components/Divider";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faUnlink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HTMLAttributes, useState } from "react";
import { RootState } from "@/redux";
import { useSelector } from "react-redux";

interface SectionInterface extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  icon?: IconDefinition;
  index?: number;
}

const Section: React.FC<SectionInterface> = ({
  className,
  icon = faUnlink,
  index = null,
  children,
  title,
  ...props
}) => {
  const toolbarViews = useSelector(
    (state: RootState) => state.cross.toolbarViews
  );
  const isVisible = index != null ? toolbarViews[index].visible : true;
  const classes = `m-1 p-4 bg-slate-200 dark:bg-slate-800 rounded-lg ${className}`;

  return (
    <div className={`${classes} ${isVisible ? "block" : "hidden"}`} {...props}>
      <span className="flex flex-row justify-center items-center w-full">
        <FontAwesomeIcon icon={icon} />
        <h3 className="w-full text-center"> {title} </h3>
      </span>
      <Divider />
      {children}
    </div>
  );
};

export default Section;
