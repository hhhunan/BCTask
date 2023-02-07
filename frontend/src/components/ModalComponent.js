import React, { useCallback, useState } from 'react';
import Modal from 'react-modal';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import InputComponent from './form/InputComponent';
import ButtonComponent from './form/ButtonComponent';
import SelectComponent from './form/SelectComponent';
import { createUserRequest, getUsersListRequest } from '../store/actions/home';
import CustomTextarea from './CustomTextarea';
import Utils from '../Utils';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    width: '60%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: '#0000008a',
  },
};

function ModalComponent({ openModal, onClose }) {
  const dispatch = useDispatch();

  const types = useSelector((store) => store.home.types);

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    sur_name: '',
    email: '',
    phone: '',
  });
  const [reqData, setReqData] = useState({
    name: '',
    sur_name: '',
    email: '',
    phone: '',
    type: '1',
    is_payed: 0,
    comment: '',
  });

  const handleChange = useCallback((value, type) => {
    setReqData((prev) => ({
      ...prev,
      [type]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [type]: '',
    }));
  }, []);

  const validationData = () => {
    let valid = true;
    const newError = { ...errors };
    if (!reqData.name.trim()) {
      newError.name = 'This field is required';
      valid = false;
    }
    if (!reqData.sur_name.trim()) {
      newError.sur_name = 'This field is required';
      valid = false;
    }
    if (!reqData.phone.trim()) {
      newError.phone = 'This field is required';
      valid = false;
    }
    if (!reqData.email.trim()) {
      newError.email = 'This field is required';
      valid = false;
    }

    if (!Utils.isEmail(reqData.email) && reqData.email.trim()) {
      newError.email = 'This email not valid';
      valid = false;
    }

    if (!valid) {
      setErrors(newError);
      return false;
    }
    return true;
  };

  const submitUser = async (e) => {
    e.preventDefault();
    const isValid = validationData();
    if (isValid) {
      setLoading(true);
      await dispatch(createUserRequest(reqData));
      await dispatch(getUsersListRequest());
      setReqData({
        name: '',
        sur_name: '',
        email: '',
        phone: '',
        type: '1',
        is_payed: 0,
        comment: '',
      });
      setLoading(false);
      onClose();
      toast.success('You are successfully created visit.');
    }
  };

  return (
    <Modal
      isOpen={openModal}
      onRequestClose={() => {
        onClose();
        setErrors({
          name: '',
          sur_name: '',
          email: '',
          phone: '',
        });
      }}
      style={customStyles}
      ariaHideApp={false}
    >
      <div className="modal__content">
        <p className="modal__title">Create User Form</p>

        <form onSubmit={submitUser} className="inputs__form">
          <div className="flex__block">
            <InputComponent
              onChange={(val) => handleChange(val, 'name')}
              label="First name"
              value={reqData.name}
              error={errors.name}
            />
            <InputComponent
              onChange={(val) => handleChange(val, 'sur_name')}
              label="Last name"
              value={reqData.sur_name}
              error={errors.sur_name}
            />
          </div>

          <div className="flex__block">
            <InputComponent
              onChange={(val) => handleChange(val, 'email')}
              label="Email"
              value={reqData.email}
              error={errors.email}
            />
            <InputComponent
              onChange={(val) => handleChange(val, 'phone')}
              label="Phone"
              onKeyPress={Utils.keyPressPhoneNumber}
              onPaste={(e) => Utils.keyPressPhoneNumber(e, true)}
              value={reqData.phone}
              error={errors.phone}
            />
          </div>

          <div className="flex__block">
            <SelectComponent
              data={_.map(types, (x, y) => ({ id: y, title: x }))}
              handleChange={(val) => handleChange(val, 'type')}
              label="Select type"
            />

            <div className="payed_checkbox_block">
              <label>
                <input
                  checked={!!reqData.is_payed}
                  onChange={({ target }) => handleChange(Number(target.checked), 'is_payed')}
                  className="payed__checkbox"
                  type="checkbox"
                />
                Is Payed
              </label>
            </div>
          </div>

          <div className="textarea_block">
            <CustomTextarea
              handleChange={(val) => handleChange(val, 'comment')}
              value={reqData.comment}
              placeholder="Comment"
            />
          </div>

          <div className="footer__block">
            <ButtonComponent type="submit" text="Create User" loading={loading} />
          </div>
        </form>
      </div>
    </Modal>
  );
}

ModalComponent.propTypes = {
  openModal: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalComponent;
