import { Link } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";

type ButtonProps = {
  text: string;
  disabled?: any;
  classNames?: string;
  outline?: boolean;
  buttonType: "button" | "submit" | "reset";
  to?: string;
  primary?: boolean;
  onClick?: () => void;
  loader?: any;
};

const Button = ({
  text,
  disabled,
  buttonType,
  outline,
  classNames,
  to,
  loader,
  onClick,
}: ButtonProps) => {
  if (outline) {
    return (
      <button
        type={buttonType}
        onClick={onClick}
        className={`border border-greenIsh p-5 text-greenIsh rounded-lg hover:border-t-neutral-600 ${classNames}`}
      >
        {text}
      </button>
    );
  }

  if (to) {
    return (
      <Link
        to={to}
        className={`bg-primary p-5 text-center text-white rounded-md ${classNames}`}
      >
        {text}
      </Link>
    );
  }

  if (loader) {
    return (
      <div
        
        className={`bg-slate-500 green-btn p-4 text-white text-center rounded-md flex items-center justify-center`}
      >
        <span>
          loading
        </span>
        <ColorRing
          visible={true}
          height="30"
          width="30"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    );
  }

  return (
    <button
      type={buttonType}
      onClick={onClick}
      className={`bg-black green-btn p-5 text-white rounded-md ${classNames}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  buttonType: "button",
};

export default Button;
