import { Typography } from '@mui/material';
import { ProjectBase } from '../../components';

function VRIDTDonation () {
  const techList = [
    'Javascript (ES6)',
    'React',
    'Express',
    'PostgreSQL',
  ];

  return (
    <ProjectBase
      name="SIVRIDT Donaciones"
      year="2018"
      companyLogo="/images/ucn_logo192.png"
      techList={techList}
    >
      <Typography align="justify" gutterBottom>
        El proyecto tiene como objetivo facilitar el proceso de registro y seguimiento de los
        proyectos financiados a travez de donaciones externas.
      </Typography>
    </ProjectBase>
  );
}

export default VRIDTDonation;
