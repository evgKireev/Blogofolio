import FormContainer from '../../components/FormContainer';
import { Link, useNavigate } from 'react-router-dom';
import Input, { InputType } from '../../components/Input';
import Buttons, { ButtonType } from '../../components/Buttons';
import { useAppDispatch } from '../../redux/hooks';
import { useAppSelector } from '../../redux/hooks';
import {
  getUserMe,
  setSignInMail,
  signInUser,
} from '../../redux/Sign/signInSlice';
import { setSignInPassword } from '../../redux/Sign/signInSlice';
import styles from './SignIn.module.scss';
import { useEffect } from 'react';


const SignIn: React.FC = () => {
  const email = useAppSelector((state) => state.signInSlice.signInMail);
  const password = useAppSelector((state) => state.signInSlice.signInPassword);
  const { statusSignInUser } = useAppSelector(
    (state) => state.signInSlice
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (statusSignInUser === 'fulfilled') {
      navigate('/');
      dispatch(getUserMe());
    }
  }, [statusSignInUser]);

  if (statusSignInUser === 'pending') {
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
    <FormContainer title="Sign In">
      <>
        <div className={styles.input}>
          <Input
            placeholder="Your email"
            title="Email"
            type={InputType.Default}
            className={InputType.Default}
            onChange={(e) => dispatch(setSignInMail(e.target.value))}
          />
          <Input
            placeholder="Your password"
            title="Password"
            type={InputType.Default}
            className={styles.input}
            onChange={(e) => dispatch(setSignInPassword(e.target.value))}
          />
        </div>
        <div className={styles.question}>Forgot password?</div>
        <Buttons
          type={ButtonType.Primary}
          title={'Sign In'}
          className={styles.btn}
          onClick={() => {
            dispatch(signInUser({ password, email }));
          }}
        />
        <div className={styles.desc}>
          Don’t have an account?{' '}
          <Link to="../signUp">
            <span className={styles.span}>Sign Up</span>
          </Link>
        </div>
      </>
    </FormContainer>
  );
};

export default SignIn;
