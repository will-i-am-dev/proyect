interface LabelProps {

  }

export const Label: React.FC<LabelProps> = (
  props
) => {
  return (
        <label className="text-sm text-darkBlue pb-4 mt-5 font-bold">{props.children}</label>
  )
}
