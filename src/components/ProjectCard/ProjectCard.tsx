import React, { Component } from "react";
import styles from "./ProjectCard.module.css";
import { Project } from "../Core/Core.tsx";
import ShmemLogo from "../../assets/ShmemLogo.svg";
import DubbClubLogo from "../../assets/DubbClubLogo.svg";
import FinexLogo from "../../assets/FinexLogo.svg";
import MarketGoBrrLogo from "../../assets/MarketGoBrrLogo.svg";
import JustifiLogo from "../../assets/JustifiLogo.png";

var classNames = require("classnames");

type Props = {
  project: Project;
  name: string;
};

type State = {};

export default class ProjectCard extends Component<Props, State> {
  state = {};

  render() {
    var logo = ShmemLogo;
    var uniqueStyle = "";
    switch (this.props.project) {
      case Project.DubbClub: {
        logo = DubbClubLogo;
        uniqueStyle = styles.DubbClubCard;
        break;
      }
      case Project.Finex: {
        logo = FinexLogo;
        uniqueStyle = styles.FinexCard;
        break;
      }
      case Project.MarketGoBrr: {
        logo = MarketGoBrrLogo;
        uniqueStyle = styles.MarketGoBrrCard;
        break;
      }
      case Project.Justifi: {
        logo = JustifiLogo;
        uniqueStyle = styles.JustifiCard;
        break;
      }
    }

    return (
      <div className={classNames(styles.card, uniqueStyle)}>
        <div className={styles.topSection}>
          <div>
            <img
              className={styles.projectLogo}
              src={logo}
              alt={this.props.name + " logo"}
            />
          </div>
          <div className={styles.infoSection}>
            <strong>{this.props.name}</strong>
          </div>
        </div>
      </div>
    );
  }
}
