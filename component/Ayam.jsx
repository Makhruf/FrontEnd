// // destruturisasi
// function Ayam({berkokok}) {
//     return ( 
//         <>
//             <h3>Pesan dari induk Ayam</h3>
//             {/* <p>{ayam.berkokok}</p> */}
//             <p>{berkokok}</p>
//         </>
//      );
// }

// export default Ayam;

// // string + number
// function Ayam({kandang, makanan, telur}) {
//     return ( 
//         <>
//             <h3>Ayam berada di kandang: {kandang}</h3>
//             <p>makanan: {makanan}</p>
//             <p>telur: {telur}</p>
//         </>
//      );
// }

// export default Ayam;

// // boolean
// function Ayam(ayam) {
//     const {kandang, makanan, telur, jenis} = ayam;
//     return ( 
//         <>
//             {jenis ?
//                 <div>
//                     <h3>Ayam dikandang: {kandang}</h3>
//                     <p>makanan: {makanan}</p>
//                     <p>telur: {telur}</p>
//                 </div>
//                 :
//                 <p>bukan jenis ayam</p>
//             }
//         </>
//      );
// }

// export default Ayam;

function Ayam({ dimakan }) {
    const { kandang, makanan, minuman, telur, jenis } = dimakan;

    return (
        <>
            {jenis ? (
                <div>
                    <h3>Ayam dikandang: {kandang}</h3>
                    <p>Makanan : {makanan}</p>
                    <p>Minuman : {minuman}</p>
                    <p>Telur : {telur}</p>
                </div>
            ) : (
                <p>Bukan jenis Ayam</p>
            )}
        </>
    );
}

export default Ayam;


// // object
// function Ayam(ayam) {
//     return ( 
//         <div>
//             <p>jenis: {ayam.data.jenis}</p>
//             <p>umur: {ayam.data.umur}</p>
//         </div>
//      );
// }

// export default Ayam;

// fuction
// function Ayam(ayam) {
//     return ( 
//         <div>
//             <p>jenis: {ayam.data.jenis}</p>
//             <p>umur: {ayam.data.umur}</p>
//         </div>
//      );
// }

// function Button(ayam) {
//     function handleClick() {
//         alert('Tombol diklik!');
//     }

//     return (
//         <div>
//             <div>
//                 <p>jenis: {ayam.data.jenis}</p>
//                 <p>umur: {ayam.data.umur}</p>
//             </div>
//             <button onClick={handleClick}>Klik Disini</button>
//         </div>
//     );
// }

// export { Ayam, Button };
