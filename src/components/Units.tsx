import { Button } from "@mui/material";
import React from "react";
import { units } from "../helpers/util";
import { IUnit } from "../types/types";
import classes from "../style/units.module.css";

const Units = ({ unitState, setUnit }: { unitState: IUnit; setUnit: any }) => {
  return (
    <div className={classes.units}>
      {units.map((unit) => {
        return (
          <Button
            variant="outlined"
            onClick={() => setUnit(unit)}
            style={{ margin: "5px", color: "white", borderColor: "white" }}
          >
            {unit.text}
          </Button>
        );
      })}
    </div>
  );
};

export default Units;
