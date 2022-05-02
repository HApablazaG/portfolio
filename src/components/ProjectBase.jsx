import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from '@mui/material';

function ProjectBase (props) {
  const { name, year, companyLogo, techList, children } = props;

  return (
    <Card
      sx={theme => ({
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.common.white,
      })}
      square
    >
      <CardActionArea>
        <CardHeader
          title={name}
          subheader={year}
          subheaderTypographyProps={{
            sx: theme => ({ color: theme.palette.common.white }),
          }}
          action={(
            <Avatar
              sx={{
                alignItems: 'flex-start',
                width: 80,
                height: 80,
                marginBottom: -2,
              }}
              imgProps={{
                sx: {
                  height: 'auto',
                  objectFit: 'contain',
                }
              }}
              variant="square"
              src={companyLogo}
            />
          )}
        />

        <CardContent>
          { children }
        </CardContent>

        <Divider sx={theme => ({ borderColor: theme.palette.common.white })} />

        <Typography
          sx={{ padding: 1 }}
          component="div"
          align="center"
          variant="overline"
        >
          { techList?.join(' | ') }
        </Typography>
      </CardActionArea>
    </Card>
  );
}

export default ProjectBase;
