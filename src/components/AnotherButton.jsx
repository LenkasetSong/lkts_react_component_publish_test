import React from "react";
import { Button } from "antd";
import styles from "./AnotherButton.module.less";

export default function AnotherButton(props) {
  return <Button className={styles.btn}>{props.name}</Button>;
}
