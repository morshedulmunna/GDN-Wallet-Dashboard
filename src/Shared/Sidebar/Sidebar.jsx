import React from "react";
import logo from "../../Assect/logo.png";
import {
  dashboard,
  news,
  wallet,
  exchange,
  transactions,
  statistics,
} from "../../Assect/Icons/icons";

const menu = [
  {
    id: 1,
    name: "Dashboard",
    icon: dashboard,
  },
  {
    id: 2,
    name: "Wallet",
    icon: wallet,
  },
  {
    id: 3,
    name: "Statistics",
    icon: statistics,
  },
  {
    id: 4,
    name: "Transactions",
    icon: transactions,
  },
  {
    id: 5,
    name: "Exchange",
    icon: exchange,
  },
  {
    id: 6,
    name: "News",
    icon: news,
  },
];

const Sidebar = () => {
  return (
    <div className="border-r-[1px] border-r-gray-300 h-[100vh] ">
      <div>
        <div className={styles.logo}>
          <img src={logo} alt="" />
          <p className="pl-3">GND WALLET</p>
        </div>
        {/* Menu==> */}
        <div className="menu">
          {menu.map((menuItem) => (
            <div key={menuItem.id} className={styles.dashboard}>
              <img src={menuItem.icon} alt="" />
              <p className="pl-5 text-gray-400"> {menuItem.name} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

// All Style

const styles = {
  logo: "logo flex items-center justify-start py-10 px-12",
  dashboard: "flex items-center justify-start px-12 py-5",
};
