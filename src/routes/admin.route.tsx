import AdminDashboard from "../pages/admin/Dashboard/AdminDashboard";
import AllStaff from "../pages/admin/Staffs/AllStaff";
import Attendance from "./../pages/admin/Attendance/Attendance";
import AllStudents from "./../pages/admin/Students/AllStudents";
import NewApplications from "./../pages/admin/Students/NewApplications";
import AdmissionForm from "./../pages/admin/Students/AdmissionForm";
import AdmissionConfirm from "./../pages/admin/Students/AdmissionConfirm";
import StudentReportSearch from "./../pages/admin/Students/StudentReportSearch";
import PaymentReports from "./../pages/admin/Account/PaymentReports";
import Payment from "./../pages/admin/Account/Payment";
import AnnuallyReport from "./../pages/admin/Account/AnnuallyReport";
import Routines from "./../pages/admin/Routines/Routines";
import Assessment from "./../pages/admin/Assessment/Assessment";
import NewAssessment from "./../pages/admin/Assessment/NewAssessment";
import ResultSheet from "./../pages/admin/Result/ResultSheet";
import MarkSheet from "./../pages/admin/Result/MarkSheet";
import ResultLog from "./../pages/admin/Result/ResultLog";
import ApplicationResult from "./../pages/admin/Result/ApplicationResult";
import Notice from "./../pages/admin/Notice/Notice";
import SmsNotice from "./../pages/admin/Notice/SmsNotice";
import StaffAttendance from "../pages/admin/Staffs/StaffAttendance";
import ExamFees from "./../pages/admin/Settings/Fees/ExamFees/ExamFees";
import AdmissionFees from "../pages/admin/Settings/Fees/AdmissionFees/AdmissionFees";
import MonthlyFees from "../pages/admin/Settings/Fees/MonthlyFees/MonthlyFees";
import SessionFee from "../pages/admin/Settings/Fees/SessionFee/SessionFee";
import RegistrationFees from "../pages/admin/Settings/Fees/RegistrationFees/RegistrationFees";
import FormFillUpFee from "../pages/admin/Settings/Fees/FormFillUpFee/FormFillUpFee";
import AddStaffForm from "../pages/admin/Staffs/AddStaffForm";
import LetterofAppreciation from "../pages/admin/Settings/Fees/LetterofAppreciation/LetterofAppreciation";
import AddNotice from "../pages/admin/Notice/AddNotice";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },

  {
    name: "Staff",
    children: [
      {
        name: "All Staffs",
        path: "staff/all-staffs",
        element: <AllStaff />,
      },
      {
        name: "Staff Attendance",
        path: "staff/staff-attendance",
        element: <StaffAttendance />,
      },
      {
        name: "Add Staff",
        path: "staff/add-staff",
        element: <AddStaffForm />,
      },
    ],
  },
  {
    name: "Student",
    children: [
      {
        name: "All Students",
        path: "student/all-students",
        element: <AllStudents />,
      },
      {
        name: "New Applications",
        path: "student/new-application",
        element: <NewApplications />,
      },
      {
        name: "Admission Form",
        path: "student/admission-form",
        element: <AdmissionForm />,
      },
      {
        name: "Admission Confirm",
        path: "student/admission-confirm",
        element: <AdmissionConfirm />,
      },
      {
        name: "Reports",
        path: "student/reports",
        element: <StudentReportSearch />,
      },
    ],
  },
  {
    name: "Account",
    children: [
      {
        name: "Payment Reports",
        path: "payment-reports",
        element: <PaymentReports />,
      },
      {
        name: "Payments",
        path: "payments",
        element: <Payment />,
      },
      {
        name: "Annually Report",
        path: "annually-report",
        element: <AnnuallyReport />,
      },
    ],
  },
  {
    name: "Attendance",
    path: "attendance",
    element: <Attendance />,
  },
  {
    name: "Routine",
    path: "routine",
    element: <Routines />,
  },
  {
    name: "Assessments",
    children: [
      {
        name: "Assessments List",
        path: "assessments",
        element: <Assessment />,
      },
      {
        name: "New Assessments",
        path: "new-assessments",
        element: <NewAssessment />,
      },
    ],
  },
  {
    name: "Result",
    children: [
      {
        name: "Result Sheet",
        path: "result-sheet",
        element: <ResultSheet />,
      },
      {
        name: "Mark Sheet",
        path: "mark-sheet",
        element: <MarkSheet />,
      },
      {
        name: "Result Log",
        path: "res-log",
        element: <ResultLog />,
      },
      {
        name: "Application Result",
        path: "application-result",
        element: <ApplicationResult />,
      },
    ],
  },
  {
    name: "Notice",
    children: [
      {
        name: "Notice",
        path: "all-notice",
        element: <Notice />,
      },
      {
        name: "SMS notice",
        path: "sms-notice",
        element: <SmsNotice />,
      },
      {
        name: "Add notice",
        path: "add-notice",
        element: <AddNotice />,
      },
    ],
  },
  {
    name: "Blog",
    children: [
      // {
      //   name: "Blogs",
      //   path: "blogs",
      //   element: <Blogs />,
      // },
      // {
      //   name: "Category",
      //   path: "category",
      //   element: <Category />,
      // },
    ],
  },
  {
    name: "Setting",
    children: [
      {
        name: "Exam Fee",
        path: "exam-fee",
        element: <ExamFees />,
      },

      {
        name: "Admission Fees",
        path: "admission-fee",
        element: <AdmissionFees />,
      },
      {
        name: "Monthly Fees",
        path: "monthly-fee",
        element: <MonthlyFees />,
      },
      {
        name: "Session Fees",
        path: "session-fee",
        element: <SessionFee />,
      },
      {
        name: "Registration Fees",
        path: "registration-fee",
        element: <RegistrationFees />,
      },
      {
        name: "Form Fill-up Fees",
        path: "form-fillup-fee",
        element: <FormFillUpFee />,
      },
      {
        name: "প্রশংসা পত্রের ফি",
        path: "prashansa-patro-fee",
        element: <LetterofAppreciation />,
      },
    ],
  },
];
