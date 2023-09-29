import ReservationBanner from "./ReservationComponents/ReservationBanner";
import ReservationSpecial from "./ReservationComponents/ReservationSpecial";
import ReservationShowCase from "./ReservationComponents/ReservationShowCase";
import ReservationAbout from "./ReservationComponents/about";
import ReservationCover from "./ReservationComponents/reservationCover";
import ReservationDetail from "./ReservationComponents/reservationDetail";

const ReservationPage = () => {
  return (
    <>
      <ReservationCover />
      <ReservationDetail />
      <ReservationBanner />
      <ReservationSpecial />
      <ReservationAbout />
      <ReservationShowCase />
    </>
  );
};

export default ReservationPage;
