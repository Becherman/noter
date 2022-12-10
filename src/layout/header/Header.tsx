import {Button} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import {useOpenNewModalPage} from '../../hooks/use-open-page';
import styles from './Header.module.scss';

export const Header = () => {
  const openNewModalPage = useOpenNewModalPage();
  return (
    <div className={styles.Header}>
      <h1>Header</h1>
      <Button colorScheme="pink" variant="outline" leftIcon={<AddIcon />} onClick={openNewModalPage}>
        New Note
      </Button>
    </div>
  );
};
