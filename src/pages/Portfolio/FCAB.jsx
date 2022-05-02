import { Typography } from '@mui/material';
import { ProjectBase } from '../../components';

function FCAB () {
  const techList = [
    'Javascript (ES6+)',
    'React',
    'Koa.js',
    'PostgreSQL',
    'Python'
  ];

  return (
    <ProjectBase
      name="FCAB"
      year="2020"
      companyLogo="/images/logo-fcab.png"
      techList={techList}
    >
      <Typography align="justify" gutterBottom>
        Realizado con el objetivo de mejorar el sistema actual para la proyección del recorrido
        realizado por los trenes a disposición de la empresa, con el fin de utilizar de manera
        optima la (única) via ferrea existente para ello.
      </Typography>
    </ProjectBase>
  );
}

export default FCAB;
