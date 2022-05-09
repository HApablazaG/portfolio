import { useEffect } from 'react';
import overlayScrollbars from 'overlayscrollbars';
import { Divider } from '@mui/material';
import { Footer, Header } from './components';
import {
  AboutMe,
  Contact,
  HomePage,
  Portfolio
} from './pages';

function App () {
  useEffect(() => {
    // Init styled scroller on body element.
    let elements = document.getElementsByTagName('body');

    if (elements.length > 0) {
      overlayScrollbars(elements[0], {
        className: 'os-theme-dark',
      });
    }

    // Move to initial hash component.
    setTimeout(() => {
      let { hash } = window.location;
      let element = document.getElementById(hash?.slice(1));

      element?.scrollIntoView({
        behavior: 'smooth'
      });
    }, 300);
  }, []);

  return (
    <>
      <Header />

      <HomePage />

      <AboutMe />

      <Divider />

      <Portfolio />

      <Divider />

      <Contact />

      <Footer />
    </>
  );
}

export default App;
