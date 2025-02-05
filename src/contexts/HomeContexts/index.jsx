import { createContext, useReducer } from "react";
import P from 'prop-types'
import { reducer } from "../../utils/reducer";
import { data } from "./data";

export const HomeContext = createContext()

export const AppContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, data)

    return <HomeContext.Provider value={{ state, dispatch }}>{children}</HomeContext.Provider>
}

AppContext.propTypes = {
    children: P.node,
}

