import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import "./MarketTitlebarGridList.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    float: "left",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    width: "94vh",
    height: "90vh",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
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

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

{
  /* <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
            <ListSubheader component="div" className={classes.subHeader}>
              货物
            </ListSubheader>
          </GridListTile> */
}

export default function TitlebarGridList({ MarketInfo }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={360} className={classes.gridList}>
        {MarketInfo.map((item) => (
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
                  aria-label={`info about ${item.text}`}
                  className={classes.icon}
                >
                  <AddShoppingCartIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}