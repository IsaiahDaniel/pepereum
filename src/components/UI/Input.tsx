type InputType = {
    inputType?: string;
    placeholder: string;
    classNames?: string;
    [x: string]: any;
    Icon?: any;
    withIcon?: boolean;
    iconVisable?: boolean;
    iconStyles?: any;
    iconClick?: () => void;
  };
  
  const Input = ({
    inputType,
    placeholder,
    classNames,
    Icon,
    iconClick,
    iconVisable,
    iconStyles,
    withIcon,
    ...props
  }: InputType) => {
    if (withIcon) {
      return (
        <div
          className={`bg-[#F1F1F1] p-4 w-full rounded-md outline-none flex items-center text-[#272727] ${
            classNames && classNames
          }`}
          {...props}
        >
          <input
            type={inputType}
            placeholder={placeholder}
            {...props}
            className="bg-transparent outline-none w-full"
          />
          {Icon && (
            <Icon
              {...iconStyles}
              onClick={iconClick}
              className="cursor-pointer"
            />
          )}
        </div>
      );
    }
  
    return (
      <div>
        <input
          type={inputType}
          placeholder={placeholder}
          className={`bg-[#F1F1F1] p-4 w-full rounded-md outline-none text-[#272727] ${
            classNames && classNames
          }`}
          {...props}
        />
      </div>
    );
  };
  
  Input.defaultProps = {
    inputType: "text",
  };
  
  export default Input;
  