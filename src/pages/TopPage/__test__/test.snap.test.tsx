import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import TopPage from './../index';

describe('(Component)(Snapshot) TopPage', () => {
  const defaultProps = {};
    
  test('should pass snapshot test', () => {
    const wrapper = renderer.create(<BrowserRouter><TopPage {...defaultProps} /></BrowserRouter>);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});