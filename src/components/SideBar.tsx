import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useState } from "react";
import { FiHome } from "react-icons/fi";
import { RiAwardLine } from "react-icons/ri";

import sideBarStyle from "../styles/components/SideBar.module.css";



export function SideBar() {
  const [value, setValue] = useState(0);

  return (
    <div className={sideBarStyle.sideBarContainer}>
      <div>
        <img src="/Logo.svg" alt="Logo"/>
      </div>
      <div className={sideBarStyle.menu}>
        <BottomNavigation 
          value={value}
          className={sideBarStyle.buttonContainer}
          onChange={(e, v) => {
            setValue(v);
            
            
          }}
        >
          <BottomNavigationAction className="button" icon={<FiHome/>}/>
          <BottomNavigationAction className="button" icon={<RiAwardLine/>}/>
        </BottomNavigation>
      </div>
      <div>
      </div>
    </div>
  )
}