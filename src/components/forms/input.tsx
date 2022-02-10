interface CustomInputProps {
  placeholder?: string;
  type?: string;
  name: string;
}

export const Input: React.FC<CustomInputProps> = (props) => (
 <input
    id={props.name}
    type={props.type || 'text'}
    name={props.name}
    placeholder={props.placeholder}
    className="w-full my-2 p-2.5 text-md border-gray-400 border rounded"
  />
)
