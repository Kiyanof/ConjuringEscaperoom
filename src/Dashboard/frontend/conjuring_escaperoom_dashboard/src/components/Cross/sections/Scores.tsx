import Counter from "@/components/Form/Counter";
import { RootState } from "@/redux";
import { faAnchorLock, faDownLeftAndUpRightToCenter, faListNumeric, faTasks, faUserInjured } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

interface ScoreInterface {
  crossIndex?: number,

}

const Score: React.FC<ScoreInterface> = ({crossIndex = 0}) => {

  const cross = useSelector((state: RootState) => state.cross.cross)

  const fields = [
    {
        title: "Damage", 
        score: cross[crossIndex].scoreVal.damage, 
        icon: faUserInjured,
        onchange: () => null,
        onsubmit: () => null,
     },
     {
        title: "Mission", 
        score: cross[crossIndex].scoreVal.task, 
        icon: faTasks,
        onchange: () => null,
        onsubmit: () => null,
     },
     {
        title: "Cross Distance", 
        score: cross[crossIndex].scoreVal.cross, 
        icon: faDownLeftAndUpRightToCenter,
        onchange: () => null,
        onsubmit: () => null,
     },
     {
        title: "Relay Distance", 
        score: cross[crossIndex].scoreVal.relay, 
        icon: faAnchorLock,
        onchange: () => null,
        onsubmit: () => null,
     },
     {
      title: "Total Score", 
      score: 0, 
      icon: faListNumeric,
      onchange: () => null,
      onsubmit: () => null,
   },
  ];

  return (
    <div className="h-[250px] overflow-y-auto overflow-x-hidden flex flex-col gap-4">
      {fields.map((field, index) => (
        <div className="flex flex-row justify-center items-center" key={index}>
          <Counter
            icon={field.icon}
            value={field.score}
            onchange={field.onchange}
            onsubmit={field.onsubmit}
          />
        </div>
      ))}
    </div>
  );
};

export default Score;
