import { FunctionComponent, useState } from "react";
import Stack from "@mui/material/Stack";
import FormInput from "./FormInput";
import CustomButton from "./CustomButton";
import Grid from "@mui/material/Grid";
import { toast } from "react-toastify";
import { register } from "../state/features/auth/authSlice";
import { useAppDispatch } from "../state/app/hooks";
import { createGoal } from "../state/features/goals/goalSlice";

type GoalFormProps = {};

const GoalForm = (props: GoalFormProps): JSX.Element => {
  const [text, setText] = useState<string>("");

  const dispatch = useAppDispatch();
  const onChange = (e: any) => {
    setText(e.target.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();

    dispatch(createGoal({ text }));
    setText("");
  };

  return (
    <Grid>
      <form onSubmit={onSubmit} style={{ width: "full" }}>
        <Stack spacing={2} style={{ width: "full" }}>
          <FormInput
            formControlProps={{}}
            inputProps={{ name: "goal" }}
            value={text}
            labelName={"goal"}
            onChange={onChange}
          />

          <CustomButton
            labelName={"Submit"}
            buttonProps={{ variant: "contained", type: "submit" }}
            onSubmit={onSubmit}
          />
        </Stack>
      </form>
    </Grid>
  );
};

export default GoalForm;
