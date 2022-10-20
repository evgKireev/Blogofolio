import styles from './Fotter.module.scss';
import '../../scss/app.scss';

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <p>©2022 Blogfolio</p>
      <p>All rights reserved</p>
    </div>
  );
};

export default Footer;
