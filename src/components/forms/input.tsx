import React from "react"
import clsxm from "../../lib/clsxm";

enum InputVariant {
  'primary',
  'outline',
  'ghost',
  'light',
  'dark',
}

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  placeholder?: string,
  type?: string;
  name: string;
  variant?: keyof typeof InputVariant
  disabled?: boolean
  isLoading?: boolean
  leftIcon?: React.ReactNode | string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ ...props }, ref) => {
  const disabled = props.isLoading || props.disabled;
  return (
    <div className="flex">
      {props.leftIcon &&
        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          {props.leftIcon}
        </span>
      }
      <input
        ref={ref}
        id={props.name}
        type={props.type || 'text'}
        name={props.name}
        placeholder={props.placeholder}
        disabled={disabled}
        //  className="w-full my-2 p-2.5 text-md border-gray-400 border rounded"
        className={clsxm("bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          [props.variant === 'primary' && [
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ], props.variant === 'outline' && [
            "block w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none rounded-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          ]]
        )}
      />
    </div>

  )
})