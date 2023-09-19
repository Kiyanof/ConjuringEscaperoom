import { ChangeEvent, useState } from "react";
import { player } from "./TeamForm";

type PlayerFormProps = {
  counter?: number;
  addPlayer?: Function;
};

export const PlayerForm = ({ counter, addPlayer = () => null }: PlayerFormProps) => {
  const [field, setField] = useState<player>({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    age: '',
  });

  const fields = [
    { title: "نام", type: "text", id: "fname", onEdit: (event: ChangeEvent<HTMLInputElement>) => push(event, 0)},
    { title: "نام خانوادگی", type: "text", id: "lname", onEdit: (event: ChangeEvent<HTMLInputElement>) => push(event, 1) },
    { title: "شماره تماس", type: "text", id: "callerID", onEdit: (event: ChangeEvent<HTMLInputElement>) => push(event, 2) },
    { title: "سن", type: "text", id: "age", onEdit: (event: ChangeEvent<HTMLInputElement>) => push(event, 3) },
  ];

  const push = (event: ChangeEvent<HTMLInputElement>, fieldIndex: number) => {
    const newField = {...field}
    switch(fieldIndex){
        case 0: newField.firstName = event.target.value; break;
        case 1: newField.lastName = event.target.value; break;
        case 2: newField.phoneNumber = event.target.value; break;
        case 3: newField.age = event.target.value; break;
    }
    setField(newField)
    if(addPlayer) addPlayer(newField)
  };

  return (
    <>
      <div className="container-fluid sm:p-1 p-3">
        <div className="grid sm:grid-cols-4 grid-rows gap-y-1 gap-x-5">
          {fields.map((field, index) => (
            <input
              id={counter ? "" + counter + index : "" + index}
              key={index}
              placeholder={field.title}
              type={field.type}
              onChange={field.onEdit}
              className={`focus:animate-bounce focus:duration-1000 focus:ease-in-out focus:outline-none
                                        bg-slate-100 dark:bg-slate-800 rounded shadow-sm py-2 px-4
                                        border border-gray-800`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

PlayerForm.defaultProps = {
  counter: null,
};
