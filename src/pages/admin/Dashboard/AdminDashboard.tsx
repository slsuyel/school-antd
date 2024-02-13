import BarsikProtibedon from "./BarsikProtibedon";
import Summary from "./Summary";
import TotalStudents from "./TotalStudents";

const AdminDashboard = () => {
  return (
    <div>
      <Summary />
      <BarsikProtibedon />
      <TotalStudents />
    </div>
  );
};

export default AdminDashboard;
