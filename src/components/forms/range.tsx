import { useState } from 'react'
import { formatMoney } from '../../utils/formatMoney'

interface RangeProps {}

export const Range: React.FC<RangeProps> = (props) => {
  const max = 5000000
  const [value, setValue] = useState(max / 2 + '')
  return (
    <div className="relative pt-1">
      <label htmlFor="customRange1" className="form-label">
        {formatMoney(value)}
      </label>
      <div className="bg-red flex justify-center p-2 ">
        <input
          value={value}
          type="range"
          onChange={(e) => setValue(e.target.value)}
          step={50000}
          min={100000}
          max={max}
          className="appearance-none w-full h-0.5 bg-gray rounded outline-none slider-thumb"
        />
      </div>
    </div>
  )
}
