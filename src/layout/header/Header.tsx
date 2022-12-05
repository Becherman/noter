import { useOpenNewModalPage } from '../../hooks/use-open-page';
import styles from './Header.module.scss';

export const Header = () => {
  const openNewModalPage = useOpenNewModalPage();
  return (
    <div className={styles.Header}>
      <h1>Header</h1>
      <button onClick={openNewModalPage}>+</button>
    </div>
  )
}
