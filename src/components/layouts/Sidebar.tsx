import dblogo from "../../assets/images/dblogo.png";
import { Layout, Menu } from "antd";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.route";
import { useAppSelector } from "../../redux/hooks";
const { Sider } = Layout;
const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

// Define a default user
const defaultUser = {
  role: userRole.ADMIN,
};

const Sidebar = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  //   const user = useAppSelector(selectCurrentUser);
  console.log(theme);
  let sidebarItems;

  // Use the default user for now
  const user = defaultUser;

  switch (user.role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
      break;
    // case userRole.FACULTY:
    //   sidebarItems = sidebarItemsGenerator(facultyPaths, userRole.FACULTY);
    //   break;
    // case userRole.STUDENT:
    //   sidebarItems = sidebarItemsGenerator(studentPaths, userRole.STUDENT);
    //   break;

    default:
      break;
  }

  return (
    <Sider
      theme={theme ? "light" : "dark"}
      breakpoint="lg"
      collapsedWidth="0"
      style={{
        height: "100vh",
        position: "sticky",
        top: "0",
        left: "0",
      }}
    >
      <div
        className="border-bottom "
        style={{
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={dblogo} alt="" width={150} />
      </div>
      <Menu
        theme={theme ? "light" : "dark"}
        mode="vertical"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
