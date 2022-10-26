import FormContainer from '../../components/FormContainer';
import Input, { InputType } from '../../components/Input';
import Buttons, { ButtonType } from '../../components/Buttons';

import styles from './NewPassword.module.scss';

const NewPasword: React.FC = () => {
  return (
    <FormContainer title="Password">
      <>
        <div className={styles.input}>
          <Input
            placeholder="Your password"
            title="Email"
            type={InputType.Default}
            className={styles.input}
            onChange={(e) => {}}
          />
           <Input
            placeholder="Confirm password"
            title="Confirm your password"
            type={InputType.Default}
            className={InputType.Default}
            onChange={(e) => {}}
          />
        </div>
        <Buttons
          type={ButtonType.Primary}
          title={'Set password'}
          className={styles.btn}
        />
      </>
    </FormContainer>
  );
};

export default NewPasword;
