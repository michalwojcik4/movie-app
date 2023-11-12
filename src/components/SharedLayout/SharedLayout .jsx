import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Nav } from 'components/Nav/Nav';
import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <>
      <Nav />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
