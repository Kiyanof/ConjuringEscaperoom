import {
  faBookReader,
  faPersonMilitaryPointing,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { pushTag, setReader } from "@/redux/reducers/tag";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux";
import { fetchInitialState } from "@/api/initiateRedux";

interface TagReaderInterface {}

const TagReader: React.FC<TagReaderInterface> = ({
}) => {

  const reader = useSelector((state: RootState) => state.tag.reader)

  const [name, setName] = useState("")
  const [UUID, setUUID] = useState("");
  const [Command, setCommand] = useState("");
  const [readerIP, setReaderIP] = useState(reader);

  const dispatch = useDispatch();

  const handleNameChange = (e: ChangeEvent<HTMLHeadingElement>) => {
    const newVal = e.target.innerHTML;
    setName(newVal);
  };

  const handleUUIDChange = (e: ChangeEvent<HTMLHeadingElement>) => {
    const newVal = e.target.innerHTML;
    setUUID(newVal);
  };

  const handleCommandChange = (e: ChangeEvent<HTMLHeadingElement>) => {
    const newVal = e.target.innerHTML;
    setCommand(newVal);
  };

  const handleReaderIPChange = (e: ChangeEvent<HTMLHeadingElement>) => {
    console.log('sad')
    const newVal = {_id: reader._id, ip: e.target.innerHTML};
    setReaderIP(newVal);
  };

  const submitReaderIP = () => {
    dispatch(setReader({value: readerIP}))
  }

  const handlePushTag = () => {
    dispatch(pushTag({ value: { UUID: UUID, command: Command, name: name } }));
  };

  return (
    <div
      dir="rtl"
      className="flex flex-row items-center 
                                p-4 border border-slate-200 dark:border-slate-800
                                 overflow-auto w-full lg:justify-center gap-6"
    >
      
      <div className="flex flex-row gap-2">
        <FontAwesomeIcon icon={faUserSecret} />
        <h5>کد شناسایی: </h5>
      </div>

      <h5
        className="p-3 rounded-md border border-slate-200 dark:border-slate-800"
        dir="ltr"
        onBlur={(e) => handleUUIDChange(e)}
      >
        {UUID}
      </h5>
      <h5>نام : </h5>
      <h5
        className="p-3 rounded-md border border-slate-200 dark:border-slate-800"
        dir="ltr"
        onBlur={(e) => handleNameChange(e)}
        contentEditable
      >
        {name}
      </h5>
      <h5>دستور : </h5>
      <h5
        className="p-3 rounded-md border border-slate-200 dark:border-slate-800"
        dir="ltr"
        onBlur={(e) => handleCommandChange(e)}
        contentEditable
      >
        {Command}
      </h5>
      <Button onClick={() => handlePushTag()}>تایید</Button>
      <div className="flex flex-row gap-2 border-r px-8 border-r-red-500">
        <FontAwesomeIcon icon={faBookReader} />
        <h5>آدرس خواننده کد: </h5>
      </div>

      <h5
        className="p-3 rounded-md border border-slate-200 dark:border-slate-800"
        onBlur={(e) => handleReaderIPChange(e)}
        contentEditable
        dir="ltr"
      >
        {reader.ip}
      </h5>
      <Button onClick={() => submitReaderIP()}>ثبت</Button>
    </div>
  );
};

export default TagReader;
