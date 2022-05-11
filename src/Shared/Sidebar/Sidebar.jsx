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
import mobileApp from "../../Assect/Images/mobileApp.png";

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
    <div className={styles.sidebar}>
      <div className={styles.wrapper}>
        <div>
          <div className={styles.logo}>
            <img src={logo} alt="" />
            <p className="pl-3">GND WALLET</p>
          </div>
          {/* Menu==> */}
          <div className="menu">
            {menu.map((sideNav) => (
              <div key={sideNav.id} className={styles.sideNav}>
                <img src={sideNav.icon} alt="" />
                <p className={styles.name}> {sideNav.name} </p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.appdowenload}>
          <div>
            <img className="mt-[-100px]" src={mobileApp} alt="" />
            <button className={styles.dowenloadBtn}>Dowenload</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

// All Style
const styles = {
  sideNav: "flex items-center justify-start px-12 py-5 ",
  wrapper: " flex flex-col justify-between h-[100vh] ",
  logo: "logo flex items-center justify-start py-10 px-12",
  sidebar: "border-r-[1px] border-r-gray-800 h-[100vh]",
  name: "cursor-pointer pl-5 text-gray-400",
  appdowenload:
    "bg-gray-700 w-[70%] rounded-lg mx-auto flex items-center justify-center py-5 mb-5",
  dowenloadBtn:
    "mt-5 w-full bg-[#6855FC]  py-1 rounded-full hover:bg-[#5242cc] ease-in-out duration-300",
};
