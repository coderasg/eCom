import React, { useCallback } from 'react';

import Button from './../../../../components/Button';

import  styles from './proceedToCheckout.module.scss';

type Props = {
  price: number;
  shippingFee: string;
}

function ProceedToCheckout(props: Props) {
  const { price, shippingFee } = props;

  const handleCheckoutClick = useCallback(() => {
    alert('Proceeding Checkout');
  }, []);

  return <div data-testid="ProceedToCheckout-wrapper" className={styles.proceedToCheckout}>
    <div><span className={styles.price}>{`Ұ${price}`}</span> <span className={styles.shippinFee}>{shippingFee}</span></div>
    <Button className={styles.button}  onClick={handleCheckoutClick}>{'Proceed To Checkout'}</Button>
  </div>;
}

export default ProceedToCheckout;
