import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";


type HeadingPropsType = {
  title: string;
  subtitle: string;
};

function Heading({ title, subtitle }: HeadingPropsType) {

  return (
    <Grid item xs={8} style={{ marginBottom: 20 }}>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="h2"
          component="div"
          style={{ fontWeight: "bold", textAlign: "center" }}
        >
          {title}
        </Typography>
      </Stack>
      <Typography
        variant="h4"
        component="div"
        style={{ fontWeight: "bold", color: "grey", textAlign: "center" }}
      >
        {subtitle}
      </Typography>
    </Grid>
  );
}

const defaultProps: HeadingPropsType = {
  title: "Title",
  subtitle: "This should be the subtitle"
};
Heading.defaultProps = {
  ...defaultProps
};

export default Heading;
