import React, { Component } from "react";
import { ReactComponent as ShmemLogo } from "../../assets/ShmemLogo.svg";
import { Project } from "../Core/Core.tsx";

import styles from "./Header.module.css";

var classNames = require("classnames");

type Props = {
  selectedProject: Project | null;
};

type State = {};

export default class Header extends Component<Props, State> {
  state = {
    currentProject: null,
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <ShmemLogo className={styles.Logo} />
        </div>
        <div className={styles.container}>
          <span
            className={classNames(styles.project, {
              [styles.visible]: this.props.selectedProject === Project.DubbClub,
            })}
          >
            DubbClub.
          </span>

          <span
            className={classNames(styles.project, {
              [styles.visible]: this.props.selectedProject === Project.Finex,
            })}
          >
            finex.
          </span>

          <span>
            <strong>shmem.io</strong>
          </span>
        </div>
      </div>
    );
  }
}
