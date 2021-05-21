import { makeStyles } from "@material-ui/core/styles";

export const addFormStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFilledInput-root": {
      background: "rgb(243, 243, 243)",
    },
  },
  InputRowTwoPd: {
    paddingTop: "0px !important",
    [theme.breakpoints.up("sm")]: {
      paddingTop: "30px !important",
    },
  },
  InputRowTwoRl: {
    paddingTop: "25px !important",
    position: "relative",
    [theme.breakpoints.up("sm")]: {
      paddingTop: "30px !important",
    },
  },
  InputRowTwoAb: {
    position: "absolute",
    top: "2px",
    left: "10px",
    fontSize: "12px",
    [theme.breakpoints.up("sm")]: {
      top: "8px",
      left: "10px",
    },
  },
  AddFromBtnDoneAdd: {
    position: "relative",
    width: "300px",
    textAlign: "right", 
    marginTop: "20px"
  },
  AddFromBtnDoneUpdate: {
    position: "relative",
    width: "400px",
    textAlign: "right", 
    marginTop: "20px"
  },
  AddFromSucMsg: {
    position: "absolute",
    left: "20px",
    top: "5px",
    display: "flex",
    color: "#1bbb1b",
    fontStyle: "italic",
  },
  AddFromBtns: {
    marginRight: "10px"
  }
}));

export const listFormStyle = makeStyles({
    root: {
      width: "100%",
    },
    container: {
      maxHeight: 560,
    },
    ListEntryFirstBorder: {
      borderRight: "1px solid rgba(224, 224, 224, 1);",
    },
    ListEntryFooterBg: {
      background: "#3f51b5",
      borderBottom: "none !important",
    },
    ListEntryCurson: {
      cursor: "pointer",
    },
    ListEntryEdit: {
      color: "gray",
    },
    SnckBarBg: {
      background: "red",
    },
    ListEntryTotal: {
      color: "#fff"
    },
    ListEntryEmpty: {
      padding: "20px 0", 
      textAlign: "center"
    }
  });