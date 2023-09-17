type PlayerFormProps = {
    counter?: number,
}

export const PlayerForm = ({counter}: PlayerFormProps) => {


    const fields = [
        { title: "نام", type: "text", id: "fname" },
        { title: "نام خانوادگی", type: "text", id: "lname" },
        { title: "شماره تماس", type: "text", id: "callerID" },
        { title: "سن", type: "text", id: "age" },
    ]

    return (
        <>
            <div className="container-fluid sm:p-1 p-3">
                    <div className="grid sm:grid-cols-4 grid-rows gap-y-1 gap-x-5">
                        {fields.map((field, index) => (
                            <input id={counter ? "" + counter + index : "" + index} key={index} placeholder={field.title} type={field.type}
                                className={`focus:animate-bounce focus:duration-1000 focus:ease-in-out focus:outline-none
                                        bg-slate-100 dark:bg-slate-800 rounded shadow-sm py-2 px-4
                                        border border-gray-800`}/>
                        ))}
                    </div>
            </div>
        </>
    )

}

PlayerForm.defaultProps = {
    counter: null,
}