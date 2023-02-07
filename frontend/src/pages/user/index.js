import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleUserRequest } from '../../store/actions/home';
import Loader from '../../components/Loader';

function Index() {
  const dispatch = useDispatch();
  const params = useParams();

  const { user, requestStatus } = useSelector((store) => store.user);

  useEffect(() => {
    (async () => {
      await dispatch(getSingleUserRequest(params.id));
    })();
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
      <div className="user_data">
        <p>Name: </p>
        <p>{user.name}</p>
      </div>
      <div className="user_data">
        <p>Surname: </p>
        <p>{user.sur_name}</p>
      </div>
      <div className="user_data">
        <p>Phone: </p>
        <p>{user.phone}</p>
      </div>
      <div className="user_data">
        <p>Email: </p>
        <p>{user.email}</p>
      </div>
      <div className="user_data">
        <p>Type: </p>
        <p>{user.type}</p>
      </div>
      <div className="user_data">
        <p>Comment: </p>
        <p>{user.comment}</p>
      </div>
    </div>
  );
}

export default Index;
