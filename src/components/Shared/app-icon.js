import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* AppIcon is a resuable component that provides additional and consistent styling for Icons. Wraps the FontAwesomeIcon. */

const AppIcon = (props) => {
  const {
    standardLeftMargin,
    standardRightMargin,
    wideLeftMargin,
    wideRightMargin,
    ...rest
  } = props;
  const styles = {};
  if (standardLeftMargin) {
    styles.marginLeft = ".5em";
  } else if (wideLeftMargin) {
    styles.marginLeft = "1em";
  }
  if (standardRightMargin) {
    styles.marginRight = ".5em";
  } else if (wideRightMargin) {
    styles.marginRight = "1em";
  }

  return <FontAwesomeIcon {...rest} style={styles} />;
};

export default AppIcon;
