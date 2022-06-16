import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export function Heading(props: { user: any }) {
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
          Welcome {props.user && props.user.name}
        </Typography>
      </Stack>
      <Typography
        variant="h4"
        component="div"
        style={{ fontWeight: "bold", color: "grey", textAlign: "center" }}
      >
        Goal Dashboard
      </Typography>
    </Grid>
  );
}