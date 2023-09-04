import React, { ChangeEvent, useState } from "react";
import Input from "../Form/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faRefresh } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import { changeBluUuidAPI, changeIpAPI } from "@/utils/crossAPI";

interface IDFieldsInterface {
  senderID: string,
  recieverID: string, 
}

const IDFields: React.FC<IDFieldsInterface> = ({senderID, recieverID}) => {
  const [blueUUID, setBlueUUID] = useState<string>("");
  const [senderIP, setSenderIP] = useState<string>(senderID);
  const [recieverIP, setReciverIP] = useState<string>(recieverID);

  let lastSenderIP = senderIP;
  let lastRecieverIP = recieverIP;

  const handleBluetoothUUIDChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setBlueUUID(newValue);
  };

  const submitBluetoothUUID = () => {
    const pattern = /^[0-9a-fA-F]{8}-([0-9-a-fA-F]{4}-){3}[0-9-a-fA-F]{12}$/;
    const isValid = pattern.test(blueUUID);
    if (isValid) {
      changeBluUuidAPI(recieverIP, blueUUID)
      return true;
    }
    else {
      setBlueUUID('')
      return false;
    }
  };
  const handleIPChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    switch (index) {
      case 0:
        setSenderIP(newValue);
        break;
      case 1:
        setReciverIP(newValue);
        break;
      default:
        break;
    }
  };

  const submitIP = () => {
    const pattern = /^192.168.0.\w{1,3}$/;
    const isValid = pattern.test(senderIP) && pattern.test(recieverIP);
    if (isValid) {
      changeIpAPI(lastRecieverIP, recieverIP)
      changeIpAPI(lastSenderIP, senderIP)
      lastSenderIP = senderIP;
      lastRecieverIP = recieverIP;
      return true;
    }
    else {
      setSenderIP('')
      setReciverIP('')
      return false;
    }
  };

  const generateBluetoothUUID = () => {
    setBlueUUID(uuidv4());
  };

  const generateLocalIPAddress = (): string => {
    const min = 0;
    const max = 255;
    const octet = Math.floor(Math.random() * (max - min + 1)) + min;
    const ipAddress = `192.168.0.${octet}`;
    return ipAddress;
  };

  const fields = [
    {
      placeholder: "Bluetooth UUID",
      value: blueUUID,
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        handleBluetoothUUIDChange(e),
      onSubmit: () => submitBluetoothUUID(),
      onGenerate: () => generateBluetoothUUID(),
    },
    {
      placeholder: "Sender IP",
      value: senderIP,
      onChange: (e: ChangeEvent<HTMLInputElement>) => handleIPChange(0, e),
      onSubmit: () => submitIP(),
      onGenerate: () => setSenderIP(generateLocalIPAddress()),
    },
    {
      placeholder: "Reciever IP",
      value: recieverIP,
      onChange: (e: ChangeEvent<HTMLInputElement>) => handleIPChange(1, e),
      onSubmit: () => submitIP(),
      onGenerate: () => setReciverIP(generateLocalIPAddress()),
    },
  ];

  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      {fields.map((field, index) => (
        <div className="flex flex-row gap-2 items-center" key={index}>
          <Input
            placeholder={field.placeholder}
            type="text"
            value={field.value}
            onChange={field.onChange}
            className="arial text-md font-thin w-80"
          />
          <FontAwesomeIcon
            className=" font-medium text-xl border  border-slate-300 py-2 px-2 
                                    rounded-full cursor-pointer  hover:shadow-lg  transition-all 
                                    duration-200 ease-in-out dark:shadow-slate-700 dark:border-slate-800"
            icon={faCheck}
            onClick={field.onSubmit}
          />
          <FontAwesomeIcon
            className=" font-medium text-xl border  border-slate-300 py-2 px-2 
                                    rounded-full cursor-pointer  hover:shadow-lg  transition-all 
                                    duration-200 ease-in-out dark:shadow-slate-700 dark:border-slate-800"
            icon={faRefresh}
            onClick={field.onGenerate}
          />
        </div>
      ))}
    </div>
  );
};

export default IDFields;
