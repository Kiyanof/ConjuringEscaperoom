import { HTMLAttributes } from "react";
import TagReader from "./TagReader";
import Cardbox from "../Card/Cardbox";

interface TagFinderInterface extends HTMLAttributes<HTMLDivElement> {
 
}

const TagFinder: React.FC<TagFinderInterface> = ({className, ...props}) => {

    const defaultClassName = `h-full w-full overflow-auto border rounded-lg shadow-sm border-slate-200 dark:border-slate-800`

    return (
        <div className={`${defaultClassName} ${className}`} {...props}>
            <TagReader uuid="190jajskcn9qi" />
        </div>
    )
}

export default TagFinder
