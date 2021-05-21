import React from "react";
import {Paper, Table, TableCell, TableBody, TableContainer, TableHead, 
  TablePagination, TableRow, Checkbox, LinearProgress, Snackbar } from "@material-ui/core";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import deleteIcon from "../../../assets/delete.svg";
import SearchIcon from "@material-ui/icons/Search";
import { DataMainType } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { ApidataFetchDetailsI } from "../../../redux/actions/types";
import { deletAllDatas, deletOneData } from "../../../redux/actions/EntryFromGetActions";
import { listFormStyle } from "../styles/materialStyles";
import { ListPropsI } from "../types";

const ListEntryFrom: React.FC<ListPropsI> = ({ setUpdataDataValue }) => {
  const classes = listFormStyle();
  const dispatch = useDispatch();
  const EntryFromData = useSelector(
    (state: DataMainType) => state.EntryFromGetData
  );
  const [SearchInputText, setSearchInputtext] = React.useState("");
  const [page, setPage] = React.useState(0);
  const [BilledTotal, setBilledTotal] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [reload, setreload] = React.useState(false);
  const [selectAll, setSelectAll] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  React.useEffect(() => {
    const countTotal = EntryFromData.data?.reduce(
      (sum: number, i: ApidataFetchDetailsI) =>
        (sum += i.Quantity * i.BillAmount),
      0
    );
    setBilledTotal(countTotal);
  }, [EntryFromData.data]);

  const allSelectHandle = (value: boolean) => {
    EntryFromData.data.forEach((e: any) => {
      e.isSelected = value;
    });
    var selectedIds: string[] = [];
    EntryFromData.data.forEach((e: any) => {
      if (e?.isSelected) {
        selectedIds.push(e.id);
      }
    });
    setSelectAll(!selectAll);
  };

  const onEditData = (data: ApidataFetchDetailsI) => {
    setUpdataDataValue(data);
  };

  const onSelect = (data: string) => {
    var getStock: any = EntryFromData.data?.find((el: any) => el.id === data);
    console.log("getStock", getStock);
    getStock.isSelected = getStock?.isSelected ? false : true;
    setreload(!reload);
  };

  const multiDelete = () => {
    var selectedIds: string[] = [];
    EntryFromData.data.forEach((e: any) => {
      if (e?.isSelected) {
        selectedIds.push(e.id);
      }
    });
    if (selectedIds.length == 0) {
      handleClick();
    } else {
      deleteAll({ ids: selectedIds });
    }
  };

  const deleteAll = async (data: object) => {
    dispatch(deletAllDatas(data));
  };

  const onDelete = async (data: string) => {
    dispatch(deletOneData(data));
  };

  var finalList =
    SearchInputText.length > 0
      ? EntryFromData.data.filter((data: ApidataFetchDetailsI) => {
          return data.ProcedureCode.toString().includes( SearchInputText.toString()); }) : EntryFromData.data;
  return (
    <div>
      <div className="ListFromSearchBox">
        <div className="ListFromSearchBoxFlex">
          <input
            type="text"
            placeholder="Search procedure code"
            onChange={(e) => setSearchInputtext(e.target.value)}
          />
          <div>
            <SearchIcon />
          </div>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Please select minimum one data"
      />
      <Paper className={classes.root}>
        {EntryFromData.loading && <LinearProgress />}
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.ListEntryFirstBorder}>
                  <Checkbox
                    color="primary"
                    id="allSelected"
                    checked={selectAll}
                    onChange={() => allSelectHandle(!selectAll)}
                  />
                </TableCell>
                <TableCell></TableCell>
                <TableCell>Line</TableCell>
                <TableCell align="center" colSpan={1}>
                  Dates of Service
                </TableCell>
                <TableCell align="center">Procedure Code</TableCell>
                <TableCell align="center">Qty</TableCell>
                <TableCell align="center">Diag. Pointers</TableCell>
                <TableCell align="center">Modifiers</TableCell>
                <TableCell align="center">Billed Amt</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {finalList.length === 0 ? (
                <TableRow>
                  <div className={classes.ListEntryEmpty}>
                    {EntryFromData.errorMessage == "" ? "No Data" : EntryFromData.errorMessage}
                  </div>
                </TableRow>
              ) : null}
              {EntryFromData.loading
                ? null
                : finalList
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((data: any, index: number) => {
                      return (
                        <TableRow role="checkbox" tabIndex={-1} key={data.id}>
                          <TableCell
                            align="center"
                            className={classes.ListEntryFirstBorder}
                          >
                            <Checkbox
                              color="primary"
                              checked={data?.isSelected ? true : false}
                              onClick={() => onSelect(data.id)}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <a
                              href="#update"
                              className={classes.ListEntryEdit}
                              onClick={() => onEditData(data)}
                            >
                              <EditOutlinedIcon />
                            </a>
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {index + 1}
                          </TableCell>
                          <TableCell align="center">
                            {data.StartService} - <br /> {data.EndService}
                          </TableCell>
                          <TableCell align="center">
                            {data.ProcedureCode}
                          </TableCell>
                          <TableCell align="center">{data.Quantity}</TableCell>
                          <TableCell align="center">
                            {data.DiagnosisPointers}
                          </TableCell>
                          <TableCell align="center">{data.Modifiers}</TableCell>
                          <TableCell align="center">
                            $ {data.BillAmount}
                          </TableCell>
                          <TableCell align="center">
                            <img
                              src={deleteIcon}
                              alt=""
                              onClick={(): any => onDelete(data.id)}
                              width="25px"
                              className={classes.ListEntryCurson}
                            />
                          </TableCell>
                        </TableRow>
                      );
                    })}
              <TableRow className={classes.ListEntryFooterBg}>
                <TableCell align="center">
                  <img
                    src={deleteIcon}
                    alt=""
                    width="25px"
                    onClick={() => multiDelete()}
                    className={classes.ListEntryCurson}
                  />
                </TableCell>
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell align="center" rowSpan={2} style={{color: "#fff"}} className={classes.ListEntryTotal}>
                  Total Billed <br />$ {BilledTotal}
                </TableCell>
                <TableCell />
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 15, 100]}
          component="div"
          count={EntryFromData.data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};
export default ListEntryFrom;
