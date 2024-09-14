import { createContext, useState } from 'react'

export const Datacontext = createContext(null)

const DataContext = (props) => {
    const [data, setdata] = useState("This is a test")
    return (
        <Datacontext.Provider value={[data, setdata]}>
            {props.children}
        </Datacontext.Provider>
    )
}

export default DataContext