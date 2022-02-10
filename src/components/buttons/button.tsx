interface ButtonProps {
  type?: string;
  text: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <>
      <button
        onClick={props.onClick}
        className={`text-white text-sm font-bold uppercase  bg-${
          props.type || 'blue'
        } px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none w-40 ease-linear transition-all duration-150`}
      >
        {props.text}
      </button>
    </>
  )
}
