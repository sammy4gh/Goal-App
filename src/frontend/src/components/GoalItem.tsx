export const GoalItem = () => (
  <Paper>
    <Stack
      spacing={8}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography
        variant="h2"
        component="div"
        style={{ fontWeight: "bold", textAlign: "center" }}
      >
        Goal
      </Typography>
      <Typography
        variant="h4"
        component="div"
        style={{
          fontWeight: "bold",
          color: "grey",
          textAlign: "center"
        }}
      >
        Date
      </Typography>
    </Stack>
  </Paper>
);