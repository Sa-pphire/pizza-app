import { useRouter } from 'next/navigation';
import { useEffect } from "react";

const NotFound = () => {
    const { push } = useRouter();
    useEffect(() => {
        setTimeout(() =>{
            push('/');
        }, 3000)
    }, []);
    return ( <div className="notfound">
    <h1>Ooopsss!</h1>
    <p> Page not found </p></div> );
}
 
export default NotFound;