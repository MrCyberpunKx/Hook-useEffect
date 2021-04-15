import React, { useState } from 'react';

import EfectExample from './EffectExample';

function App() {
  const [visible, setVisible] = useState(true);

  setTimeout(() => {
    setVisible(false);
  }, 5000);

  return visible && <EfectExample />;
}

export default App;
