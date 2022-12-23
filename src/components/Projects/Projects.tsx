import React, { Component } from "react";
import ProjectCard from "../ProjectCard/ProjectCard.tsx";
import { Project } from "../Core/Core.tsx";

type Props = {};

type State = {};

export default class Projects extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div>
        <h1>Projects</h1>
        <ProjectCard name={"DubbClub"} project={Project.DubbClub} />
        <ProjectCard name={"FINEX"} project={Project.Finex} />
      </div>
    );
  }
}
