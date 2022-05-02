import { useEffect } from 'react';
import PropTypes from 'prop-types';
import projectListStyles from '../../assets/jss/projectList';
import projectList from '../../assets/json/project-list.json';
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
