import React, { Component } from "react";
import ProjectCard from "../ProjectCard/ProjectCard.tsx";
import { Project } from "../Core/Core.tsx";

import styles from "./Projects.module.css";

type Props = {};

type State = {};

export default class Projects extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div>
        <h1>Projects</h1>
        <div className={styles.projectCardWrapper}>
          <ProjectCard name={"DubbClub"} project={Project.DubbClub} />
          <ProjectCard name={"FINEX"} project={Project.Finex} />
          <ProjectCard name={"MarketGoBrr"} project={Project.MarketGoBrr} />
          <ProjectCard name={"Justifi"} project={Project.Justifi} />
        </div>
      </div>
    );
  }
}
