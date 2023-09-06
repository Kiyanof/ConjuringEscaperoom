import Counter from "@/components/Form/Counter";
import { faAnchorLock, faDownLeftAndUpRightToCenter, faListNumeric, faTasks, faUserInjured } from "@fortawesome/free-solid-svg-icons";

interface ScoreInterface {}

const Score: React.FC<ScoreInterface> = ({}) => {
  const fields = [
    {
        title: "Damage", 
        score: 0, 
        icon: faUserInjured,
        onchange: () => null,
        onsubmit: () => null,
     },
     {
        title: "Mission", 
        score: 0, 
        icon: faTasks,
        onchange: () => null,
        onsubmit: () => null,
     },
     {
        title: "Cross Distance", 
        score: 0, 
        icon: faDownLeftAndUpRightToCenter,
        onchange: () => null,
        onsubmit: () => null,
     },
     {
        title: "Relay Distance", 
        score: 0, 
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
