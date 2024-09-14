import { useContext } from 'react';
import { Postcontext } from '../context/Postcontext'; // Import the named context

const Comp2 = () => {
    const [post, setPost] = useContext(Postcontext); // Access Postcontext with correct casing
    return (
        <div>
            <h2>Comp 2</h2>
            <p>{post}</p>
        </div>
    );
}

export default Comp2;