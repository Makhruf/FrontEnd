// function Props(props) {
//     return (  
//         <>
//             <h2>Pesan dari induk</h2>
//             <p>{props.pesan}</p>    
//             {/* <p>{pesan}</p> == menggunakan destrukturisasi == */}
//         </>
//     );
// }

// export default Props;



// function Props({meja, makanan, minuman}) {
//     return (  
//         <>
//             <h2>Pesan dari meja : {meja}</h2>
//             <p> Makanan : {makanan}</p>
//             <p>Minuman : {minuman}</p>
//         </>
//     );
// }

// export default Props;


//  function Props(props) {
//     const {meja, makanan, minuman, pelanggan} = props;
//     return (  
//         <>
//             {pelanggan ?
//                 <div>
//                     <h3>Pesan dari meja : {meja}</h3>
//                     <p>Makanan : {makanan}</p>
//                     <p>Minuman : {minuman}</p>
//                 </div>
//                 :
//                 <   p>Anda bukan Pelanggan</p>
//                 }
//         </>
//     );
// }

// export default Props;

function Props(props) {
    const {meja, makanan, minuman, pelanggan} = props.pesanan;
    return (  
        <>
        {pelanggan ?
            <div>
                <h3>Pesan dari meja : {meja}</h3>
                <p>makanan : {makanan}</p>
                <p>minuman : {minuman}</p>
            </div>
                :
        <p>Anda bukan Pelanggan</p> }
            {/* <p>{props.pesan}</p> */}
            {/* <p>{pesan}</p> */}
        </>
    );
}

export default Props;