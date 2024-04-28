import { useNavigate } from "react-router-dom";
import Button from "../component/Button"
import Layout from "../component/Layout";
import Utama from "../component/Utama";

function Home() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/IndukAyam")
    }
    return ( 
        <>
            <Layout>
                <Button text= "Induk Ayam" onClick={handleClick} color="blue"/>
                <Utama/>
            </Layout>
        </>
     );
}

export default Home;
