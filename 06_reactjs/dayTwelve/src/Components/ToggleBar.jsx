import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/slice/ThemeSlice";

const ToggleBar = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

  return (
    <div className="p-2 flex justify-end bg-gray-100 dark:bg-gray-800">
      <button
        onClick={() => dispatch(toggleTheme())}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Switch to {mode === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default ToggleBar;
