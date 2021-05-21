import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {fetchDatas,updateData,addData } from "../../../redux/actions/EntryFromGetActions";
import { EntryFromI, EntryPropsI } from "../types";
import { addFormStyles } from "../styles/materialStyles";
import UserForm from "./userForm";

const EntryFormDatas = {
  StartService: "",
  EndService: "",
  ProcedureCode: "",
  Quantity: "",
  ServicePlace: "",
  DiagnosisPointersOne: "",
  DiagnosisPointersTwo: "",
  DiagnosisPointersThree: "",
  DiagnosisPointersFour: "",
  ModifiersOne: "",
  ModifiersTwo: "",
  ModifiersThree: "",
  ModifiersFour: "",
  NdcCode: "",
  NdcQuantity: "",
  BillAmount: "",
  ProviderEmail: "",
  ProviderPhone: "",
};

const AddForm: React.FC<EntryPropsI> = ({updateDataValue,
  setUpdataDataValue,
}) => {
  const dispatch = useDispatch();
  const [formAddIsLoading, setFormAddIsLoading] = useState(false);
  const [EntryFrom, setEntryFrom] = useState<EntryFromI>(EntryFormDatas);
  const history = useHistory();
  const classes = addFormStyles();

  useEffect(() => {
    dispatch(fetchDatas());
  }, []);

  useEffect(() => {
    if (updateDataValue !== undefined) {
      var {
        Modifiers, DiagnosisPointers, BillAmount, EndService, NdcCode, NdcQuantity,
        ProcedureCode, ProviderEmail, ProviderPhone, Quantity, ServicePlace, StartService,
      } = updateDataValue;
      DiagnosisPointers = DiagnosisPointers?.split(",");
      Modifiers = Modifiers?.split(",");
      var DiagnosisPointersOne = DiagnosisPointers[0] ? DiagnosisPointers[0]: "";
      var DiagnosisPointersTwo = DiagnosisPointers[1] ? DiagnosisPointers[1] : "";
      var DiagnosisPointersThree = DiagnosisPointers[2] ? DiagnosisPointers[2] : "";
      var DiagnosisPointersFour = DiagnosisPointers[3] ? DiagnosisPointers[3] : "";

      var ModifiersOne = Modifiers[0] ? Modifiers[0] : "";
      var ModifiersTwo = Modifiers[1] ? Modifiers[1] : "";
      var ModifiersThree = Modifiers[2] ? Modifiers[2] : "";
      var ModifiersFour = Modifiers[3] ? Modifiers[3] : "";
      setEntryFrom({
        StartService: StartService,
        EndService: EndService,
        ProcedureCode: ProcedureCode,
        Quantity: Quantity,
        ServicePlace: ServicePlace,
        DiagnosisPointersOne: DiagnosisPointersOne,
        DiagnosisPointersTwo: DiagnosisPointersTwo,
        DiagnosisPointersThree: DiagnosisPointersThree,
        DiagnosisPointersFour: DiagnosisPointersFour,
        ModifiersOne: ModifiersOne,
        ModifiersTwo: ModifiersTwo,
        ModifiersThree: ModifiersThree,
        ModifiersFour: ModifiersFour,
        NdcCode: NdcCode,
        NdcQuantity: NdcQuantity,
        BillAmount: BillAmount,
        ProviderEmail: ProviderEmail,
        ProviderPhone: ProviderPhone,
      });
    }
  }, [updateDataValue]);

  const EntryFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormAddIsLoading(true);
    addFrom();
  };
  const addFrom = async () => {
    const Diangonsis = [];
    EntryFrom.DiagnosisPointersOne.length > 0 && Diangonsis.push(EntryFrom.DiagnosisPointersOne);
    EntryFrom.DiagnosisPointersTwo.length > 0 && Diangonsis.push(EntryFrom.DiagnosisPointersTwo);
    EntryFrom.DiagnosisPointersThree.length > 0 && Diangonsis.push(EntryFrom.DiagnosisPointersThree);
    EntryFrom.DiagnosisPointersFour.length > 0 && Diangonsis.push(EntryFrom.DiagnosisPointersFour);
    const AllDiangonsis = Diangonsis.join(",");

    const Modifierss = [];
    EntryFrom.ModifiersOne.length > 0 && Modifierss.push(EntryFrom.ModifiersOne);
    EntryFrom.ModifiersTwo.length > 0 && Modifierss.push(EntryFrom.ModifiersTwo);
    EntryFrom.ModifiersThree.length > 0 && Modifierss.push(EntryFrom.ModifiersThree);
    EntryFrom.ModifiersFour.length > 0 && Modifierss.push(EntryFrom.ModifiersFour);
    const AllModifiers = Modifierss.join(",");

    const IntegerFiles = {
      EntryQunatity: parseInt(EntryFrom.Quantity),
      EntryBillAmount: parseInt(EntryFrom.BillAmount),
      EntryProcedureCode: parseInt(EntryFrom.ProcedureCode),
      EntryNdcCode: parseInt(EntryFrom.NdcQuantity),
      EntryNdcQuantity: parseInt(EntryFrom.NdcQuantity),
    };

    const newData = {
      StartService: EntryFrom.StartService,
      EndService: EntryFrom.EndService,
      ProcedureCode: IntegerFiles.EntryProcedureCode,
      Quantity: IntegerFiles.EntryQunatity,
      ServicePlace: EntryFrom.ServicePlace,
      DiagnosisPointers: AllDiangonsis,
      Modifiers: AllModifiers,
      NdcCode: IntegerFiles.EntryNdcCode,
      NdcQuantity: IntegerFiles.EntryNdcQuantity,
      BillAmount: IntegerFiles.EntryBillAmount,
      ProviderEmail: EntryFrom.ProviderEmail,
      ProviderPhone: EntryFrom.ProviderPhone,
    };

    if (updateDataValue === undefined) {
      await dispatch(addData(newData));
      setEntryFrom(EntryFormDatas);
      setFormAddIsLoading(false);
    } else {
      await dispatch(updateData(updateDataValue.id, newData));
      setUpdataDataValue(undefined);
      history.push("/");
      setEntryFrom(EntryFormDatas);
      setFormAddIsLoading(false);
    }
  };
  return (
    <>
      <form
        autoComplete="off"
        onSubmit={EntryFormHandler}
        className={`${classes.root} FormMainClass`}
      >
        <UserForm
          EntryFrom={EntryFrom}
          setEntryFrom={setEntryFrom}
          updateDataValue={updateDataValue}
          setUpdataDataValue={setUpdataDataValue}
          formAddIsLoading={formAddIsLoading}
        />
      </form>
    </>
  );
};

export default AddForm;
