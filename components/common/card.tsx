interface CardProps{
  width?:string
}

export const Card: React.FC<CardProps> = (props) => {
  return (
    <div className={`p-8 bg-white rounded-sm shadow-md ${props.width? props.width : "w-full"} ` }>{props.children}</div>
  );
};
