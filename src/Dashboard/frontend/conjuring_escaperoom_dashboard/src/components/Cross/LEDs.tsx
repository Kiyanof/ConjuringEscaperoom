import greenImage from "@/../public/green.png";
import redImage from "@/../public/red.png";
import yellowImage from "@/../public/yellow.png";
import grayImage from "@/../public/gray.png";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { setHealthAPI } from "@/utils/crossAPI";

interface LEDsInterface {
  id?: number
}

const LEDs: React.FC<LEDsInterface> = ({id=100}) => {
  const [health, setHealth] = useState(3);
  const [hearts, setHearts] = useState([greenImage, yellowImage, redImage]);
  
  let LastClickIndex = -1;

  const leds = [
    { image: greenImage, alt: "Green LED" },
    { image: yellowImage, alt: "Yellow LED" },
    { image: redImage, alt: "Red LED" },
    { image: grayImage, alt: "Gray LED" },
  ];

  const handleHeartAPI = (states: StaticImageData[]) => {
    const offState = grayImage
    states.map((state, index) => {
      if(state !== offState) setHealthAPI(id, index+1, true)
      else setHealthAPI(id, index+1, false)
    })
  }

  const handleLEDClick = (index: number) => {
    const newHealth = index + 1;
    setHealth(newHealth);
    let newHearts: StaticImageData[] = []
    
    for (let i = 1; i <= 3; i++) {
      if (i <= newHealth) {
          newHearts = [...newHearts, leds[i-1].image]
      } else {
        newHearts = [...newHearts, leds[3].image]
      }
    }

    if(LastClickIndex !== index) {
      console.log(index)
      newHearts[index] = (hearts[index] === leds[3].image ? leds[index].image : leds[3].image)
    }
  
    handleHeartAPI(newHearts)
    setHearts(newHearts)
    LastClickIndex = index;
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      {hearts.map((v, k) => (
        <Image
          className="cursor-pointer"
          key={k}
          src={v}
          alt={leds[k].alt}
          width={30}
          height={30}
          onClick={() => handleLEDClick(k)}
        />
      ))}
    </div>
  );
};

export default LEDs;
