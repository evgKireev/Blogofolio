import FormContainer from '../../components/FormContainer';
import Input, { InputType } from '../../components/Input';
import Buttons, { ButtonType } from '../../components/Buttons';

import styles from './NewPassword.module.scss';
import { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { activatePasswordInUser } from '../../redux/Sign/signInSlice';
import { useNavigate, useParams } from 'react-router-dom';

const NewPasword: React.FC = () => {
  const [valuePas, setValuePas] = useState('');
  const [valuePasConf, setValuePasConf] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { uid } = useParams();
  const { token } = useParams();

  

  return (
    <FormContainer title="Password">
      <>
        <div className={styles.input}>
          <Input
            placeholder="Your password"
            title="Your password"
            type={InputType.Default}
            className={styles.input}
            onChange={(e) => setValuePas(e.target.value)}
          />
          <Input
            placeholder="Confirm password"
            title="Confirm your password"
            type={InputType.Default}
            className={InputType.Default}
            onChange={(e) => setValuePasConf(e.target.value)}
          />
        </div>
        <Buttons
          type={ButtonType.Primary}
          title={'Set password'}
          className={styles.btn}
          onClick={() =>
            dispatch(
              activatePasswordInUser({
                data: { uid, token, new_password: valuePas },
                callback: () => navigate('/signIn'),
              })
            )
          }
        />
      </>
    </FormContainer>
  );
};

export default NewPasword;
