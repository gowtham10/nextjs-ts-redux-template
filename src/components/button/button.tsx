import React from 'react';
import styles from '@/components/button/button.module.css';
import ButtonProps from '@/components/button/button.interface';

const Button = (props: ButtonProps) => {
  const { buttonName, clickHandler = () => {} } = props;

  return (
    <button className={`${styles.button} ${styles.buttonPrimary}`} onClick={clickHandler}>
      {buttonName}
    </button>
  );
};

export default Button;
