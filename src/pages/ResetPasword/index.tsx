import FormContainer from '../../components/FormContainer';
import Input, { InputType } from '../../components/Input';
import Buttons, { ButtonType } from '../../components/Buttons';
import styles from './ResetPasword.module.scss';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  resetPasswordInUser,
  setStatusResetPassword,
} from '../../redux/Sign/signInSlice';
import { useNavigate } from 'react-router-dom';

const ResetPasword: React.FC = () => {
  const [valueInput, setValueInput] = useState('');
  const { statusResetPassword } = useAppSelector((state) => state.signInSlice);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();


  if (statusResetPassword === 'pending') {
    return (
      <div className={styles.ldsRoller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
  return (
    <FormContainer title="Reset password">
      <div>
        {statusResetPassword === 'fullfiled' ? (
          <div>
            {`You will receive an email ${valueInput} with a link to reset your
          password!`}
          </div>
        ) : null}
        {statusResetPassword !== 'fullfiled' ? (
          <div className={styles.input}>
            <Input
              placeholder="Your email"
              title="Email"
              type={InputType.Default}
              className={InputType.Default}
              onChange={(e) => setValueInput(e.target.value)}
            />
          </div>
        ) : null}
        {statusResetPassword === 'fullfiled' ? (
          <Buttons
            type={ButtonType.Primary}
            title={'Go to home'}
            className={styles.btn}
            onClick={() => navigate('/')}
          />
        ) : (
          <Buttons
            type={ButtonType.Primary}
            title={'Reset'}
            className={styles.btn}
            onClick={() => {
              setValueInput('');
              dispatch(setStatusResetPassword(''));
              dispatch(resetPasswordInUser({ email: valueInput }));
              
            }}
          />
        )}
      </div>
    </FormContainer>
  );
};

export default ResetPasword;
