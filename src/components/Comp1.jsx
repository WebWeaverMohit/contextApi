import { useContext } from 'react'
import { Datacontext } from '../context/Datacontext'

const Comp1 = () => {
    const [data, setdata] = useContext(Datacontext)
    return (
        <div>
            <h2>Comp 1</h2>
            <p>{data}</p>
        </div>
    )
}

export default Comp1