import React from "react";
import ReservationCover from "./ReservationComponents/ReservationCover";
import ReservationDetails from "./ReservationComponents/ReservationDetails";
import ReservationBanner from "./ReservationComponents/ReservationBanner";
import ReservationSpecial from "./ReservationComponents/ReservationSpecial";
import ReservationAbout from "./ReservationComponents/ReservationAbout";

export default function page() {
  return (
    <div className="overflow-hidden">
      <ReservationCover />
      <ReservationDetails />
      <ReservationBanner />
      <ReservationSpecial />
      <ReservationAbout />
    </div>
  );
}
