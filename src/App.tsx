import React, { Suspense } from 'react';
import { FullParentSpinner } from './components/FullParentSpinner';
import FullViewWrapper from './components/wrappers/FullViewWrapper';

const App = () => {
  return (
    <FullViewWrapper>
      <Suspense fallback={<FullParentSpinner />}>{/* <Routes /> */}</Suspense>
    </FullViewWrapper>
  );
};

export default App;
