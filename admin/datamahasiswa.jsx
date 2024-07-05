import GetMahasiswa from "@/Components/admin/GetMahasiswa";
import axios from "axios";

const DataMahasiswa = ({ data }) => {
    return ( 
        <>
            <GetMahasiswa mahasiswa={data}/>
        </>
     );
}

//server Side
export const getServerSideProps = async ({ query }) => {
    const nim = query.nim

    let url = ('http://localhost:9000/mahasiswa')
    if(nim)(
        url = `http://localhost:9000/mahasiswa/${nim}`
    )
    const res = await axios.get(url)
    const data = res.data
    return {
        props: {
            data
        }
    }
}
 
export default DataMahasiswa;
