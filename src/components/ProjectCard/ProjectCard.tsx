import React, { Component } from "react";
import styles from "./ProjectCard.module.css";
import { Project } from "../Core/Core.tsx";

type Props = {
  project: Project;
  name: string;
};

type State = {};

export default class ProjectCard extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className={styles.card}>
        <div>
          <strong>{this.props.name}</strong>
        </div>
      </div>
    );
  }
}
