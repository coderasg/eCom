import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, waitFor, within } from '@testing-library/react';

import useProductList from './../../../hooks/fetchAPIs/useProductList';
import useCategories from './../../../hooks/fetchAPIs/useCategories';

import userEvent from '@testing-library/user-event';

import items from './../../../__mockData__/items';
import categories from './../../../__mockData__/categories';

import TopPage from '../index';

jest.mock('./../../../hooks/fetchAPIs/useProductList');
jest.mock('./../../../hooks/fetchAPIs/useCategories');

(useCategories as jest.Mock).mockImplementation(() => {
  return {
    data: categories.data
  };
});

(useProductList as jest.Mock).mockImplementation((queryParam) => {
  const searchStr = queryParam.searchStr;
  const categoryId = queryParam.category;

  if (searchStr) {
    return  {
      data: [items.data[1]],
    };
  }

  if (categoryId) {
    return  {
      data: [],
    };
  }

  return {
    data:  items.data,
  };
});

describe('(RTL) TopPage Data Suite', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (useProductList as jest.Mock).mockClear();
    (useCategories as jest.Mock).mockClear();
  });
  
  test('should load top page with data', async () => {
    render(
      <BrowserRouter>
        <TopPage />
      </BrowserRouter>
    );

    await waitFor(async () => {
      const allProducts = await screen.findAllByTestId(
        'ProductListItem-wrapper'
      );
      expect(allProducts.length).toBe(2);

      //Product Name
      expect(within(allProducts[0]).getByText('Light pink shoes')).toBeTruthy();

      //Product Like Count
      expect(within(allProducts[0]).getByText('91')).toBeTruthy();

      //Product Price
      expect(within(allProducts[0]).getByText('Ұ51')).toBeTruthy();
    });
  });

  test('should search product with name', async () => {
    render(
      <BrowserRouter>
        <TopPage />
      </BrowserRouter>
    );
    
    expect(screen.getByTestId('searchInput')).toBeTruthy();

    await waitFor(async () => {
      expect(await screen.findByText('Light pink shoes')).toBeTruthy();
    });

    userEvent.type(screen.getByTestId('searchInput'), 'Vegan');

    await waitFor(async () => {
      expect(await screen.findByDisplayValue('Vegan')).toBeTruthy();
    });

    await waitFor(async () => {
      const products = await screen.queryAllByText('Light pink shoes');
      expect(products.length).toBe(0);
    });

    const searchProducts = await screen.findAllByTestId(
      'ProductListItem-wrapper'
    );

    expect(searchProducts.length).toBe(1);
  });

  test('should filter product with category', async () => {
    render(
      <BrowserRouter>
        <TopPage />
      </BrowserRouter>
    );

    await waitFor(async () => {
      expect(await screen.findByTestId('ProductCategories-wrapper')).toBeTruthy();
    });

    userEvent.click((await screen.findAllByTestId('Tab-wrapper'))[0]);

    await waitFor(async () => {
      const products = await screen.queryAllByText('Light pink shoes');
      expect(products.length).toBe(0);
    });

    await waitFor(async () => {
      const filterProducts = await screen.queryAllByText('Sorry No Data Found');
      expect(filterProducts).toBeTruthy();
    });
  });
});

describe('(RTL) TopPage Fetching Data', () => {
  afterEach(() => {
    jest.clearAllMocks();
    (useProductList as jest.Mock).mockClear();
    (useCategories as jest.Mock).mockClear();
  });

  beforeEach(() => {
    (useCategories as jest.Mock).mockReturnValueOnce({data: undefined, error: 'Internal Server Error'});
    (useProductList as jest.Mock).mockReturnValueOnce({data: undefined, error: 'Internal Server Error'});
  });
  
  test('Should See the Display loading Message When Data For Categories and Product list is fetching', () => {
    render(<BrowserRouter><TopPage /></BrowserRouter>);

    expect(screen.getByTestId('ProductList-Error')).toBeTruthy();
    expect(screen.getByTestId('ProductCategories-Error')).toBeTruthy();
  });
});

describe('(RTL) TopPage Error Suite', () => {
  afterEach(() => {
    jest.clearAllMocks();
    (useProductList as jest.Mock).mockClear();
    (useCategories as jest.Mock).mockClear();
  });

  beforeEach(() => {
    (useCategories as jest.Mock).mockReturnValueOnce({data: undefined, error: ''});
    (useProductList as jest.Mock).mockReturnValueOnce({data: undefined, error: '' });
  });
  
  test('Should See the Error Message When Data For Categories and Product list not loaded', () => {
    render(<BrowserRouter><TopPage /></BrowserRouter>);

    expect(screen.getByTestId('ProductList-Loading')).toBeTruthy();
    expect(screen.getByTestId('ProductCategories-Loading')).toBeTruthy();
  });
});



