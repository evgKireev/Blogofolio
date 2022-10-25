import styles from './UserControl.module.scss';
type userNameType = {
  userName: string;
  onClick?: () => void;
};

const UserControl: React.FC<userNameType> = ({ userName, onClick }) => {
  return (
    <div className={styles.profailes}>
      <button className={styles.btn} type="submit">
        {userName[0]}
      </button>
      <span>{userName}</span>
    </div>
  );
};
export default UserControl;
