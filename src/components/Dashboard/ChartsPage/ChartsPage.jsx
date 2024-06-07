import Navbar from "./Navbar";
import Table from "./ChartPageComponents/Table";
import ChartsCard from "./ChartPageComponents/ChartsCard";
import SidebarTable from "./ChartPageComponents/SidebarTable";

const ChartsPage = () => {
  return (
    <div className="p-5">
      <Navbar />
      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-3">
          <ChartsCard />
          <Table />
        </div>
        <div className="col-span-1">
          <SidebarTable />
        </div>
      </div>
    </div>
  );
};

export default ChartsPage;
