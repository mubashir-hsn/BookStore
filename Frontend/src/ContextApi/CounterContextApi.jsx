import { createContext, useState } from "react";

export const CounterContext = createContext();  // Ensure this is exported correctly

export const CounterProvider = ({ children }) => {
    const [count, setcount] = useState(0);  // Ensure the state is properly defined

    return (
        <CounterContext.Provider value={{ count, setcount }}>
            {children}
        </CounterContext.Provider>
    );
};
