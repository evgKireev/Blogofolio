import FormContainer from '../../components/FormContainer';
import Buttons, { ButtonType } from '../../components/Buttons';

import styles from './Success.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { activeNewUser } from '../../redux/Sign/signUpSlice';
import Loader from '../../components/Loader';

const Success: React.FC = () => {
  const dispatch = useAppDispatch();
  const { uid, token } = useParams();
  const navigate = useNavigate();
  const { status } = useAppSelector((state) => state.formSlice);

  if (status === 'pending') {
    return <Loader />;
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
              activeNewUser({
                data: {
                  uid,
                  token,
                },
                callback: () => navigate('/signIn'),
              })
            )
          }
        />
      </>
    </FormContainer>
  );
};

export default Success;
