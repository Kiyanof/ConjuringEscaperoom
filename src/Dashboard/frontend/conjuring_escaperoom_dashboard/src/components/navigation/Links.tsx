import { setActiveTab } from "@/redux/reducers/theme";
import { HTMLAttributes } from "react";
import { useDispatch } from "react-redux";

interface links {
  title: string,
  href: string,
}

interface Links extends HTMLAttributes<HTMLUListElement> {
    items: links[],
    isVertical?: boolean,
}

const Links: React.FC<Links> = ({items, isVertical = false, ...props }) => {
  
  const dispatch = useDispatch()

  const handleClick = (index: number) => {
    dispatch(setActiveTab(index));
  }
  return (
    <ul
      className={`${isVertical ? 'flex-col-reverse' : 'flex-row-reverse' } font-light text-lg flex flex-wrap gap-4 items-center justify-around`}
      {...props}
    >
      {items.map((item, index) => (
        <li onClick={() => handleClick(index)} className={`cursor-pointer hover:scale-110 ease-in-out duration-200 transition-transform`} key={index}>
          {item.title}
        </li>
      ))}
    </ul>
  );
};

export default Links;
