import { useState } from "react";
import logo from "../../assets/react.svg";
import ChartsPage from "./ChartsPage/ChartsPage";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlinePayments } from "react-icons/md";
import { IoStatsChartSharp } from "react-icons/io5";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

const Dashboard = () => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const navlinks = [
    { id: 1, tittle: "Charts", icon: <IoStatsChartSharp /> },
    {
      id: 2,
      tittle: "Payment",
      icon: <MdOutlinePayments />,
      dropdown: ["BKash", "Card", "Nogod"],
    },
  ];
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1 bg-slate-950">
        <div className=" h-screen w-1/5 text-white fixed">
          <div className="flex justify-between  p-5 border-b border-slate-900 ">
            <img className=" h-7 w-7" src={logo} alt="logo" />
            <button className="btn p-3 rounded-lg bg-slate-900  flex justify-center items-center">
              <span>
                <LuLayoutDashboard />
              </span>
            </button>
          </div>
          <ul className="p-5">
            {navlinks.map((navlink) => (
              <li className="mb-2" key={navlink.id}>
                <a
                  href="#"
                  className="flex items-center justify-between text-white text-sm"
                >
                  <span className="flex items-center">
                    <span className="pr-2">{navlink.icon}</span>
                    {navlink.tittle}
                  </span>
                  {navlink.dropdown && (
                    <button onClick={() => setIsShowDropdown(!isShowDropdown)}>
                      {isShowDropdown ? (
                        <IoIosArrowDown />
                      ) : (
                        <IoIosArrowForward />
                      )}
                    </button>
                  )}
                </a>
                {isShowDropdown && (
                  <ul>
                    {navlink.dropdown
                      ? navlink.dropdown.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))
                      : ""}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className=" col-span-4 bg-slate-200">
        <ChartsPage />
      </div>
    </div>
  );
};

export default Dashboard;
