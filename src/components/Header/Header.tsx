import React, { Component } from "react";
import { ReactComponent as Logo } from "../../assets/Logo.svg";

import classes from "./Header.module.css";

var classNames = require("classnames");

enum Project {
  DubbClub = "DubbClub",
  Finex = "Finex",
}

type Props = {};

type State = {
  currentProject: Project | null;
};

export default class Header extends Component<Props, State> {
  state = {
    currentProject: null,
  };

  render() {
    return (
      <div className={classes.wrapper}>
        <div className={classes.inner}>
          <Logo className={classes.Logo} />
        </div>
        <div className={classes.container}>
          <span
            className={classNames(classes.project, {
              [classes.visible]: this.state.currentProject === Project.DubbClub,
            })}
          >
            DubbClub.
          </span>

          {/* <span
            className={classNames(classes.project, {
              [classes.visible]: this.state.currentProject === Project.Finex,
            })}
          >
            finex.
          </span> */}

          <span>
            <strong>shmem.io</strong>
          </span>
        </div>
        <button
          onClick={() => {
            this.setState({ currentProject: Project.DubbClub });
          }}
        >
          Dubb Club
        </button>
        <button
          onClick={() => {
            this.setState({ currentProject: Project.Finex });
          }}
        >
          FINEX
        </button>
        <button
          onClick={() => {
            this.setState({ currentProject: null });
          }}
        >
          Clear
        </button>
      </div>
    );
  }
}
