import { useState } from 'react';
import projectList from '../../assets/json/project-list.json';
import {
  Button,
  CardActions,
  CardContent,
  Grid,
  Typography
} from '@mui/material';
import { ProjectBase, SectionBase } from '../../components';
import ProjectList from './ProjectList';

function Portfolio () {
  const [list] = useState(() => projectList.filter(d => d.featured));
  const [open, setOpen] = useState(false);

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
            list.map(project => (
              <Grid
                key={`project-container-${project.id}`}
                xs={12}
                md={6}
                item
              >
                <ProjectBase
                  name={project.name}
                  year={project.endYear}
                  companyLogo={project.companyImgUrl}
                  techList={project.techList}
                >
                  <Typography align="justify" gutterBottom>
                    { project.description }
                  </Typography>
                </ProjectBase>
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
