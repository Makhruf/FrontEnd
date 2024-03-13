import Props from "./component/Props"
import Menu from "./component/Menu";

// const IndukProps = () => {
//     return(
//         <>
//             <Props pesan="Pesan dari induk ke-1"/>
//             <Props pesan="Pesan dari induk ke-2"/>
//             <Props pesan="Pesan dari induk ke-3"/>
//         </>
//     );
// }

// export default IndukProps;


// const IndukProps = () => {
//     const meja = 1;
//     const makanan = "Nasi Goreng Komodo"
//     const minuman = "Kelapa muda Anget"
//     return(
//         <>
//             <Props 
//                 meja={meja}
//                 makanan={makanan}
//                 minuman={minuman}
//             />
//             <hr />
//             <Props
//                 meja="2"
//                 makanan="Pizza"
//                 minuman="Arak"
//             />
//             <hr/>

//         </>
//     );
// }

// export default IndukProps;

// const IndukProps = () => {
//     const meja = 1;
//     const makanan = "Nasi Goreng Komodo"
//     const minuman = "Kelapa muda Anget"
//     return(
//         <>
//             <Props 
//                 meja={meja}
//                 makanan={makanan}
//                 minuman={minuman}
//                 pelanggan={true}
//             />
//             <hr />
//             <Props
//                 meja="2"
//                 makanan="Pizza"
//                 minuman="Arak"
//                 pelanggan={false}
//             />
//             <hr/>

//         </>
//     );
// }

// export default IndukProps;

const IndukProps = () => {

    const pesanan = {   "meja" : "1",
                        "makanan" : "Sate Gajah",
                        "minuman" : "kopi kenangan",
                        "pelanggan" : true};

    const pesanan2 = {  "meja" : "2",
                        "makanan" : "Hiu Goreng",
                        "minuman" : "Dawet",
                        "pelanggan" : false};

    const pesanan3 = {   "meja" : "3",
                        "makanan" : "Jaran Bakar",
                        "minuman" : "Es Campur",
                        "pelanggan" : true};
 
    const menuMakanan = [   "Nasi Apa", 
                            "Soto Apa",
                            "Kadal Gurun"
                        ];

    const menuMinuman = [
                            "Akua",
                            "Lemon",
                            "Alpukat"]

    return(
        <>
            <Props menuMakanan={menuMakanan} 
                    menuMinuman={menuMinuman}/>
            <Props pesanan={pesanan}/>
            <Props pesanan={pesanan}/>
            <hr />
            <Props pesanan={pesanan2}/>
            <hr />
            <Props pesanan={pesanan3}/>
            <hr />

        </>
    );
}

export default IndukProps;
