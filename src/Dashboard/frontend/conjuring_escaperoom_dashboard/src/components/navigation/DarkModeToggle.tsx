import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Switch from "../Form/SwitchButton";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "@/redux/reducers/theme";
import { RootState } from "@/redux";

const DarkModeToggle = () => {
    const dispatch = useDispatch() 
    const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(toggleDarkMode())
    }
    const darkMode = useSelector((state: RootState) => state.theme.darkMode)
    return (
        <span>
            <Switch color="dark" onChange={handleToggle} icon={darkMode ? faSun : faMoon} />
        </span>
    )
}

export default DarkModeToggle;