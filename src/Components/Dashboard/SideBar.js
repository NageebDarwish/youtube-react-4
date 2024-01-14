import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./bars.css";

import { NavLink, useNavigate } from "react-router-dom";
import { Menu } from "../../Context/MenuContext";
import { useContext, useEffect, useState } from "react";
import { WindowSize } from "../../Context/WindowContext";
import { USER } from "../../Api/Api";
import { Axios } from "../../Api/axios";
import { links } from "./NavLink";

export default function SideBar() {
  const menu = useContext(Menu);
  const WindowContext = useContext(WindowSize);
  const windowSize = WindowContext.windowSize;
  const isOpen = menu.isOpen;

  // User
  const [user, setUser] = useState("");
  const Navigate = useNavigate();
  useEffect(() => {
    Axios.get(`/${USER}`)
      .then((data) => setUser(data.data))
      .catch(() => Navigate("/login", { replace: true }));
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          display: windowSize < "768" && isOpen ? "block" : "none",
        }}
      ></div>
      <div
        className="side-bar pt-3 rounded shadow-sm"
        style={{
          left: windowSize < "768" ? (isOpen ? 0 : "-100%") : 0,
          width: isOpen ? "240px" : "70px",
          position: windowSize < "768" ? "fixed" : "sticky",
          transition: "0.2s",
        }}
      >
        {isOpen ? (
          <h5 className="text-center">Dashboard</h5>
        ) : (
          <>
            <h6 className="text-center mb-0">Dash</h6>
            <h6 className="text-center">board</h6>
          </>
        )}

        {links.map(
          (link, key) =>
            link.role.includes(user.role) && (
              <NavLink
                key={key}
                to={link.path}
                className={`d-flex align-items-center ${
                  !isOpen && "justify-content-center"
                } gap-2 side-bar-link mb-2 py-1`}
              >
                <FontAwesomeIcon
                  style={{
                    padding: isOpen ? "10px 8px 10px 15px" : "10px 13px",
                  }}
                  icon={link.icon}
                />
                <p
                  className="m-0"
                  style={{
                    display: isOpen ? "block" : "none",
                  }}
                >
                  {link.name}
                </p>
              </NavLink>
            )
        )}
      </div>
    </>
  );
}
