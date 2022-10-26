import FormContainer from '../../components/FormContainer';
import Input, { InputType } from '../../components/Input';
import Buttons, { ButtonType } from '../../components/Buttons';

import styles from './ResetPasword.module.scss';

const ResetPasword: React.FC = () => {
  return (
    <FormContainer title="Reset password">
      <>
        <div className={styles.input}>
          <Input
            placeholder="Your email"
            title="Email"
            type={InputType.Default}
            className={InputType.Default}
            onChange={(e) => {}}
          />
        </div>
        <Buttons
          type={ButtonType.Primary}
          title={'Reset'}
          className={styles.btn}
        />
      </>
    </FormContainer>
  );
};

export default ResetPasword;
