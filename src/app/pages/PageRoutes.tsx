import React, { useState, useEffect, Suspense } from 'react';
import ArticleRoutes from './article/ArticleRoutes';
import HomeRoutes from './home/HomeRoutes';
import OrderRoutes from './order/OrderRoutes';

export default function PageRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeRoutes />
      <ArticleRoutes />
      <OrderRoutes />
    </Suspense>
  )
}
