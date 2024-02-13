import { Link } from "react-router-dom";
import { BackwardFilled } from "@ant-design/icons";
type ButtonProps = {
  name: string;
  className?: string;
  to?: string;
};

const Button = ({ name, className, to }: ButtonProps) => {
  return (
    <Link
      to={to || "/"}
      className={`border btn mb-2 text-nowrap text-white ${className}`}
      style={{ width: "110px" }}
    >
      {name === "Back" ? (
        <>
          {" "}
          <BackwardFilled /> {name}
        </>
      ) : (
        name
      )}
    </Link>
  );
};

export default Button;
