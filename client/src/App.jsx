import Sidebar from "./components/Sidebar";
import piechart from "./assets/pie-chart.png";
import { SidebarItem } from "./components/Sidebar";
import dashboardIcon from "./assets/budget.png";
import logo from "./assets/logo.svg";

function App() {
  const sidebarItems = [
    {
      id: 1,
      icon: dashboardIcon,
      text: "Dashboard",
      active: true,
      alert: false,
    },
    {
      id: 2,
      icon: piechart,
      text: "Statistics",
      active: false,
      alert: true,
    },
  ];

  return (
    <>
      <Sidebar>
        <SidebarItem icon={dashboardIcon} text="Dashboard" active alert />
        <SidebarItem icon={piechart} text="Statistics" active alert />
      </Sidebar>
    </>
  );
}

export default App;
