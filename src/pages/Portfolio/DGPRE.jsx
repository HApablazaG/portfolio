import { Typography } from '@mui/material';
import { ProjectBase } from '../../components';

function DGPRE () {
  const techList = [
    'Javascript (ES6+)',
    'React',
    'Koa.js',
    'PostgreSQL'
  ];

  return (
    <ProjectBase
      name="DGPRE"
      year="2021"
      companyLogo="/images/ucn_logo192.png"
      techList={techList}
    >
      <Typography align="justify" gutterBottom>
        Debido a la pandemia del COVID-19 la universidad se vio en la necesidad de fortalezer
        a la unidad de Registro Curricular para permitir la solicitud y entrega de documentos
        escenciales para los estudiantes de manera no presencial.
      </Typography>
    </ProjectBase>
  );
}

export default DGPRE;
