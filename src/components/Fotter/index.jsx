import styles from './Fotter.module.scss';
import '../../scss/app.scss';

function Footer() {
  return (
    <div className={styles.footer}>
      <p>©2022 Blogfolio</p>
      <p>All rights reserved</p>
    </div>
  );
}

export default Footer;
