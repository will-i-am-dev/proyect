interface TitleProps {
  size?: string;
}

export const Title: React.FC<TitleProps> = (props) => {
  return (
    <h1 className={`text-${props.size || `3xl`} text-darkBlue  font-bold text-center mb-5`}>
      {props.children}
    </h1>
  );
};
