import { FC } from 'react';

type Props = {
  name: string;
  label: string;
  labelPosition?: "left" | "right";
  value: any;
  onChange: (e: any) => any;
}

const ValidatedCheckBox: FC<Props> = ({
  name, 
  label,
  labelPosition = 'right',
  value,
  onChange
}) => {
  return (
    <>
    <div className="w-full my-2 flex flex-row gap-4">
      {
        labelPosition === 'left' && (
          <div>
            <label 
            htmlFor={name}
            className="w-full lato-regular text-textBlack font-semibold text-sm"
          >{label}</label>
          </div>
        )
      }
      <div>
        <input 
          type="checkbox" 
          name={name} 
          id={name} 
          value={value}
          onChange={onChange}
          className={`focus:outline-none focus:ring-0 checked:bg-textBlack`}
        />
      </div>

      {
        labelPosition === 'right' && (
          <div>
            <label 
            htmlFor={name}
            className="w-full lato-regular text-textBlack font-semibold text-sm"
          >{label}</label>
          </div>
        )
      }
    </div>
    </>
  )
}

export default ValidatedCheckBox;