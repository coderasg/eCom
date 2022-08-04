import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import ProductListItem from '../index';

describe('(Component) ProductListItem', () => {
  const defaultProps = {
    data: {
      id: 1,
      name: 'Light pink shoes',
      description: 'Pre-owned,',
      like_count: 91,
      comment_count: 59,
      price: 51,
      is_sold_out: false,
      shipping_fee: '送料込み',
      image: 'images/image_1.png',
      category_id: 2,
    },
  };
  test('should pass snapshot test', () => {
    const wrapper = renderer.create(<BrowserRouter><ProductListItem {...defaultProps} /></BrowserRouter>);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
