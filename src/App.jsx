import { useEffect } from 'react';
import appStyles from './assets/jss/app';
import overlayScrollbars from 'overlayscrollbars';
import { Box } from '@mui/material';
import {
  Footer,
  Header,
} from './components';
import {
  AboutMe,
  Contact,
  HomePage,
  Portfolio,
} from './pages';

function App () {
  useEffect(() => {
    // Init styled scroller on body element.
    let elements = document.getElementsByTagName('body');

    if (elements.length > 0) {
      overlayScrollbars(elements[0], {
        className: 'os-theme-light',
      });
    }

    // Move to initial hash component.
    setTimeout(() => {
      let { hash } = window.location;
      let element = document.getElementById(hash?.slice(1));

      element?.scrollIntoView({
        behavior: 'smooth'
      });
    }, 150);
  }, []);

  return (
    <>
      <Header />

      <Box sx={appStyles.container}>
        <HomePage />

        <AboutMe />

        <Portfolio />

        <Contact />
      </Box>

      <Footer />
    </>
  );
}

export default App;
