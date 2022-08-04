import React, {MouseEvent} from 'react';
import renderer from 'react-test-renderer';

import Button from '../index';

describe('(Component) Button', () => {
  const defaultProps = {
    className: 'className',
    onClick: (event: MouseEvent<HTMLButtonElement>) => {
      console.log('click', event);
    },
  };

  test('should pass snapshot test', () => {
    const wrapper = renderer.create(<Button {...defaultProps} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
