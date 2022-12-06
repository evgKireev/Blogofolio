import FormContainer from '../../components/FormContainer';
import Buttons, { ButtonType } from '../../components/Buttons';

import styles from './Success.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { activatNewUser } from '../../redux/Sign/signUpSlice';
import { useEffect } from 'react';

const Success: React.FC = () => {
  const dispatch = useAppDispatch();
  const { uid, token } = useParams();
  const navigate = useNavigate();
  const { statusActivatNewUser } = useAppSelector((state) => state.formSlice);

  useEffect(() => {
    if (statusActivatNewUser === 'fulfilled') {
      navigate('/signIn');
    }
  }, [statusActivatNewUser]);

  if (statusActivatNewUser === 'pending') {
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
    <FormContainer title="Success">
      <>
        <div className={styles.text}>
          Your need to confirm your email
          <br />
        </div>
        <Buttons
          type={ButtonType.Primary}
          title={'Please Confirm'}
          className={styles.btn}
          onClick={() =>
            dispatch(
              activatNewUser({
                uid,
                token,
              })
            )
          }
        />
      </>
    </FormContainer>
  );
};

export default Success;
