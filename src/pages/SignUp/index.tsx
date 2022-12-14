import FormContainer from '../../components/FormContainer';
import Input, { InputType } from '../../components/Input';
import Buttons, { ButtonType } from '../../components/Buttons';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { registerUser, setSignUpMail } from '../../redux/Sign/signUpSlice';
import { setSignUpName } from '../../redux/Sign/signUpSlice';
import { setSignUpPassword } from '../../redux/Sign/signUpSlice';
import { setSignUpPasswordConfirm } from '../../redux/Sign/signUpSlice';

import styles from './SignUp.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Loader from '../../components/Loader';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const username = useAppSelector((state) => state.formSlice.signUpName);
  const email = useAppSelector((state) => state.formSlice.signUpMail);
  const password = useAppSelector((state) => state.formSlice.signUpPassword);
  const { status } = useAppSelector((state) => state.formSlice);

  if (status === 'pending') {
    return <Loader />;
  }

  return (
    <FormContainer title="Sign Up">
      <>
        <div className={styles.input}>
          <Input
            placeholder="Your name"
            title="Name"
            type={InputType.Default}
            className={InputType.Default}
            onChange={(e) => dispatch(setSignUpName(e.target.value))}
          />

          <Input
            placeholder="Your email"
            title="Email"
            type={InputType.Default}
            className={InputType.Default}
            onChange={(e) => dispatch(setSignUpMail(e.target.value))}
          />
          <Input
            placeholder="Your password"
            title="Password"
            type={InputType.Default}
            className={InputType.Default}
            onChange={(e) => dispatch(setSignUpPassword(e.target.value))}
          />
          <Input
            placeholder="Confirm password"
            title="Confirm password"
            type={InputType.Default}
            className={InputType.Default}
            onChange={(e) => dispatch(setSignUpPasswordConfirm(e.target.value))}
          />
        </div>
        <Buttons
          type={ButtonType.Primary}
          title={'Sign Up'}
          className={styles.btn}
          onClick={() => {
            dispatch(
              registerUser({
                data: { username, email, password },
                callback: () =>
                  navigate('/registrationConfirmation', { state: email }),
              })
            );
          }}
        />
        <div className={styles.desc}>
          Don???t have an account?{' '}
          <Link to="../signIn">
            <span className={styles.span}>Sign In</span>
          </Link>
        </div>
      </>
    </FormContainer>
  );
};

export default SignUp;
