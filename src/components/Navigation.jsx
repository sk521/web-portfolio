import React from "react";
import { Github, LinkedIn } from "../assets/svg/icons"

export const Navigation = () => {
  return (
    <>
    <nav className="navigation">
      <ul className="container">
        <li className="left">
          <ul>
            <li className="icon">
              <span className="main">
                <Github />
              </span>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <span className="main">
      <LinkedIn />
    </span>
    </>
  )
}
