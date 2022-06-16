import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {  GoalType } from "../../../Types/GoalTypes";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CustomButton from "./CustomButton";
import { IconButton } from "@mui/material";
import { useAppDispatch } from "../state/app/hooks";
import { deleteGoal } from "../state/features/goals/goalSlice";

type GoalItempropsType = {
  goal: GoalType,
}

const GoalItem = ({ goal }: any) => {

const dispatch = useAppDispatch()

const {createdAt, _id}   = goal 
  return (
    <Grid item xs={12}>
      <Paper
        style={{ padding: "8px" }}
      >
        <Stack
          spacing={2}
          direction="column"
          justifyContent="center"
        >
          <Typography
            variant="h5"
            component="div"
            style={{ fontWeight: "bold", }}
          >
            {goal.text}
          </Typography>
          <Stack
            spacing={2}
            direction="row"
            alignItems="center"
            justifyContent={"space-between"}
          >

            <Typography
              variant="h6"
              component="div"
              style={{
                fontWeight: "bold",
                color: "grey",
                textAlign: "center"
              }}
            >
              {new Date( createdAt ).toLocaleString('en-US')}
            </Typography>
            <IconButton onClick={()=>dispatch(deleteGoal(_id))}>
              <DeleteForeverIcon />
            </IconButton>
          </Stack>

        </Stack>
      </Paper>
    </Grid>
  )

};


const defaultProps: GoalItempropsType = {
  goal: {
    _id: '1',
    text: 'The goal',
    createdAt: Date.now().toLocaleString('en-US')
  }

}
GoalItem.defaltProps = {
  ...defaultProps
}

export default GoalItem