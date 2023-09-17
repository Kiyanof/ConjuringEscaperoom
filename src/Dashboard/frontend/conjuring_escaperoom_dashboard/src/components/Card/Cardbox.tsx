import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";
import Card from "./Card";
import Divider from "../Divider";
import { faArrowsAlt, faClose } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface CardInterface {
  title: string;
  content: React.ReactNode;
}

interface CardboxInterface extends React.HTMLAttributes<HTMLDivElement> {
  cards: CardInterface[];
}

const Cardbox: React.FC<CardboxInterface> = ({ cards, ...props }) => {
  const [items, setItems] = useState(cards);
  const [dragStart, setDragStart] = useState(false);
  const [dragOverID, setDragOverID] = useState(-1);
  const [dragOver, setDragOver] = useState(false);
  const [canDrag, setCanDrag] = useState(false);
  const [dragItemIndex, setDragItemIndex] = useState(-1);


  const addItem = (newItem: React.ReactNode) => {
    setItems([...items, { title: 'New Card', content: newItem }]);
  };

  const removeItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    setDragStart(true);
    e.dataTransfer.setData("text/plain", index.toString());
    setDragItemIndex(index);
  };

  const replaceItem = (arr: any, index1: number, index2: number) => {
    // Store the values at the specified indices
    const value1 = arr[index1];
    const value2 = arr[index2];

    // Replace the items in the array
    arr.splice(index1, 1, value2);
    arr.splice(index2, 1, value1);

    // Return the modified array
    return arr;
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    setDragOverID(index);
    e.preventDefault();
  };

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>, droppedIndex: number) => {
      setDragStart(false);
      setDragOver(false);
      setCanDrag(false)
      e.preventDefault();
      const draggedIndex = parseInt(e.dataTransfer.getData("text/plain"));

      if (draggedIndex !== droppedIndex) {
        const updatedItems = replaceItem([...items], draggedIndex, droppedIndex);
        setItems(updatedItems);
      }
    },
    [items]
  );

  useEffect(() => {
    setDragOver(true);
  }, [dragOverID]);

  const handleOnMouseOver = (index: number) => {
    setCanDrag(true);
    setDragItemIndex(index);
  };

  const handleMouseLeave = () => {
    setDragStart(false)
    setDragOver(false)
  }

  return (
    <div className="w-full">
      <div
        onMouseLeave={handleMouseLeave}
        className={`flex flex-row flex-wrap  justify-center items-center gap-4 p-5 ${
          dragStart ? "border bg-slate-200 dark:bg-indigo-900" : ""
        }`}
      >
        {items.map((card, index) => (
          <Card
            className={`${
              dragOver && dragOverID === index ? "scale-75" : ""
            } transition-all ease-in-out duration-300`}
            draggable={canDrag && dragItemIndex === index}
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDrop={(e) => handleDrop(e, index)}
            key={index}
          >
            <div className="flex flex-row flex-wrap items-center justify-around gap-8">
              <FontAwesomeIcon
                onMouseOver={() => handleOnMouseOver(index)}
                className="cursor-move"
                icon={faArrowsAlt}
              />
              <h3 contentEditable onInput={(e: FormEvent<HTMLDivElement>) => console.log(e.currentTarget.innerText)}>{card.title}</h3>
              <FontAwesomeIcon
                className="hover:text-red-500 cursor-pointer"
                icon={faClose}
                onClick={() => removeItem(index)}
              />
            </div>
            <Divider />
            <div className="container-fluid">{card.content}</div>
          </Card>
        ))}
      </div>
      <Divider />
      <Button
        onClick={() => addItem('Card ' + items.length)}
        color="success"
        className="text-green-400 border border-slate-200 dark:border-slate-800"
      >
        +
      </Button>
    </div>
  );
};

export default Cardbox;
