import { Typography } from '@mui/material';
import { ProjectBase } from '../../components';

function VRIDTPaper () {
  const techList = [
    'Javascript (ES6)',
    'React',
    'Express',
    'PostgreSQL',
  ];

  return (
    <ProjectBase
      name="SIVRIDT Publicaciones"
      year="2017"
      companyLogo="/images/ucn_logo192.png"
      techList={techList}
    >
      <Typography align="justify" gutterBottom>
        La universidad tiene como uno de sus objetivos el impulsar las publicaciones realizadas
        por académicos en revistas de investigación reconocidas. Para ello se comprometio a
        implementar un sistema web para facilitar la inscripción de dichas publicaciones,
        asi como simplificar el proceso de pago de los incentivos monetarios asociados.
      </Typography>
    </ProjectBase>
  );
}

export default VRIDTPaper;
