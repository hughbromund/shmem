import React, { Component } from "react";
import { ReactComponent as Logo } from "../../assets/Logo.svg";

import classes from "./Header.module.css";

type Props = {};

type State = {};

export default class Header extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className={classes.wrapper}>
        <Logo className={classes.Logo} />
        SHMEM.io
      </div>
    );
  }
}
