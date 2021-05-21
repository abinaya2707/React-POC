import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import EntryForm from "../components/entryForm/entryForm";

afterEach(cleanup);
it("should render my component", () => {
    render(<EntryForm />);
    const InputID = screen.getByTestId("EntryFrom");
    expect(InputID).toBeInTheDocument();
  });


// import React from 'react';
// import { render } from '@testing-library/react';
// import EntryForm from "../components/entryForm/entryForm";;
// import { Provider } from 'react-redux'
// import configureStore from 'redux-mock-store'



// describe('With React Testing Library', () => {
//   const initialState = {output:10}
//   const mockStore = configureStore()
//   let store,wrapper

//   it('Shows "Hello world!"', () => {
//     store = mockStore(initialState)
//     const { getByTestId } = render(<Provider store={store}><EntryForm /></Provider>)
//     expect(getByTestId("EntryFrom")).toBeInTheDocument();
//   })
// })