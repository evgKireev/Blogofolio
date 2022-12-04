import FormContainer from '../../components/FormContainer';
import Buttons, { ButtonType } from '../../components/Buttons';

import { useAppDispatch } from '../../redux/hooks';

import styles from './RegistrationConfirmation.module.scss';
import { Link, useLocation } from 'react-router-dom';

const RegistrationConfirmation: React.FC = () => {
  const location = useLocation();
  const mail = location;
  return (
    <FormContainer title="Registration Confirmation">
      <>
        <div className={styles.text}>
          Please activate your account with the activation link in the email{' '}
          <span className={styles.span}>{mail.state}</span>.<br />
          Please, check your email
        </div>
        <Link to={'/'}>
        <Buttons
          type={ButtonType.Primary}
          title={'Go to home'}
          className={styles.btn}
        />
        </Link>
      </>
    </FormContainer>
  );
};

export default RegistrationConfirmation;
