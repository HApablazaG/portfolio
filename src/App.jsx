import { Fragment, useEffect, useState } from 'react';
import overlayScrollbars from 'overlayscrollbars';
import { Divider } from '@mui/material';
import { Footer, Header } from './components';
import {
  AboutMe,
  Contact,
  ExperienceTimeLine,
  HomePage,
  Portfolio
} from './pages';

function App () {
  const [siteSchema] = useState(() => [
    {
      id: 'home',
      label: 'Inicio',
      Component: HomePage
    },
    {
      id: 'about',
      label: 'Perfil',
      Component: AboutMe
    },
    {
      id: 'experience',
      label: 'Experiencia',
      Component: ExperienceTimeLine
    },
    {
      id: 'portfolio',
      label: 'Portafolio',
      Component: Portfolio
    },
    {
      id: 'contact',
      label: 'Contacto',
      Component: Contact
    }
  ]);

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
    }, 350);
  }, []);

  return (
    <>
      <Header menuList={siteSchema} />

      {
        siteSchema.map(({ id, Component }, index) => (
          <Fragment key={id}>
            { index !== 0 && <Divider /> }

            <Component id={id} />
          </Fragment>
        ))
      }

      <Footer />
    </>
  );
}

export default App;
