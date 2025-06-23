import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/slice/ThemeSlice";
import { FaRegMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";

const ToggleBar = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

  return (
    <div className=" flex justify-end dark:bg-gray-800">
      <button
        onClick={() => dispatch(toggleTheme())}
        className="text-xl text-gray-700 hover:text-blue-600 transition-colors"
      >
       {mode === "light" ? <FaRegMoon /> : <IoSunnyOutline className="text-white" />}
      </button>
    </div>
  );
};

export default ToggleBar;

