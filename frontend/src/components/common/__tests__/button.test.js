import React from 'react';
import ReactDOM from 'react-dom'
import  Button  from '../Button';

import {render} from '@testing-library/react';

it("render without crashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>,div);
})
it("render button correctly",()=>{
   const {getByTestId} = render(<Button label="save"></Button>)
   expect(getByTestId("button")).toHaveTextContent("save");
})
