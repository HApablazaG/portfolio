import {
  Box,
  Card,
  CardHeader,
} from '@mui/material';

function SectionBase (props) {
  const { id, title, children } = props;

  return (
    <Box
      id={id}
      sx={{
        paddingTop: 10,
        paddingBottom: 20,
      }}
    >
      <Card
        sx={theme => ({
          backgroundColor: theme.palette.background.default,
          borderRadius: 6
        })}
        raised
      >
        <CardHeader
          title={title}
          titleTypographyProps={{
            sx: theme => ({
              marginBottom: 3,
              color: theme.palette.secondary.dark
            }),
            variant: 'h4',
            align: 'center',
          }}
        />

        { children }
      </Card>
    </Box>
  );
}

export default SectionBase;
