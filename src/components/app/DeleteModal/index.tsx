import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { CloseAppModal } from '../../../store/modal';

import deleteImg from '../../../assets/svg/delete.svg';
import AppButton from '../AppButton';

type Props = {
    id?: string,
    deleting: boolean,
    entity?: string | null
    action?: (id: string) => any
}

const DeleteComp: FC<Props> = ({ id, action, deleting, entity = null }) => {
    const dispatch = useDispatch();
    // close modal
    const closeModal = () => {
        dispatch(CloseAppModal());
    }

    const handleDelete = () => {
        const recordId: string = id ? id : '';
        return action && action(recordId);
    }

    return (
        <>
            <div className="p-6 my-8">
              <div className="bg-skyBlue p-6 min-h-[150px] rounded-lg">
                <div className="flex justify-center mb-4">
                  <img src={deleteImg} width="30px" height="30px" alt="delete" />
                </div>

                <div className="my-4">
                  <h1 className="text-textBlack text-xl text-center font-bold lato-bold">Are you sure you want to delete this { entity ? entity : 'record?'}?</h1>
                  <p className="text-textBlack text-center">This change will reflect on your list immediately</p>
                </div>
              </div>


                <div className="flex justify-center gap-4 mt-8">
                  <div>
                    <AppButton 
                      btnText='Cancel'
                      fill='fill'
                      width='max'
                      bgColor='blue'
                      disabled={true}
                      loading={true}
                      onClick={closeModal}
                    />
                  </div>
                  <div>
                    <AppButton 
                      btnText='Delete'
                      fill='outline'
                      width='max'
                      bgColor='gray'
                      disabled={true}
                      loading={true}
                      onClick={handleDelete}
                    />
                  </div>
                </div>
                
            </div>
        </>
    )
}

export default DeleteComp;