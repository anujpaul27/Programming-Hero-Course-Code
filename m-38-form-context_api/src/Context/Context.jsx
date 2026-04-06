import React, { createContext } from 'react';
export const FormContext = createContext(null)

const Context = ({ children }) => {
    const obj = { val: 'context' }
    return (
        <FormContext.Provider value={obj}>
            {children}
        </FormContext.Provider >
    );
};

export default Context;