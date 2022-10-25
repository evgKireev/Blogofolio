import FormContainer from '../../components/FormContainer';
import Input, { InputType } from '../../components/Input';
import Buttons, { ButtonType } from '../../components/Buttons';

import { useAppDispatch } from '../../redux/hooks';
import { useAppSelector } from '../../redux/hooks';
import { setSignUpMail } from '../../redux/Sign/formSlice';
import { setSignUpName } from '../../redux/Sign/formSlice';
import { setSignUpPassword } from '../../redux/Sign/formSlice';
import { setSignUpPasswordConfirm } from '../../redux/Sign/formSlice';

import styles from './SignUp.module.scss';

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
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
            className={styles.input}
            onChange={(e) => dispatch(setSignUpPassword(e.target.value))}
          />
          <Input
            placeholder="Confirm password"
            title="Confirm password"
            type={InputType.Default}
            className={styles.input}
            onChange={(e) => dispatch(setSignUpPasswordConfirm(e.target.value))}
          />
        </div>
        <Buttons
          type={ButtonType.Primary}
          title={'Sign Up'}
          className={'primary'}
        />
        <div className={styles.desc}>
          Don’t have an account? <span className={styles.span}>Sign In</span>
        </div>
      </>
    </FormContainer>
  );
};

export default SignUp;
