
enum CardVariant {
  'primary',
  'outline',
  'ghost',
  'light',
  'dark',
}

interface CardProps{
  variant?:keyof typeof CardVariant
}

export const Card: React.FC<CardProps> = (props) => {
  return (
    <div className={`p-8 bg-white rounded-sm shadow-md  dark:bg-slate-400 dark:text-white` }>{props.children}</div>
  )
}
