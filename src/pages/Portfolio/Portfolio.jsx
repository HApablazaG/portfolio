import { useState } from 'react';
import {
  Button,
  CardActions,
  CardContent,
  Grid,
} from '@mui/material';
import { SectionBase } from '../../components';
import {
  ALS,
  DGPRE,
  FCAB,
  VRIDTPaper,
} from './index';
import ProjectList from './ProjectList';

function Portfolio () {
  const [open, setOpen] = useState(false);
  const projectList = [
    ALS,
    DGPRE,
    FCAB,
    VRIDTPaper,
  ];

  const handleDialogOpen = () => {
    // Hide page scroller before open the modal.
    let elements = document.getElementsByClassName('os-scrollbar-vertical');
    if (elements && elements.length > 0) {
      elements[0].style.visibility = 'hidden';
    }

    // Open the modal.
    setOpen(true);
  };

  const handleDialogClose = () => {
    // Restore the visibility for the page scroller before closing the modal.
    let elements = document.getElementsByClassName('os-scrollbar-vertical');
    if (elements && elements.length > 0) {
      elements[0].style.visibility = 'visible';
    }

    // Hide the modal.
    setOpen(false);
  };

  return (
    <SectionBase id="portfolio" title="Proyectos Destacados">
      <CardContent>
        <Grid spacing={2} container>
          {
            projectList.map((Component, index) => (
              <Grid
                key={`project-container-${index}`}
                xs={12}
                md={6}
                item
              >
                <Component />
              </Grid>
            ))
          }
        </Grid>
      </CardContent>

      <CardActions>
        <Grid justifyContent="center" container>
          <Button
            variant="outlined"
            onClick={handleDialogOpen}
          >
            Ver todos los proyectos
          </Button>
        </Grid>
      </CardActions>

      <ProjectList
        open={open}
        onClose={handleDialogClose}
      />
    </SectionBase>
  );
}

export default Portfolio;
