import { createContext, useState } from 'react';

const BackgroundContext = createContext();

const BackgroundProvider = ({ children }) => {
  const [background, setBackground] = useState(null);

  return (
    <BackgroundContext.Provider value={{ background, setBackground }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export { BackgroundContext, BackgroundProvider };
