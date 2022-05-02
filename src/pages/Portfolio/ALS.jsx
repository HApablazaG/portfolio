import { Typography } from '@mui/material';
import { ProjectBase } from '../../components';

function ALS () {
  const techList = [
    'Javascript (ES6+)',
    'React',
    'Koa.js',
    'PostgreSQL',
    'Google API'
  ];

  return (
    <ProjectBase
      name="Sistema de Gestión ALS"
      year="2022"
      companyLogo="/images/logoALS.png"
      techList={techList}
    >
      <Typography align="justify" gutterBottom>
        Digitalización de los procesos de gestión para la empresa ALS. El objetivo principal es
        permitir llevar un seguimiento del estado para cada uno de los juicios, facilitando al
        administrador registrar la parte contable asociada. Como adicional se incorporo la
        calendarización de los eventos por juicio con el envio de la invitación por correo a
        los participantes asociados.
      </Typography>
    </ProjectBase>
  );
}

export default ALS;
