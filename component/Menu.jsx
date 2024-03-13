const Menu = ({menuMakanan, menuMinuman}) => {
    return ( 
        <>
        <h2>Menu Makanan</h2>
            {menuMakanan.map((makanan, index) => (
                <div key={index}>
                    <p>{makanan}</p>
                </div>
            ))}
            <hr />
            <h2>Menu Minuman</h2>
            {menuMinuman.map((minuman, index) => (
                <div key={index}>
                    <p>{minuman}</p>
                </div>
            ))}
        </>
     );
}
 
export default Menu;

