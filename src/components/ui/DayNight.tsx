import { useDispatch } from "react-redux";
import "../../styles/DayNight.css";
import { toggleTheme } from "../../redux/features/theme/themeSlice";
const DayNight = () => {
  const dispatch = useDispatch();
  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <>
      <div className="">
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          onChange={handleThemeToggle}
        />
        <label htmlFor="checkbox" className="checkbox-label">
          <i className="fas fa-moon"></i>
          <i className="fas fa-sun"></i>
          <span className="ball"></span>
        </label>
      </div>
    </>
  );
};

export default DayNight;
