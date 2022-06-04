import { FunctionComponent, Suspense } from "react";

type DashboardProps = {};

const Dashboard: FunctionComponent = (props: DashboardProps): JSX.Element => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div>Dashboard</div>
    </Suspense>
  );
};

export default Dashboard;
