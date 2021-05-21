import React from "react";
import { Button, InputAdornment, TextField, Grid, } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import {addFormStyles} from "../styles/materialStyles";
import { useHistory } from "react-router-dom";
import { UserFormI } from "../types";

const UserForm: React.FC<UserFormI> = ({ EntryFrom, setEntryFrom, updateDataValue, setUpdataDataValue, 
  formAddIsLoading }) => {
  const classes = addFormStyles();
  const history = useHistory();
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              id="start-of-service"
              label="start of service"
              type="date"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              value={EntryFrom.StartService}
              variant="filled"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEntryFrom({ ...EntryFrom, StartService: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              fullWidth
              id="End-of-service"
              label="End of service"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              value={EntryFrom.EndService}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEntryFrom({ ...EntryFrom, EndService: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} sm={4} container justify="space-between">
            <TextField
              id="procedure-code"
              style={{ width: "75%" }}
              required
              fullWidth
              label="Procedure Code"
              type="text"
              variant="filled"
              value={EntryFrom.ProcedureCode}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEntryFrom({ ...EntryFrom, ProcedureCode: e.target.value })
              }
            />
            <TextField
              id="filled-number"
              style={{ width: "20%" }}
              label="Qty"
              required
              fullWidth
              type="number"
              variant="filled"
              value={EntryFrom.Quantity}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEntryFrom({ ...EntryFrom, Quantity: e.target.value })
              }
            />
          </Grid>
        </Grid>
        <Grid item xs={12} container spacing={2}>
          <Grid item xs={12} className={classes.InputRowTwoPd} sm={4}>
            <TextField
              required
              fullWidth
              id="lace-of-service"
              label="Place of service"
              type="text"
              variant="filled"
              value={EntryFrom.ServicePlace}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEntryFrom({ ...EntryFrom, ServicePlace: e.target.value })
              }
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            className={classes.InputRowTwoRl}
            container
            justify="space-between"
            spacing={0}
          >
            <div className={classes.InputRowTwoAb}>Diagnoise Pointers</div>
            <TextField
              required
              id="dp-1"
              style={{ width: "22%" }}
              label="DP 1"
              type="text"
              variant="filled"
              value={EntryFrom.DiagnosisPointersOne}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEntryFrom({
                  ...EntryFrom,
                  DiagnosisPointersOne: e.target.value,
                })
              }
            />
            <TextField
              id="dp-2"
              label="DP 2"
              style={{ width: "22%" }}
              type="text"
              variant="filled"
              value={EntryFrom.DiagnosisPointersTwo}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEntryFrom({
                  ...EntryFrom,
                  DiagnosisPointersTwo: e.target.value,
                })
              }
            />
            <TextField
              id="dp-3"
              style={{ width: "22%" }}
              label="DP 3"
              type="text"
              variant="filled"
              value={EntryFrom.DiagnosisPointersThree}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEntryFrom({
                  ...EntryFrom,
                  DiagnosisPointersThree: e.target.value,
                })
              }
            />
            <TextField
              id="dp-4"
              style={{ width: "22%" }}
              label="DP 4"
              type="text"
              variant="filled"
              value={EntryFrom.DiagnosisPointersFour}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEntryFrom({
                  ...EntryFrom,
                  DiagnosisPointersFour: e.target.value,
                })
              }
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            className={classes.InputRowTwoRl}
            justify="space-between"
            container
            spacing={0}
          >
            <div className={classes.InputRowTwoAb}>Modifiers</div>
            <TextField
              required
              style={{ width: "22%" }}
              id="md-1"
              label="MD 1"
              type="text"
              variant="filled"
              value={EntryFrom.ModifiersOne}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEntryFrom({ ...EntryFrom, ModifiersOne: e.target.value })
              }
            />
            <TextField
              id="md-2"
              style={{ width: "22%" }}
              label="MD 2"
              type="text"
              variant="filled"
              value={EntryFrom.ModifiersTwo}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEntryFrom({ ...EntryFrom, ModifiersTwo: e.target.value })
              }
            />
            <TextField
              id="md-3"
              style={{ width: "22%" }}
              label="MD 3"
              type="text"
              variant="filled"
              value={EntryFrom.ModifiersThree}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEntryFrom({ ...EntryFrom, ModifiersThree: e.target.value })
              }
            />
            <TextField
              id="md-4"
              style={{ width: "22%" }}
              label="MD 4"
              type="text"
              variant="filled"
              value={EntryFrom.ModifiersFour}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEntryFrom({ ...EntryFrom, ModifiersFour: e.target.value })
              }
            />
          </Grid>
        </Grid>

        <Grid item xs={12} container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              id="ndc-code"
              label="NDC Code"
              type="text"
              variant="filled"
              value={EntryFrom.NdcCode}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEntryFrom({ ...EntryFrom, NdcCode: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              id="ndc-qunatity"
              label="NDC Quantity"
              type="text"
              variant="filled"
              value={EntryFrom.NdcQuantity}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEntryFrom({ ...EntryFrom, NdcQuantity: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              id="billed-amount"
              label="Billed Amount"
              type="text"
              variant="filled"
              value={EntryFrom.BillAmount}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEntryFrom({
                  ...EntryFrom,
                  BillAmount: e.target.value,
                })
              }
            />
          </Grid>
        </Grid>

        <Grid item xs={12} container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              id="provider-email-adree"
              variant="filled"
              required
              fullWidth
              type="email"
              label="Provider Email Address"
              value={EntryFrom.ProviderEmail}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEntryFrom({
                  ...EntryFrom,
                  ProviderEmail: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="provider-phone"
              variant="filled"
              required
              fullWidth
              type="text"
              label="Provider Phone"
              value={EntryFrom.ProviderPhone}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEntryFrom({ ...EntryFrom, ProviderPhone: e.target.value })
              }
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="flex-end">
        <div
          className={
            updateDataValue === undefined
              ? classes.AddFromBtnDoneAdd
              : classes.AddFromBtnDoneUpdate
          }
        >
          {formAddIsLoading ? (
            <div className={classes.AddFromSucMsg}>
              <DoneIcon />
              <div>
                {updateDataValue !== undefined
                  ? "Updating data"
                  : "Adding data"}
              </div>
            </div>
          ) : null}
          {updateDataValue !== undefined && (
            <Button
              variant="contained"
              className={classes.AddFromBtns} 
              color="primary"
              style={{marginRight: "10px"}}
              onClick={() => {
                setUpdataDataValue(undefined);
                history.push("/");
              }}
            >
              Cancel
            </Button>
          )}
          <Button variant="contained" type="submit" color="primary">
            {updateDataValue !== undefined ? "update" : "Add"}
          </Button>
        </div>
      </Grid>
    </>
  );
};

export default UserForm;
