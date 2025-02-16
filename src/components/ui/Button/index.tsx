interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "defaut" | "outline";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { type, ...rest } = props;
  return type === "outline" ? (
    <button
      {...rest}
      className={` border bg-transparent border-black text-black py-3 px-5 rounded ${props.className}`}
    >
      {props.children}
    </button>
  ) : (
    <button {...rest} className={` py-3 px-5 rounded ${props.className}`}>
      {props.children}
    </button>
  );
};

export default Button;
