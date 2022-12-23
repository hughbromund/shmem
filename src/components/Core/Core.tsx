import React, { Component } from "react";
import Header from "../Header/Header.tsx";
import Projects from "../Projects/Projects.tsx";

import styles from "./Core.module.css";

export const enum Project {
  DubbClub,
  Finex,
  StarStats,
  Justifi,
  MarketGoBrr,
}

type Props = {};

type State = {
  selectedProject: Project | null;
};

export default class Core extends Component<Props, State> {
  state = {
    selectedProject: null,
  };

  render() {
    return (
      <div>
        <Header selectedProject={this.state.selectedProject} />
        <div className={styles.headerPadding}>
          <Projects />
          <h1>People</h1>
        </div>
      </div>
    );
  }
}
