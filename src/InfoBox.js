import React from "react";
import "./InfoBox.css";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, active, isRed, isOrange, total, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox__selected"} ${
        isRed && "infoBox__isRed"
      } ${isOrange && "infoBox__isOrange"}`}
    >
      <CardContent>
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>
        <h2
          className={`infoBox__cases ${`${
            !isRed && !isOrange && "infoBox__cases--green"
          }`}`}
        >
          {cases}
        </h2>
        <Typography className="infoBox__total" color="textSecondary">
          Total: {total}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
