import Counter from "@/components/Form/Counter";
import { RootState } from "@/redux";
import { crossInterface, setCross } from "@/redux/reducers/cross";
import { faAnchorLock, faDownLeftAndUpRightToCenter, faListNumeric, faTasks, faUserInjured } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface ScoreInterface {
  crossIndex?: number,

}

const Score: React.FC<ScoreInterface> = ({crossIndex = 0}) => {

  const cross = useSelector((state: RootState) => state.cross.cross[crossIndex])
  const [score, setScore] = useState({...cross.scoreVal})
  const [totalScore, setTotalScore] = useState(cross.score)
  const dispatch = useDispatch() 

  const handleDamageChange = (inp: number) => {
    const newScore = {...score}
    newScore.damage = inp
    setScore(newScore)
  }

  const handleMissionChange = (inp: number) => {
    const newScore = {...score}
    newScore.task = inp
    setScore(newScore)
  }

  const handleCrossChange = (inp: number) => {
    const newScore = {...score}
    newScore.cross = inp
    setScore(newScore)
  }

  const handleRelayChange = (inp: number) => {
    const newScore = {...score}
    newScore.relay = inp
    setScore(newScore)
  }

  const handleTotalScoreChange = (inp: number) => {
    setTotalScore(inp)
  }

  const submitTotalScore = () => {
    const newCrossInformation = {...cross}
    newCrossInformation.score = totalScore
    dispatch(setCross({index: crossIndex, value: newCrossInformation}))
  }

  const submitScoreChange = () => {
    const newCrossInfotmation = {...cross}
    newCrossInfotmation.scoreVal = score
    dispatch(setCross({index: crossIndex, value: newCrossInfotmation}))
  }

  const fields = [
    {
        title: "Damage", 
        score: score.damage, 
        icon: faUserInjured,
        onchange: handleDamageChange,
        onsubmit: (value: number) => submitScoreChange(),
     },
     {
        title: "Mission", 
        score: score.task, 
        icon: faTasks,
        onchange: handleMissionChange,
        onsubmit: (value: number) => submitScoreChange(),
     },
     {
        title: "Cross Distance", 
        score: score.cross, 
        icon: faDownLeftAndUpRightToCenter,
        onchange: handleCrossChange,
        onsubmit: (value: number) => submitScoreChange(),
     },
     {
        title: "Relay Distance", 
        score: score.relay, 
        icon: faAnchorLock,
        onchange: handleRelayChange,
        onsubmit: (value: number) => submitScoreChange(),
     },
     {
      title: "Total Score", 
      score: totalScore, 
      icon: faListNumeric,
      onchange: handleTotalScoreChange,
      onsubmit: (val: number) => submitTotalScore(),
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
