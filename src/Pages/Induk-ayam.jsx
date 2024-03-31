import Ayam from '../component/Ayam'; // Assuming 'Ayam.js' is in the same directory
import Layout from '../component/Layout';


// const IndukAyam = () => {
//     return ( 
//         <>
//             <Ayam berkokok="ayam 1 berkokok"/>
//         </>
//      );
// }
 
// export default IndukAyam;

// const IndukAyam = () => {
//     const kandang=1;
//     const makanan="Dedeg"
//     const telur="10"
//     return ( 
//         <>
//             <Ayam kandang={kandang}
//                 makanan={makanan}
//                 telur={telur}
//             />
//         </>
//      );
// }
 
// export default IndukAyam;

// const IndukAyam = () => {
//     const kandang=1;
//     const makanan="Dedeg"
//     const telur=10;
//     return ( 
//         <>
//             <Ayam kandang={kandang}
//                 makanan={makanan}
//                 telur={telur}
//                 jenis={true}
//             />
//             <hr />
//             <Ayam kandang="2"
//                 makanan="menir"
//                 telur="3"
//                 jenis={false}
//             />
//             <hr />
//         </>
//      );
// }
 
// export default IndukAyam;

const IndukAyam = () => {
    const dimakan = {
        "kandang" : "1",
        "makanan" : "Dedeg",
        "minuman" : "air",
        "telur" : "12",
        "jenis" : false
    };    
    const dimakan1 = {
        "kandang" : "2",
        "makanan" : "menir",
        "minuman" : "es",
        "telur" : "22",
        "jenis" : true
    };
    const makanan = ["Dedeg","menir"];
    const minumam = ["air","es"];

    return ( 
        <>
            <Ayam makanan={makanan} minuman={minumam} dimakan={dimakan} />
            <Ayam makanan={makanan} minuman={minumam} dimakan={dimakan1} />
        </>
     );
}

const IndukAyamLayout = () => {
    return ( 
        <Layout>
            <IndukAyam/>
        </Layout>
     );
}
 
export default IndukAyamLayout;

 
// export default IndukAyam;

// function IndukAyam() {
//     const ayamData = {jenis:"kate", umur: "15 hari"};
//     return ( 
//         <Ayam data={ayamData}/>
//     );
// }

// export default IndukAyam;

// function Ayam() {
//     function handleClick(){
//         alert('Tombol diklik!');
//     }

//     return <Button onClick={handleClick}/>;
// }

// // export default Ayam;

// function IndukAyam() {
//     const ayamData = {jenis: 'jago', umur: '1 bulan'};

//     function handleClick() {
//         alert('Tombol diklik!');
//     }

//     return (
//         <div>
//             <Ayam data={ayamData} />
//             <button onClick={handleClick}>Klik Disini</button>
//         </div>
//     );
// }

// export default IndukAyam;