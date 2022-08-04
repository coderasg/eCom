import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import useSWR from 'swr';

import items from './../../../../../__mockData__/items';

import ProductList from '../index';

jest.mock('swr');

(useSWR as jest.Mock).mockReturnValue({
  data: {
    data: [items.data[0], items.data[1]],
  },
});

describe('(Component) ProductList', () => {
  const defaultProps = {
    searchStr: '',
    selectedId: 2,
  };

  test('should pass snapshot test', () => {
    const wrapper = renderer.create(<BrowserRouter><ProductList {...defaultProps} /></BrowserRouter>);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
