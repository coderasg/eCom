import React from 'react';
import renderer from 'react-test-renderer';

import Tabs from '../index';

describe('(Component) Tabs', () => {
  test('should pass snapshot test', () => {
    const wrapper = renderer.create(<Tabs>{'aesr'}</Tabs>);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
