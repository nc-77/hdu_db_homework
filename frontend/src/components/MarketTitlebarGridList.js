import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import "./TitlebarGridList.css";
import { CssBaseline } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    float: "left",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    width: "100vh",
    height: "92vh",
  },
  contact: {
    display: "none",
    position: "absolute",
    zIndex: "100",
    width: "200px",
    height: "100px",
    textAlign: "center",
    right: "0%",
    bottom: "20%",
    fontSize: "2px",
    background: "#02257c",
    opacity: "0.9",
    border: "2px solid #83c7e3",
    color: "#fff",
    borderRadius: "25px",
  },
}));

export default function MarketTitlebarGridList({ info, handleChange }) {
  const classes = useStyles();

  return (
    <CssBaseline>
      <div className={classes.root}>
        <GridList cellHeight={360} className={classes.gridList}>
          {info.map((item) => (
            <GridListTile key={item.id} className={`listTile-${item.id}`}>
              <img src={item.img_url} alt={item.text} />
              <aside className={classes.contact}>
                {item.id}
                <br />
                {item.name}
                <br />
                {item.label}
              </aside>
              <GridListTileBar
                title={item.name}
                subtitle={<span>分类 {item.label}</span>}
                actionIcon={
                  <IconButton
                    aria-label={`${item.name}`}
                    className={classes.icon}
                    onClick={handleChange}
                  >
                    <AddShoppingCartIcon aria-label={`${item.name}`} />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </CssBaseline>
  );
}
