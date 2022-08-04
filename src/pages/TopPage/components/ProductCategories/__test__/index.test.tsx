import React from 'react';
import renderer from 'react-test-renderer';
import useSWR from 'swr';

import ProductCategories from '../index';

jest.mock('swr');

(useSWR as jest.Mock).mockReturnValue({
  data: {
    data: [
      {
        id: '1',
        name: 'インテリア',
      },
      {
        id: '2',
        name: 'レディース',
      },
      {
        id: '3',
        name: 'ベビー・キッズ',
      },
    ],
  },
});

describe('(Component) ProductCategories', () => {
  const defaultProps = {
    handleTabClick: (id: number) => {
      console.log('tab click', id);
    },
    selectedId: 1,
  };
  test('should pass snapshot test', () => {
    const wrapper = renderer.create(<ProductCategories {...defaultProps} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
