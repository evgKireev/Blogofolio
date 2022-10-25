import FormContainer from '../../components/FormContainer';
import { Link } from 'react-router-dom';
import Input, { InputType } from '../../components/Input';
import Buttons, { ButtonType } from '../../components/Buttons';

import { useAppDispatch } from '../../redux/hooks';
import { useAppSelector } from '../../redux/hooks';
import { setSignInMail } from '../../redux/Sign/formSlice';
import { setSignInPassword } from '../../redux/Sign/formSlice';

import styles from './SignIn.module.scss';

const SignIn: React.FC = () => {
  const signInMail = useAppSelector((state) => state.formSlice.signInMail);
  const signInPassword = useAppSelector(
    (state) => state.formSlice.signInPassword
  );
  const dispatch = useAppDispatch();
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
