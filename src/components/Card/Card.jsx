import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardMUI from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    boxShadow: "-1px 1px 25px 0px rgba(0,0,0,.5)",
    margin: "16px",
    borderRadius: "8px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  date: {
    fontSize: 14,
    alignSelf: "flex-end",
  },
  pos: {
    marginBottom: 12,
    marginTop: 16,
  },
  cardContent: {
    display: "flex",
    flexDirection: "row",
    minWidth: "40vw",
  },
  contentLeft: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    maxWidth: 255,
  },
  contentRight: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  icon: {
    marginLeft: "8px",
    cursor: "pointer",
  },
});

const Card = (props) => {
  const { priority, creation_date, description, id, handleDelete, handleEdit } =
    props.item;
  const classes = useStyles();
  return (
    <>
      <CardMUI className={classes.root}>
        <CardContent className={classes.cardContent}>
          <div className={classes.contentLeft}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Priority: <i>{priority ?? "No priority"}</i>
            </Typography>
            <Typography variant="h5" component="h2">
              TODO #<i>{id ?? "No id"}</i>
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {description ?? "No description"}
            </Typography>
          </div>
          <div className={classes.contentRight}>
            <Typography
              className={classes.date}
              color="textSecondary"
              gutterBottom
            >
              Creation date: <i>{creation_date ?? "xx.xx.xxxx"}</i>
            </Typography>
            <div className={classes.actions}>
              <EditIcon
                className={classes.icon}
                onClick={() => handleEdit(id)}
              />
              <DeleteForeverIcon
                className={classes.icon}
                onClick={() => handleDelete(id)}
              />
            </div>
          </div>
        </CardContent>
      </CardMUI>
    </>
  );
};

export default Card;