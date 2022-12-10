import FormContainer from '../../components/FormContainer';
import Loader from '../../components/Loader';
import { Link, useNavigate } from 'react-router-dom';
import Input, { InputType } from '../../components/Input';
import Buttons, { ButtonType } from '../../components/Buttons';
import { useAppDispatch } from '../../redux/hooks';
import { useAppSelector } from '../../redux/hooks';
import { setSignInMail, setSignInUser } from '../../redux/Sign/signInSlice';
import { setSignInPassword } from '../../redux/Sign/signInSlice';
import styles from './SignIn.module.scss';

const SignIn: React.FC = () => {
  const email = useAppSelector((state) => state.signInSlice.signInMail);
  const password = useAppSelector((state) => state.signInSlice.signInPassword);
  const { status } = useAppSelector((state) => state.signInSlice);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  if (status === 'pending') {
    return <Loader />;
  }
  console.log(status);
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
            dispatch(
              setSignInUser({
                data: { password, email },
                callback: () => {navigate('/')},
              })
            );
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
