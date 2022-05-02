import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import projectListStyles from '../../assets/jss/projectList';
import overlayScrollbars from 'overlayscrollbars';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip
} from '@mui/material';

function ProjectList () {
  const [projectList] = useState(() => [
    {
      id: 2016001,
      name: 'Sistema de Gestión PACE',
      endYear: '2016',
      company: 'PACE UCN',
      companyUrl: 'https://paceucn.cl',
      companyImgUrl: 'https://paceucn.cl/wp-content/uploads/2020/05/Normas-gra%CC%81ficas_Color.png',
      description:
        `Sistema para apoyar los procesos de gestión desarrollados por el programa PACE.
        Permite el registro y seguimiento de los estudiantes a los que se les brinda apoyo
        academico, asi como de las distintas actividades realizadas y sus participantes.
        Implementa diversos reportes administrativos, según los requerimientos necesarios para
        responder a las consultas habituales por parte del ministerio de educación.`,
      techList: [
        'JQuery',
        'Bootstrap',
        'PHP',
        'MySQL'
      ]
    },
    {
      id: 2016002,
      name: 'Sistema de Gestión de la Calidad',
      endYear: '2016',
      company: 'Universidad Católica del Norte',
      companyUrl: 'https://www.ucn.cl',
      companyImgUrl: '/images/ucn_logo192.png',
      description:
        `Sistema desarrollado para escuela de ingenieria, con el objetivo de implementar
        reportes graficos para la visualización de los distintos indicadores clave de
        rendimiento definidos.`,
      techList: [
        'JavaScript',
        'DC.js',
        'Bootstrap',
        'PHP',
        'API externa'
      ]
    },
    {
      id: 2016003,
      name: 'Sistema de Gestión e Inventario',
      endYear: '2016',
      company: 'Ingeniería Gestión y Desarrollo S.A.',
      companyUrl: 'https://igdchile.com',
      companyImgUrl: 'http://igdchile.com/wp-content/uploads/2018/06/igd_logo10fb.png',
      description: 'Actualización y termino del sistema de gestión e inventario interno de la empresa.',
      techList: [
        'JQuery',
        'PHP',
        'MySQL'
      ]
    },
    {
      id: 2017001,
      name: 'SIVRIDT Publicaciones',
      endYear: '2017',
      company: 'Universidad Católica del Norte',
      companyUrl: 'https://www.ucn.cl',
      companyImgUrl: '/images/ucn_logo192.png',
      description:
        `La universidad tiene como uno de sus objetivos el impulsar las publicaciones realizadas
        por académicos en revistas de investigación reconocidas. Para ello se comprometio a
        implementar un sistema web para facilitar la inscripción de dichas publicaciones,
        asi como simplificar el proceso de pago de los incentivos monetarios asociados.`,
      techList: [
        'Javascript (ES6)',
        'React',
        'Express',
        'PostgreSQL'
      ]
    },
    {
      id: 2018001,
      name: 'SIVRIDT Donaciones',
      endYear: '2018',
      company: 'Universidad Católica del Norte',
      companyUrl: 'https://www.ucn.cl',
      companyImgUrl: '/images/ucn_logo192.png',
      description:
        `El proyecto tiene como objetivo facilitar el proceso de registro y seguimiento de los
        proyectos financiados a travez de donaciones externas.`,
      techList: [
        'Javascript (ES6)',
        'React',
        'Express',
        'PostgreSQL'
      ]
    },
    {
      id: 2018002,
      name: 'Sistema de seguimiento de prácticas',
      endYear: '2018',
      company: 'Universidad Católica del Norte',
      companyUrl: 'https://www.ucn.cl',
      companyImgUrl: '/images/ucn_logo192.png',
      description:
        `Sistema realizado para facilitar el proceso de prácticas, permitiendo realizar el
        registro de ofertas recibidas, la inscripción por parte del estudiante y todo el
        seguimiento correspondiente hasta la evaluación final.`,
      techList: [
        'Javascript (ES6+)',
        'React',
        'Express',
        'PostgreSQL'
      ]
    },
    {
      id: 2019001,
      name: 'Sistema de seguimiento de trenes',
      endYear: '2019',
      company: 'FCAB',
      companyUrl: 'https://www.fcab.cl',
      companyImgUrl: '/images/logoFCAB.png',
      description:
        `Con el objetivo de reemplazar al antiguo sistema para el seguimiento en tiempo real
        de los trenes en terreno. Utilizando las capacidades actuales de los sistemas web y
        utilizando la biblioteca gráfica D3, se logró mantener y mejorar las funcionalidades
        presentes en el sistema anterior.`,
      techList: [
        'JavaScript',
        'D3.js',
        'API Rest'
      ]
    },
    {
      id: 2019002,
      name: 'SIVRIDT Educación Continua',
      endYear: '2019',
      company: 'Universidad Católica del Norte',
      companyUrl: 'https://www.ucn.cl',
      companyImgUrl: '/images/ucn_logo192.png',
      description:
        `El proyecto tiene como objetivo facilitar el proceso de registro de los distintos planes
        de formación existentes (cursos, diplomados, etc.) e impartidos por la universidad.
        Asi como tambien la ejecución del mismo, permitiendo el ingreso de la información más
        relevante para reportabilidad.`,
      techList: [
        'Javascript (ES6+)',
        'React',
        'Express',
        'PostgreSQL'
      ]
    },
    {
      id: 2020001,
      name: 'Mejora del proceso de proyección de trenes',
      endYear: '2020',
      company: 'FCAB',
      companyUrl: 'https://www.fcab.cl',
      companyImgUrl: '/images/logoFCAB.png',
      description:
        `Realizado con el objetivo de mejorar el sistema actual para la proyección del recorrido
        realizado por los trenes a disposición de la empresa, con el fin de utilizar de manera
        optima la (única) via ferrea existente para ello.`,
      techList: [
        'Javascript (ES6+)',
        'React',
        'Koa.js',
        'PostgreSQL',
        'Python'
      ]
    },
    {
      id: 2020002,
      name: 'Sistema de revisión de rutas y notificación de amenazas georreferenciadas',
      endYear: '2020',
      company: 'Minera Los Pelambres',
      companyUrl: 'https://web.pelambres.cl',
      companyImgUrl: '/images/logo-pelambres.png',
      description:
        `El objetivo del sistema es digitalizar dos procesos claves de la empresa. El primero
        consiste en registrar los checklist de revisión y mantenimiento del equipamiento a
        disposición. Y además el ingreso (y seguimiento) de los problemas o factores de riesgo
        presentes en los distintos ductos para transporte de material.`,
      techList: [
        'Javascript (ES6+)',
        'React',
        'Koa.js',
        'PostgreSQL',
        'React Native',
        'SQLite'
      ]
    },
    {
      id: 2021001,
      name: 'Sistema de seguimiento de prácticas',
      endYear: '2021',
      company: 'Universidad Católica del Norte',
      companyUrl: 'https://www.ucn.cl',
      companyImgUrl: '/images/ucn_logo192.png',
      description:
        `Con el fin de retomar la implementación del sistema para apoyar en el proceso de
        prácticas (detenido debido a cambios en la administración de la facultad) se solicitaron
        diversos cambios y mejoras para simplificar el proceso general.`,
      techList: [
        'Javascript (ES6+)',
        'React',
        'Koa.js',
        'PostgreSQL'
      ]
    },
    {
      id: 2021002,
      name: 'Sistema de control de asistencia de operadores de trenes',
      endYear: '2021',
      company: 'FCAB',
      companyUrl: 'https://www.fcab.cl',
      companyImgUrl: '/images/logoFCAB.png',
      description:
        `Gracias a la confianza adquirida en los desarrollos previos, en está ocasión se encargo
        la actualización del sistema para control de asistencia de los operadores de trenes con
        el proposito de optimizar los tiempos de respuesta del sistema e incorporar mejoras al
        sistema existente.`,
      techList: [
        'Javascript',
        'PHP',
        'PostgreSQL'
      ]
    },
    {
      id: 2021003,
      name: 'Sistema de seguimiento a la formación de especialidades médicas',
      endYear: '2021',
      company: 'Universidad Católica del Norte',
      companyUrl: 'https://www.ucn.cl',
      companyImgUrl: '/images/ucn_logo192.png',
      description:
        `El objetivo del sistema es facilitar el proceso de calificación de estudiantes de
        medicina en las distintas especiales ofrecidas por la universidad. El sistema permite
        diseñar las rubricas de evaluación a travez de un sistema de administración web y
        completarlas por los docentes con la aplicación móvil para IOS y Android.`,
      techList: [
        'Javascript (ES6+)',
        'React',
        'Koa.js',
        'PostgreSQL',
        'React Native',
        'SQLite',
        'Process Maker'
      ]
    },
    {
      id: 2021004,
      name: 'Sistema de gestión para la unidad CIMET',
      endYear: '2021',
      company: 'Universidad Católica del Norte',
      companyUrl: 'https://www.ucn.cl',
      companyImgUrl: '/images/ucn_logo192.png',
      description:
        `El sistema permite la definición de programas de especialización en distintos niveles
        para académicos, agregar participantes y realizar el seguimiento del las competencias
        definidas por nivel.`,
      techList: [
        'Javascript (ES6+)',
        'React',
        'Koa.js',
        'PostgreSQL'
      ]
    },
    {
      id: 2022001,
      name: 'Sistema para la gestión ALS',
      endYear: '2022',
      company: 'Asesoría Laboral y Sindical',
      companyUrl: 'https://als.cl/',
      companyImgUrl: '/images/logoALS.png',
      description:
        `Digitalización de los procesos de gestión para la empresa ALS. El objetivo principal es
        permitir llevar un seguimiento del estado para cada uno de los juicios, facilitando al
        administrador registrar la parte contable asociada. Como adicional se incorporo la
        calendarización de los eventos por juicio con el envio de la invitación por correo a
        los participantes asociados.`,
      techList: [
        'Javascript (ES6+)',
        'React',
        'Koa.js',
        'PostgreSQL'
      ]
    },
  ]);

  useEffect(() => {
    // Init styled scroller on body element.
    let elements = document.getElementsByClassName('MuiDialog-scrollBody');

    if (elements && elements.length > 0) {
      overlayScrollbars(elements[0], {
        className: 'os-theme-light'
      });
    }
  }, []);

  return (
    <TableContainer component={Paper} square>
      <Table>
        <TableHead sx={projectListStyles.listHeader}>
          <TableRow>
            <TableCell>Nombre</TableCell>

            <TableCell>Año de desarrollo</TableCell>

            <TableCell>Desarrollado para</TableCell>

            <TableCell>Descripción</TableCell>

            <TableCell>Tecnologías utilizadas</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {
            projectList.map(project => (
              <TableRow
                key={project.id}
                sx={projectListStyles.listRow}
              >
                <TableCell>{ project.name }</TableCell>

                <TableCell>{ project.endYear }</TableCell>

                <TableCell>
                  <Tooltip
                    title={project.company}
                  >
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href={project.companyUrl}
                    >
                      <Box
                        component="img"
                        sx={projectListStyles.listIcon}
                        variant="square"
                        src={project.companyImgUrl}
                      />
                    </a>
                  </Tooltip>
                </TableCell>

                <TableCell align="justify">{ project.description }</TableCell>

                <TableCell>{ project.techList?.join(' | ') }</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function ModalContainer (props) {
  const { open, onClose } = props;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      scroll="body"
      maxWidth="lg"
      fullWidth
    >
      <DialogTitle
        variant="h5"
        color="secondary"
      >
        Histórico de Proyectos
      </DialogTitle>

      <DialogContent>
        <ProjectList />
      </DialogContent>

      <DialogActions>
        <Button
          variant="outlined"
          color="inherit"
          onClick={onClose}
        >
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

// Define received props types for validation.
ModalContainer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default ModalContainer;
