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
              <a
                href="https://github.com/sk521"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="main">
                  <Github />
                </span>
              </a>
            </li>
            <li className="icon">
              <a
                href="https://www.linkedin.com/in/samuel-kwon/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="main">
                  <LinkedIn />
                </span>
              </a>
            </li>
            <li className="icon">
              <a
                href="https://medium.com/@samkwon521"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="main">
                  <Medium />
                </span>
              </a>
            </li>
          </ul>
        </li>
        <li className="right">
          <ul>
            <li>
              Home
            </li>
            <li>
              About
            </li>
            <li>
              Work
            </li>
            <li>
              Contact
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    </>
  )
}
