import { createContext, useReducer } from "react";
import P from 'prop-types'
import { reducer } from "../../utils/reducer";

export const HomeContext = createContext()

export const AppContext = ({ children }) => {
    const [messages, dispatch] = useReducer(reducer, [])

    return <HomeContext.Provider value={{ messages, dispatch }}>{children}</HomeContext.Provider>
}

AppContext.propTypes = {
    children: P.node,
}

