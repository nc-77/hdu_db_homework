import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import "./ShoppingCart.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "400px",
    maxHeight: "600px",
    float: "left",
    margin: "0 25px 0 150px",
    fontSize: "12px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  actions: {
    fontSize: 14,
    position: "flex",
  },
}));

export default function ShoppingCart({
  cartInfo,
  orderInfo,
  OrderHandleChange,
  OrderHandleSubmit,
}) {
  const classes = useStyles();

  console.log(orderInfo);

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title={cartInfo[0].name.substring(0, 30)}
        subheader={`上架时间 ${cartInfo[0].created_at}`}
      />
      <CardMedia
        className={classes.media}
        image={cartInfo[0].img_url}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {cartInfo[0].text.substring(0, 145)}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <input
          className="card-form-input"
          type="number"
          name="number"
          placeholder="物品数量"
          value={"" || orderInfo.number}
          onChange={OrderHandleChange}
        />
        <label htmlFor="">交易时间</label>
        <input
          className="card-form-input"
          type="date"
          name="trade_date"
          placeholder="物品名称"
          value={orderInfo.trade_date || ""}
          onChange={OrderHandleChange}
        />

        {/* <TextField id="firstName" label="First name" /> */}
        <button type="submit" onClick={OrderHandleSubmit}>
          购买
        </button>
      </CardActions>
      {/* <CardActions className={classes.actions}>
        <InlineForm />
      </CardActions> */}
    </Card>
  );
}
