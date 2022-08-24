import React, { useEffect, useState } from "react";
import classes from "../style/square.module.css";
import { colors } from "../theme/colors";
import { Unit } from "../types/types";

const Square = ({
  fillColor,
  index,
  className,
  unit,
}: {
  fillColor: boolean;
  index: number;
  className: string;
  unit: Unit;
}) => {
  const [visible, setVisible] = useState(false);
  const backgroundColor = fillColor ? "white" : colors.secondary;

  const getTimeOut = (type: Unit) => {
    if (type === "Weeks") {
      return 0.5 * index;
    }

    if (type === "Months") {
      return 2 * index;
    }
    if (type === "Years") {
      return 10 * index;
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, getTimeOut(unit));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getTimeOut]);

  const shouldPrint = index % 260 === 0;

  return (
    <>
      {visible ? (
        <div className={classes.squareContainer}>
          <div className={className} style={{ backgroundColor }} />
          {shouldPrint && unit === "Weeks" && (
            <p className={classes.number}>{(index * 5) / 260} </p>
          )}
        </div>
      ) : null}
    </>
  );
};

export default Square;
