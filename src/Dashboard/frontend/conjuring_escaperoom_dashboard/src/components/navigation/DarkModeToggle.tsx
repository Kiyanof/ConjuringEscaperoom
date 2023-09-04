import { faMoon } from "@fortawesome/free-solid-svg-icons";
import Switch from "../Form/SwitchButton";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "@/redux/reducers/theme";

const DarkModeToggle = () => {
    const dispatch = useDispatch() 
    const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(toggleDarkMode())
    }
    return (
        <span>
            <Switch color="dark" onChange={handleToggle} icon={faMoon} />
        </span>
    )
}

export default DarkModeToggle;