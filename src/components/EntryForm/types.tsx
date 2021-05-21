export interface EntryFromI {
    StartService: string;
    EndService: string;
    ProcedureCode: string;
    Quantity: string;
    ServicePlace: string;
    DiagnosisPointersOne: string;
    DiagnosisPointersTwo: string;
    DiagnosisPointersThree: string;
    DiagnosisPointersFour: string;
    ModifiersOne: string;
    ModifiersTwo: string;
    ModifiersThree: string;
    ModifiersFour: string;
    NdcCode: string;
    NdcQuantity: string;
    BillAmount: string;
    ProviderEmail: string;
    ProviderPhone: string;
}
  
export interface EntryPropsI {
    updateDataValue: any;
    setUpdataDataValue: any;
}
  
export interface UserFormI {
    EntryFrom: EntryFromI;
    setEntryFrom: any;
    updateDataValue: any;
    setUpdataDataValue: any;
    formAddIsLoading: boolean;
}

export interface ListPropsI {
    setUpdataDataValue: any;    
}