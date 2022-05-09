import { useState } from 'react';
import PropTypes from 'prop-types';
import projectList from '../../assets/json/project-list.json';
import sliderStyles from '../../assets/jss/slider';
import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from '@mui/icons-material';
import {
  Button,
  Card,
  CardActions,
  Grid,
  styled,
  Typography
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { ProjectBase, SectionBase } from '../../components';

const StyledSwiper = styled(Swiper)(sliderStyles.root);

function Portfolio (props) {
  const { id } = props;
  const [swiperRef, setSwiperRef] = useState(null);
  const [state, setState] = useState(() => ({
    featuredOnly: true,
    list: projectList.filter(d => d.featured)
  }));

  const { featuredOnly, list } = state;

  const toggleList = () => {
    let newState = {
      featuredOnly: !featuredOnly,
      list: featuredOnly ? projectList : projectList.filter(d => d.featured)
    };
    setState(newState);

    if (swiperRef) {
      const current = list[swiperRef.realIndex];
      let newIndex = newState.list.findIndex(d => d.id === current.id);
      newIndex = newIndex === -1 ? 0 : newIndex;
      swiperRef.slideTo(newIndex, 0);

      // Resolve bug of realIndex not updating.
      swiperRef.realIndex = newIndex;
    }
  };

  return (
    <SectionBase
      id={id}
      title={
        featuredOnly
          ? 'Proyectos Destacados'
          : 'Histórico de Proyectos'
      }
    >
      <StyledSwiper
        onSwiper={setSwiperRef}
        slidesPerView="auto"
        spaceBetween={30}
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        centeredSlides
        navigation
        loop
      >
        <Card
          sx={sliderStyles.contentContainer}
          slot="container-start"
        />

        {
          list.map(project => (
            <SwiperSlide key={`project-container-${project.id}`}>
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
            </SwiperSlide>
          ))
        }
      </StyledSwiper>

      <CardActions>
        <Grid justifyContent="center" container>
          <Button
            variant="outlined"
            startIcon={
              featuredOnly
                ? <VisibilityIcon />
                : <VisibilityOffIcon />
            }
            onClick={toggleList}
          >
            {
              featuredOnly
                ? 'Ver todos'
                : 'Ver solo destacados'
            }
          </Button>
        </Grid>
      </CardActions>
    </SectionBase>
  );
}

// Define received props types for validation.
Portfolio.propTypes = {
  id: PropTypes.string.isRequired
};

export default Portfolio;
