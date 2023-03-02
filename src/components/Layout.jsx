import { useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import { DarkModeProvider } from './context/DarkModeContext';
import { BackgroundContext } from './context/BackgroundContext';

const Layout = ({ children }) => {
  const { background } = useContext(BackgroundContext);

  return (
    <DarkModeProvider>
      <div
        className="darkTheme layout"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <Header />
        <main className=" flex  w-full items-center justify-center  sm:h-screen sm:py-14">
          {children}
        </main>
        <Footer />
      </div>
    </DarkModeProvider>
  );
};

export default Layout;
