import { Grid } from "./_components/grid-layout/grid";
import { GridDnd } from "./_components/grid-layout/grid-dnd";
import { GridDndTwo } from "./_components/grid-layout/grid-dnd-tahap2";
import { GridDndThree } from "./_components/grid-layout/grid-dnd-tahap3";
import { Portal } from "./_components/portal";
import { ReactDnd } from "./_components/react-dnd/react-dnd";

const PortalPage = () => {
  return (
    <div>
      <GridDndThree />
      Copyright 2023
    </div>
  );
};

export default PortalPage;
