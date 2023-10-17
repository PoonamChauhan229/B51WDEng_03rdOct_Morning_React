import { createContext } from "react";

const ModeContext=createContext()
export default ModeContext;

// create the context =>createContext
// Provide the context with the value =>ModeContext.Provider
//Subscribe to the context => useContext(ModeContext)