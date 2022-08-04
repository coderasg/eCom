import React, {  ChangeEvent, useState } from 'react';
import  Input from './../../../../components/Input';

import Menu from './../../../../components/Icons/Menu/index.svg';
import Notification from './../../../../components/Icons/Notification/index.svg';
import Tick from './../../../../components/Icons/Tick/index.svg';
import { $iconDefaultColor } from './../../../../components/Icons/IconColors';

import styles from './topPageHeader.module.scss';

type Props = {
  searchStr: string;
  handleOnSearchChange: (value: string) => void;
};

function TopPageHeader(props: Props) {
  const { handleOnSearchChange, searchStr } = props;
  const [ state, setState] = useState(searchStr);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
    handleOnSearchChange(event.target.value);
  };

  return (
    <div data-testid="TopPageHeader-wrapper" className={styles.topPageHeader}>
      <section>
        <Menu width={25} height={25} fill={$iconDefaultColor} />
        <Input
          name="searchProduct"
          placeholder="Search product"
          className={styles.input}
          value={state}
          onChange={handleOnChange}
        />
      </section>
      <section className={styles.flexLeft}>
        <Notification width={25} height={25} fill={$iconDefaultColor} />
        <Tick width={25} height={20} fill={$iconDefaultColor} />
      </section>
    </div>
  );
}

export default TopPageHeader;
