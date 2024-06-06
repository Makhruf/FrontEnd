import { createContext, useState } from "react";
import ContextComp1 from "../component/ContextComp1";
import ContextComp2 from "../component/ContextComp2";
import Animasi from "../component/Animasi";
import UpdateState from "../component/UpdateState";
import FetchApi from "../component/FetchApi";


export const MyContext = createContext();

const ReactContext = () => {
    const [data, setData] = useState(0);
    return(
        <div>
            {data}
            <MyContext.Provider value={[data, setData]}>
                <Animasi/>
                <UpdateState/>
                <ContextComp1/>
                <ContextComp2/>
                <FetchApi/>
            </MyContext.Provider>
        </div>
    );
};

export default ReactContext;