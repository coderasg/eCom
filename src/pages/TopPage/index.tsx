import React, {  useCallback, useState } from 'react';
import {   useSearchParams } from 'react-router-dom';

/**
 * Common Commponent
 */
import Header from '../../components/Header';

/**
 *  Common Hooks
 */
import useDebounce from './../../hooks/utils/useDebounce';
import objectToQueryString from './../../utils/objectToQueryString';

/**
 *  Page Specific Components
 */
import TopPageHeader from './components/TopPageHeader';
import ProductList from './components/ProductList';
import ProductCategories  from './components/ProductCategories';

/**
 * Page Specific CSS
 */
import styles from './topPage.module.scss';

function TopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category') ? Number(searchParams.get('category')) : null;

  const [searchStr, setSearchStr] = useState<string>(searchParams.get('searchStr') || '' );
  const [selectedId, setSelectedId] = useState<number|null>(category);


  const onSearch = useCallback((str: string[]) => {
    setSearchStr(str[0]);

    setSearchParams(objectToQueryString({
      searchStr: str[0],
      category: selectedId
    }));
  }, []);

  const debounce = useDebounce(onSearch, 400);

  const handleOnSearchChange = useCallback(
    (value: string) => {
      debounce(value);
    },
    []
  );

  const handleTabClick = useCallback((id: number) => {
    setSelectedId(id);
    setSearchParams(objectToQueryString({
      searchStr: searchStr,
      category: id
    }));
  }, []);

  return (
    <div data-testid="TopPage-wrapper" className={styles.topPage}>
      <Header>
        <TopPageHeader handleOnSearchChange={handleOnSearchChange}  searchStr={searchStr} />
      </Header>
      <section className={styles.pageContent}>
        <ProductCategories handleTabClick={handleTabClick} selectedId={selectedId} />
        <ProductList searchStr={searchStr}  selectedId={selectedId} />
      </section>
    </div>
  );
}

export default TopPage;
