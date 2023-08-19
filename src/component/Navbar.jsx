import {Link} from "react-router-dom"

function Navbar() {

  const styles = {
    padding: "20px",
    textDecoration:'none',
    color:'white',
    fontSize:'25px'
  };
  return <>
    <div>
      <div
        style={{
          height: "40px",
          color: "white",
          backgroundColor: "black",
          padding: "40px",
          textAlign:'right'
        }}
      >
        <Link style={styles}   to='/'  >Home</Link>
        <Link style={styles}  to='/about' >About</Link>
        <Link style={styles}  to='/product' >Product</Link>
        <Link style={styles}  to='/contact' >Contact</Link>
      </div>
    </div>
    </>
}

export default Navbar;
