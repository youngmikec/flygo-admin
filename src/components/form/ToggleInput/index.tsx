import { FC } from "react";

type Props = {
  name: string;
  label: string;
  value: string;
  onChange: (e: any) => void;
  isChecked: boolean,
}

const ToggleInput: FC<Props> = ({
  name,
  value,
  onChange,
  isChecked,
  label
}) => {
  return (
    <>
      <div>
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" name={name} value={value} onChange={onChange} className="sr-only peer" checked={isChecked} />
          <div className="relative w-9 h-5 bg-textBlack rounded-full peer peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-textBlack after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</span>
        </label>
      </div>
    </>
  )
}

export default ToggleInput;