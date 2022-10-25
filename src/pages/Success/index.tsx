import FormContainer from '../../components/FormContainer';
import Buttons, { ButtonType } from '../../components/Buttons';

import styles from './Success.module.scss';

const Success: React.FC = () => {
  return (
    <FormContainer title="Success">
      <>
        <div className={styles.text}>
          Email confirmed.
          <br /> Your registration is now completed
        </div>
        <Buttons
          type={ButtonType.Primary}
          title={'Go to home'}
          className={styles.btn}
        />
      </>
    </FormContainer>
  );
};

export default Success;
