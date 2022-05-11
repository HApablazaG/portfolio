import { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme, styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  Avatar,
  Box,
  ButtonBase,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography
} from '@mui/material';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator
} from '@mui/lab';
import { SectionBase } from '../components';
import experienceStyles from '../assets/jss/experience';

const StyledButton = styled(
  ButtonBase,
  { shouldForwardProp: prop => prop !== 'isActive' }
)(experienceStyles.itemButton);

function getContent (contentId) {
  switch (contentId) {
    case 1:
      return (
        <Box
          sx={experienceStyles.contentList}
          component="ul"
        >
          <Typography component="li" align="justify">
            Desarrollo de sistemas web internos utilizando HTML, CSS, JavaScript y JQuery como
            front-end, en conjunto con PHP y MySQL como back-end.
          </Typography>

          <Typography component="li" align="justify">
            Encargado de configurar e implementar los sistemas en el servidor de producción.
          </Typography>

          <Typography component="li" align="justify">
            Manejo y control de versión en servidor propietario de la universidad utilizando
            SVN.
          </Typography>
        </Box>
      );
    case 2:
      return (
        <>
          <Typography>
            Actualización del sistema de gestión e inventario interno de la compañía:
          </Typography>

          <Box
            sx={experienceStyles.contentList}
            component="ul"
          >
            <Typography component="li" align="justify">
              Refactorización del código existente, el cual en su mayoría era código
              autogenerado por Dreamweaver (la herramienta utilizada para su desarrollo
              inicialmente).
            </Typography>

            <Typography component="li" align="justify">
              Rediseño de la interfaz de usuario para darle un aspecto más moderno y acorde
              a los estándares del momento.
            </Typography>

            <Typography component="li" align="justify">
              Finalizar las funcionalidades pendientes de implementación.
            </Typography>
          </Box>
        </>
      );
    case 3:
      return (
        <Box
          sx={experienceStyles.contentList}
          component="ul"
        >
          <Typography component="li" align="justify">
            Desarrollo de sistemas web internos utilizando React.js, JSS y JavaScript (ES6+)
            como front-end, en conjunto con Node.js, Express y PostgreSQL como back-end.
          </Typography>

          <Typography component="li" align="justify">
            Preparación y configuración del nuevo servidor para mantener los sistemas en
            Node.js.
          </Typography>

          <Typography component="li" align="justify">
            Desarrollo externo para la compañía FCAB con el objetivo de actualizar su
            sistema de seguimiento de trenes.
          </Typography>
        </Box>
      );
    case 4:
      return (
        <Box
          sx={experienceStyles.contentList}
          component="ul"
        >
          <Typography component="li" align="justify">
            Desarrollo de diversos sistemas web internos y externos analizando las tecnologías
            adecuadas a aplicar para cada caso.
          </Typography>

          <Typography component="li" align="justify">
            En algunos casos también se desarrolló una aplicación móvil (iOS y Android)
            utilizando React Native complementaria al sistema web.
          </Typography>

          <Typography component="li" align="justify">
            Control de versiones del código utilizando git. También asignado como el
            responsable de revisar el código previo a cualquier merge para asegurar su
            funcionalidad y calidad.
          </Typography>

          <Typography component="li" align="justify">
            Encargado de capacitar a los nuevos integrantes del equipo.
          </Typography>
        </Box>
      );
    case 5:
      return (
        <>
          <Typography>
            Diseño y desarrollo de sistema de gestión interno utilizando PostgreSQL, Koa.js
            y React.js.
          </Typography>

          <Box
            sx={experienceStyles.contentList}
            component="ul"
          >
            <Typography component="li" align="justify">
              Registro y seguimiento de juicios.
            </Typography>

            <Typography component="li" align="justify">
              Calendarización de los eventos importantes, utilizando la API de Google para
              generar automáticamente la invitación y enviarla a los participantes asociados.
            </Typography>

            <Typography component="li" align="justify">
              Registro y reportabilidad de la contabilidad asociada a los juicios.
            </Typography>
          </Box>
        </>
      );
    default:
      return null;
  }
}

function ExperienceTimeLine (props) {
  const { id } = props;
  const [contentList] = useState(() => [
    {
      id: 1,
      position: 'Programador',
      company: 'CIN, Universidad Católica del Norte',
      timeLapse: '08/2015 - 05/2016',
      logoImg: '/images/ucn-logo192.png'
    },
    {
      id: 2,
      position: 'Programador',
      company: 'Ingeniería Gestión y Desarrollo S.A.',
      timeLapse: '05/1016 - 09/1016',
      logoImg: '/images/logo-igd.png'
    },
    {
      id: 3,
      position: 'Programador',
      company: 'CIN, Universidad Católica del Norte',
      timeLapse: '11/2016 - 04/2019',
      logoImg: '/images/ucn-logo192.png'
    },
    {
      id: 4,
      position: 'Programador Senior',
      company: 'CIN, Universidad Católica del Norte',
      timeLapse: '05/2019 - 11/2021',
      logoImg: '/images/ucn-logo192.png'
    },
    {
      id: 5,
      position: 'Programador Freelance',
      company: 'Asesoría Laboral y Sindical',
      timeLapse: '12/2021 - 04/2022',
      logoImg: '/images/logo-als.png'
    }
  ]);
  const [selected, setSelected] = useState(contentList[0]);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <SectionBase id={id} title="Experiencia Laboral">
      <Grid alignItems="center" container>
        <Grid xs={3} md={2} lg={6} item>
          <Timeline position="left">
            {
              contentList.map(content => {
                const handleOnClick = () => {
                  setSelected(content);
                };

                return (
                  <TimelineItem
                    key={`timeline-item-${content.id}`}
                    sx={experienceStyles.timelineItem}
                  >
                    {
                      matches && (
                        <TimelineOppositeContent
                          sx={experienceStyles.oppositeContent}
                          align="right"
                          variant="body2"
                          color="text.secondary"
                        >
                          { content.timeLapse }
                        </TimelineOppositeContent>
                      )
                    }

                    <TimelineSeparator>
                      <TimelineConnector />

                      <StyledButton
                        component={TimelineDot}
                        onClick={handleOnClick}
                        isActive={selected.id === content.id}
                      >
                        <Avatar
                          sx={experienceStyles.itemAvatar}
                          imgProps={{
                            sx: experienceStyles.avatarImg
                          }}
                          alt={`Logo ${content.company}`}
                          src={content.logoImg}
                        />
                      </StyledButton>

                      <TimelineConnector />
                    </TimelineSeparator>

                    {
                      matches && (
                        <TimelineContent sx={experienceStyles.content}>
                          <Typography variant="h6" component="span">
                            { content.position }
                          </Typography>

                          <Typography>
                            { content.company }
                          </Typography>
                        </TimelineContent>
                      )
                    }
                  </TimelineItem>
                );
              })
            }
          </Timeline>
        </Grid>

        <Grid xs={9} md={10} lg={6} item>
          <Card>
            <CardHeader
              title={selected.position}
              subheader={(
                <span>
                  { selected.company } <br /> { selected.timeLapse }
                </span>
              )}
              action={(
                <Avatar
                  sx={experienceStyles.cardAvatar}
                  imgProps={{
                    sx: experienceStyles.avatarImg
                  }}
                  variant="square"
                  alt={`Logo ${selected.company}`}
                  src={selected.logoImg}
                />
              )}
            />

            <CardContent sx={experienceStyles.cardContent}>
              { getContent(selected.id) }
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </SectionBase>
  );
}

// Define received props types for validation.
ExperienceTimeLine.propTypes = {
  id: PropTypes.string.isRequired
};

export default ExperienceTimeLine;
