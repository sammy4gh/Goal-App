import { FunctionComponent, Suspense, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../state/app/hooks";
import { RootState } from "../state/app/store";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import GoalForm from "../components/GoalForm";
import {  GoalStateType } from "../../../Types/GoalTypes";
import { getGoals, reset } from "../state/features/goals/goalSlice";
import Heading from "../components/Heading";
import GoalItem from "../components/GoalItem";

type DashboardProps = {};

const Dashboard: FunctionComponent = (props: DashboardProps): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state: RootState) => state.auth);
  const { goals , isLoading, isError, message }: GoalStateType = useAppSelector(
    (state: RootState) => state.goals
  );
  useEffect(() => {
    if (isError) {
      console.log("error : ", message);
    }
    if (!user) {
      navigate("/login");
    }
    dispatch(getGoals());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Grid
          spacing={8}
          direction="column"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Heading
            title={`Welcome ${user ? user.name : ""}`}
            subtitle={"Goals Dashboard"}
          />
          <GoalForm />
          <Grid container spacing={2} 
            direction="column"
            alignItems={"center"}
            justifyContent={"center"}
         
          >
    
             {
               goals.map((goal: { _id: any; } )=>(
                 <GoalItem key={goal._id} goal={goal} />
               ))
             }
    
          </Grid>
        </Grid>
      </Suspense>
    </>
  );
};

export default Dashboard;
