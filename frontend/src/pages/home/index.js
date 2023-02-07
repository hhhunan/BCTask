import React, { useCallback, useEffect, useState } from 'react';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { ReactComponent as UsersIcon } from '../../assets/images/users.svg';
import SingleUser from '../../components/SingleUser';
import ModalComponent from '../../components/ModalComponent';
import { deleteUserRequest, getUsersListRequest, getUserTypesRequest } from '../../store/actions/home';
import Loader from '../../components/Loader';

function Index() {
  const dispatch = useDispatch();
  const {
    users, types, requestStatus,
  } = useSelector((store) => store.home);

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    (async () => {
      await dispatch(getUsersListRequest());
      if (_.isEmpty(types)) await dispatch(getUserTypesRequest());
    })();
  }, []);

  const removeUser = useCallback(async (id) => {
    await dispatch(deleteUserRequest(id));
    await dispatch(getUsersListRequest());
    toast.success('You are successfully deleted the user.');
  }, []);

  if (requestStatus === 'request') {
    return (
      <div className="loader__block">
        <Loader borderColor="#4e6278" size={60} />
      </div>
    );
  }

  return (
    <div className="wrapper">
      <ModalComponent onClose={() => setOpenModal(false)} openModal={openModal} />

      <div className="header__block">
        <button onClick={() => setOpenModal((prev) => !prev)} type="button" className="create__user__btn">
          <UsersIcon />
          <p>Create Visit</p>
        </button>
      </div>

      {
        users?.data?.length ? users?.data?.map((user) => (
          <SingleUser removeUser={removeUser} userData={user} key={user.id} />
        )) : <p className="no__users__text">No users...</p>
      }

    </div>
  );
}

export default Index;
