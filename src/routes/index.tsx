import React from 'react';
import { Routes, Route } from 'react-router-dom';

import loadable from '@loadable/component';

const TopPage = loadable(() => import('../pages/TopPage/index')); //Add Loading
const ProductDetail = loadable(() => import('../pages/ProductDetail/index'));

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="/:id" element={<ProductDetail />} />
      <Route path="/*" element={'!! 404 NOT FOUND !!'} />
    </Routes>
  );
}

export default AppRoutes;
