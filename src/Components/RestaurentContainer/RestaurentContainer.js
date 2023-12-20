import React from "react";

// import context
import { withRoomConsumer } from "../../Context/Context";

// import components
import Loadings from "../Loading/Loading";
import RestaurentFilter from "./RestaurentFilter";
//import RestaurentList from "./RestaurentList";

function RoomContainer({ context }) {
  console.log(context);
  //const { loading, sortedRooms, rooms } = context;
  const { loading, rooms } = context;

  if (loading) {
    return <Loadings />;
  }

  return (
    <>
      <RestaurentFilter rooms={rooms} />
      {/* <RestaurentList rooms={sortedRooms} /> */}
    </>
  );
}

export default withRoomConsumer(RoomContainer);

