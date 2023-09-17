import { faBookReader, faPersonMilitaryPointing, faUserSecret } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "../Button/Button"

interface TagReaderInterface {
    uuid?: string,
    ip?: string,
    command?: string,
}

const TagReader: React.FC<TagReaderInterface> = ({uuid = '', ip = '', command = '192.168.1.200/relay=1&state=on'}) => {

    return (
        <div dir="rtl" className="flex flex-row items-center 
                                p-4 border border-slate-200 dark:border-slate-800
                                 overflow-auto w-full lg:justify-center gap-6">
                                    <div className="flex flex-row gap-2">
                                    <FontAwesomeIcon icon={faUserSecret} />
            <h5>کد شناسایی: </h5>
                                    </div>
            
            <h5 className="p-3 rounded-md border border-slate-200 dark:border-slate-800" dir="ltr">{uuid}</h5>
            <h5>دستور : </h5>
            <h5 className="p-3 rounded-md border border-slate-200 dark:border-slate-800" dir="ltr" contentEditable>{command}</h5>
            <Button>تایید</Button>
            <div className="flex flex-row gap-2 border-r px-8 border-r-red-500">
                                    <FontAwesomeIcon icon={faBookReader} />
            <h5>آدرس خواننده کد: </h5>
                                    </div>
            
            <h5 className="p-3 rounded-md border border-slate-200 dark:border-slate-800" contentEditable dir="ltr">{uuid}</h5>
            <Button>ثبت</Button>
        </div>
    )
}

export default TagReader