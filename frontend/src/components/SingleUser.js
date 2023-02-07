import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as RemoveIcon } from '../assets/images/remove_icon.svg';

function SingleUser({ userData, removeUser }) {
  const navigate = useNavigate();
  return (
    <div className="single__user__block">
      <div className="single__user__block__left__content">
        <p onClick={() => navigate(`/user/${userData.id}`)} className="user_name">{`${userData.name} ${userData.sur_name}`}</p>
      </div>

      <button onClick={() => removeUser(userData.id)} type="button" className="remove__user__btn">
        <RemoveIcon />
      </button>
    </div>
  );
}

SingleUser.propTypes = {
  userData: PropTypes.object.isRequired,
  removeUser: PropTypes.func.isRequired,
};

export default SingleUser;
