import { HTMLAttributes, useState } from "react";
import Input from "../Form/Input";
import Counter from "../Form/Counter";
import { faSortNumericUp } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { pushRelay } from "@/redux/reducers/relay";

interface RelayInterface extends HTMLAttributes<HTMLDivElement> {
}

const Relay: React.FC<RelayInterface> = ({className, ...props }) => {
  const [name, setName] = useState('')
  const [ip, setIP] = useState("");
  const [counter, setCounter] = useState(1);

  const dispatch = useDispatch()

  const handleCounterChange = (value: number) => {
    if (value > 0 && value < 32) {
      setCounter(value);
    }
  };

  const handleSubmit = (input: Object) => {
    dispatch(pushRelay({value: input}))
  }

  const defaultClassName = `w-full border border-slate-200 dark:border-slate-800 
                                shadow-sm dark:shadow-zinc-800 rounded-lg p-2`;

  return (
    <div className={`${defaultClassName} ${className}`} {...props}>
      <div
        dir="rtl"
        className="flex flex-row flex-wrap items-center overflow-x-auto w-full justify-center gap-6"
      >
        <div className="flex flex-row gap-2 items-center">
          <h5>نام :</h5>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="نام دستگاه را وارد کنید"
          />
        </div>
        <div className="flex flex-row gap-2 items-center">
          <h5>آدرس :</h5>
          <Input
            value={ip}
            onChange={(e) => setIP(e.target.value)}
            placeholder="آدرس پردازنده رله را وارد کنید"
          />
        </div>
        <div className="flex flex-row gap-2 items-center">
          <h5>تعداد :</h5>
          <Counter
            value={counter}
            onchange={(e) => handleCounterChange(e)}
            onsubmit={(v) => handleSubmit({name: name, ip: ip, counter: counter})}
            icon={null}
          />
        </div>
      </div>
    </div>
  );
};

export default Relay;
