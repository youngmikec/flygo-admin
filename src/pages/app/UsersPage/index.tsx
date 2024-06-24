import { useState, FC } from 'react';
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";

import DashboardLayout from "../../../components/Layout/DashboardLayout"
import AppButton from "../../../components/app/AppButton";
import BasicTable from "../../../components/Table/BasicTable";
import AppModalComp from "../../../components/app/AppModal";
import NewUserForm from "./NewUserForm";
import DeleteComp from "../../../components/app/DeleteModal";
import { OpenAppModal } from '../../../store/modal';


const UsersPage: FC = () => {
  const tabs = ['All Customers', 'Active', 'Inactive'];
  const dispatch = useDispatch();
  const [modalMode, setModalMode] = useState<string>('');
  const [deleting, setDeleting] = useState<boolean>(false);
  const handleDeleteRecord = () => console.log('Deleting');

  const openModal = () => {
    setModalMode('create');
    dispatch(OpenAppModal())
  };
  return (
    <>
      <DashboardLayout>
        <div className="w-full pb-8">
          <div className="flex justify-between mb-8">
            <div className="mb-4">
              <h1 className="text-textBlack text-2xl font-bold lato-bold mb-4">Manage your Customers</h1>
              <p className="text-textBlack"> Over 100 registered customers</p>
            </div>

            <div className="flex justify-start gap-4">
              <AppButton 
                width="max"
                fill="outline"
                btnText="Export"
                bgColor="gray"
                type="submit"
              />
              <AppButton 
                width="max"
                fill="fill"
                btnIcon={<FaPlus size={14} className="text-white" />}
                iconPosition="left"
                btnText="Add New"
                bgColor="blue"
                type="submit"
                onClick={openModal}
              />
            </div>
          </div>

          <BasicTable tableTab={true} tableTabs={tabs}/>
        </div>
      </DashboardLayout>

      <AppModalComp width="md">
        {
          modalMode === 'create' && <NewUserForm />
        }
        {/* {
          modalMode === 'delete' && 
          <DeleteComp 
            id={'fhsljfhsl'} 
            action={handleDeleteRecord} 
            deleting={deleting} 
            entity={'User'}
          />
        } */}
      </AppModalComp>
    </>
  )
}

export default UsersPage
