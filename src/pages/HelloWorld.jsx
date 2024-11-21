import { useLocation } from "react-router-dom";

const HelloWorld = () => {

    const location = useLocation();
    const { state } = location || {};
    const { uname, jwt } = state || {}

    console.log("JWT - " + jwt)

    return ( 
        <div>
            <h3 className="text-4xl text-slate-800 font-bold"> Hello {uname}....!</h3>
        </div>
     );
}
 
export default HelloWorld;