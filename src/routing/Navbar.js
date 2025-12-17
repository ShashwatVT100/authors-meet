import { Link } from "react-router-dom";
import { useAuth } from "../auth-system/AuthContext";
function Navbar(){
    const {isAuthenticated,logout,user}=useAuth();
    return(
        <nav style={styles.nav}>
            <div style={styles.navContainer}>
                <Link to='/' style={styles.logo}>Authors Meet</Link>
                <div style={styles.navLinks}>
                    <Link to='/' style={styles.link} onMouseEnter={(e)=>{e.target.style.color='#007bff';}} onMouseLeave={(e)=>{e.target.style.color='white';}}>Home</Link>
                    <Link to='/about' style={styles.link} onMouseEnter={(e)=>{e.target.style.color='#007bff';}} onMouseLeave={(e)=>{e.target.style.color='white';}}>About</Link>
                    <Link to='/counter' style={styles.link} onMouseEnter={(e)=>{e.target.style.color='#007bff';}} onMouseLeave={(e)=>{e.target.style.color='white';}}>Counter</Link>
                    {!isAuthenticated?(
                        <>
                            <Link to='/login' style={styles.link} onMouseEnter={(e)=>{e.target.style.color='#007bff';}} onMouseLeave={(e)=>{e.target.style.color='white';}}>Login</Link>
                            <Link to='/signup' style={styles.link} onMouseEnter={(e)=>{e.target.style.color='#007bff';}} onMouseLeave={(e)=>{e.target.style.color='white';}}>Sign Up</Link>
                        </>
                    ):(
                        <>
                            <Link to='/dashboard' style={styles.link} onMouseEnter={(e)=>{e.target.style.color='#007bff';}} onMouseLeave={(e)=>{e.target.style.color='white';}}>Dashboard</Link>
                            <Link to='/profiles' style={styles.link} onMouseEnter={(e)=>{e.target.style.color='#007bff';}} onMouseLeave={(e)=>{e.target.style.color='white';}}>Profiles</Link>
                            <span style={styles.link}>Welcome, {user.username}</span>
                            <button onClick={logout} style={styles.logoutButton}>Logout</button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};
const styles={
    nav:{
        background:'#333',
        padding:'15px 0',
        boxShadow:'0 2px 5px rgba(0,0,0,0.1)'
    },
    navContainer:{
        maxWidth:'1200px',
        margin:'0 auto',
        padding:'0 20px',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    },
    logo:{
        color:'white',
        fontSize:'24px',
        fontWeight:'bold',
        textDecoration:'none'
    },
    navLinks:{
        display:'flex',
        gap:'25px'
    },
    link:{
        color:'white',
        textDecoration:'none',
        fontSize:'16px',
        transition:'color 0.3s'
    },
    logoutButton:{
        backgroundColor:'#dc3545',
        color:'white',
        border:'none',
        padding:'8px 16px',
        borderRadius:'4px',
        cursor:'pointer',
        fontSize:'14px'
    }
};
export default Navbar;