import React, { ChangeEvent } from 'react';

type Props = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
  name: string;
  value: string;
};

function Input(props: Props) {
  const { onChange, name,value,  className, placeholder } = props;

  return (
    <div data-testid='Input-wrapper' className={className}>
      <input
        data-testid={'searchInput'}
        value={value}
        type='text'
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
