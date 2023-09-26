
import { HTMLAttributes } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import Divider from "@/components/Divider";
import Signal from "../Signal";
import { useSelector } from "react-redux";
import { RootState } from "@/redux";

interface SignalSenderInterface extends HTMLAttributes<HTMLDivElement> {}

const SignalSender: React.FC<SignalSenderInterface> = ({
  className,
  ...props
}) => {
  const signals = useSelector((state: RootState) => state.reciever.recivers)

  const defaultClassName = `w-full h-full border rounded-lg shadow-sm border-slate-200 dark:border-slate-800`;

  return (
    <div className={`${defaultClassName} ${className}`} {...props}>
      <div
        dir="rtl"
        className="flex flex-col justify-between h-full w-full items-center gap-2"
      >
        <div className="h-full overflow-auto">
          <Signal signals={signals} />
        </div>

        <div className="w-full relative p-4">
          <Divider />
          <div className=" gap-4 flex">
            <button
              className={`hover:shadow-md text-slate-400 hover:text-slate-700 hover:-translate-y-1 font-semibold p-2 px-4  rounded-full shadow transition delay-100 ease-in`}
            >
              <FontAwesomeIcon className="pt-2 " icon={faAdd} />
            </button>
            <button
              className={`hover:shadow-md text-slate-400 hover:text-slate-700 hover:-translate-y-1 font-semibold p-2 px-4  rounded-full shadow transition delay-100 ease-in`}
            >
                <FontAwesomeIcon className="pt-2 " icon={faCheck} />
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default SignalSender;
