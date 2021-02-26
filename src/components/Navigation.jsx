import React from "react";
import { Github, LinkedIn, Medium } from "../assets/svg/icons"

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
            <li className="icon">
              <span className="main">
                <LinkedIn />
              </span>
            </li>
            <li className="icon">
              <span className="main">
                <Medium />
              </span>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    </>
  )
}
