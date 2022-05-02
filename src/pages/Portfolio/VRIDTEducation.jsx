import { Typography } from '@mui/material';
import { ProjectBase } from '../../components';

function UCNEducation () {
  const techList = [
    'Javascript (ES6)',
    'React',
    'Express',
    'PostgreSQL'
  ];

  return (
    <ProjectBase
      name="SIVRIDT Educación Continua"
      year="2019"
      companyLogo="/images/ucn_logo192.png"
      techList={techList}
    >
      <Typography align="justify" gutterBottom>
        El proyecto tiene como objetivo facilitar el proceso de registro de los distintos planes
        de formación existentes (cursos, diplomados, etc.) e impartidos por la universidad.
        Asi como tambien la ejecución del mismo, permitiendo el ingreso de la información más
        relevante para reportabilidad.
      </Typography>
    </ProjectBase>
  );
}

export default UCNEducation;
