import { FC } from 'react';
import InputField from '../../../components/form/InputField';
import SelectField from '../../../components/form/SelectField';
import ToggleInput from '../../../components/form/ToggleInput';
import AppButton from '../../../components/app/AppButton';

const NewUserForm: FC = () => {
  return (
    <>
      <div className="w-full p-4">
        <header className="mb-4">
          <h1 className="text-textBlack text-xl font-bold lato-bold">Add new Customer</h1>
          <p className="text-textBlack">Create new user with details</p>
        </header>

        <form>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div>
              <InputField 
                name='firstName'
                label='First Name'
                type='text'
                placeholder='Enter first name'
                value={''}
                isError={false}
                errMsg=''
                onChange={(e) => console.log(e)}
              />
            </div>
            <div>
              <InputField 
                name='lastName'
                type='text'
                label='Last Name'
                placeholder='Enter last name'
                value={''}
                isError={false}
                errMsg=''
                onChange={(e) => console.log(e)}
              />
            </div>
            <div>
              <InputField 
                name='email'
                type='email'
                placeholder='Enter email'
                value={''}
                isError={false}
                errMsg=''
                onChange={(e) => console.log(e)}
              />
            </div>
            <div>
              <InputField 
                name='phoneNumber'
                type='text'
                placeholder='Phone Number'
                value={''}
                isError={false}
                errMsg=''
                onChange={(e) => console.log(e)}
              />
            </div>
            <div>
              <SelectField 
                name='country'
                value={''}
                label='Country'
                isError={false}
                errMsg=''
                onChange={(e) => console.log(e)}
                selectOptions={[
                  {label: 'Nigeria', value: 'Nigeria'},
                  {label: 'Ghana', value: 'Ghana'},
                  {label: 'South Africa', value: 'South Africa'},
                  {label: 'United Kingdom', value: 'United Kingdom'},
                ]}
              />
            </div>
            <div>
              <SelectField 
                name='userType'
                value={''}
                label='User Type'
                isError={false}
                errMsg=''
                onChange={(e) => console.log(e)}
                selectOptions={[
                  {label: 'Customer', value: 'customer'},
                  {label: 'Supervisor', value: 'supervisor'},
                  {label: 'RM', value: 'RM'},
                  {label: 'Admin', value: 'Admin'},
                ]}
              />
            </div>

            <div>
              <InputField 
                name='coupon'
                type='text'
                label='Assign coupon code'
                placeholder='Add'
                value={''}
                isError={false}
                errMsg=''
                onChange={(e) => console.log(e)}
              />
            </div>
          </div>
          <div className="my-4">
            <ToggleInput 
              name="isAdmin"
              value=''
              isChecked={false}
              label="Switch user to admin"
              onChange={(e) => console.log(e)}
            />
          </div>

          <div className="mt-12">
            <AppButton 
              btnText='ADD'
              width='max'
              fill="fill"
              bgColor='blue'
              loading={false}
              disabled={false}
              onClick={() => console.log('Submitted')}
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default NewUserForm;