import React from "react";
import AddForm from "./screen/addForm";
import ListEntryFrom from "./screen/listEntryForm";

const EntryForm: React.FC = (): JSX.Element => {
  const [updateDataValue, setUpdataDataValue] = React.useState();
  return (
    <div className="EntryFormHead" id="update" data-testid="EntryFrom">
      <div className="EntryFormTitle">Entry from</div>
      <div className="EntryFormAdd">
        <div className="EntryFormAddTitle">
          Detail Line Information
        </div>
        <AddForm
          updateDataValue={updateDataValue}
          setUpdataDataValue={setUpdataDataValue}
        />
        <hr />
        <div className="ListForm">
          <ListEntryFrom setUpdataDataValue={setUpdataDataValue} />
        </div>
      </div>
    </div>
  );
};

export default EntryForm;
