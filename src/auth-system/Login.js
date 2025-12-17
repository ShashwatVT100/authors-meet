import { useState } from "react";
import {useNavigate,Link} from 'react-router-dom';
import { useAuth } from "./AuthContext";
function Login(){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();
    const {login}=useAuth();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const result=login(email,password);
        if(result.success){
            navigate('/dashboard');
        }else{
            alert(result.message);
        }
    };
    return(
        <div style={styles.container}>
            <div style={styles.formBox}>
                <h2 style={styles.heading}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Email</label>
                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} style={styles.input} placeholder="Enter your email" required/>
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Password</label>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} style={styles.input} placeholder="Enter your password" required/>
                    </div>
                    <button type="submit" style={styles.button}>Login</button>
                </form>
                <p style={styles.text}>Don't have an account? <Link to='/signup' style={styles.link}>Sign Up</Link></p>
            </div>
        </div>
    );
}
const styles={
    container:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        minHeight:'80vh',
        backgroundColor:'#f5f5f5'
    },
    formBox:{
        backgroundColor:'white',
        padding:'40px',
        borderRadius:'8px',
        boxShadow:'0 2px 10px rgba(0,0,0,0.1)',
        width:'100%',
        maxWidth:'400px'
    },
    heading:{
        textAlign:'center',
        marginBottom:'30px',
        color:'#333'
    },
    inputGroup:{
        marginBottom:'20px'
    },
    label:{
        display:'block',
        marginBottom:'8px',
        color:'#555',
        fontWeight:'500'
    },
    input:{
        width:'100%',
        padding:'12px',
        border:'1px solid #ddd',
        borderRadius:'4px',
        fontSize:'14px',
        boxSizing:'border-box'
    },
    button:{
        width:'100%',
        padding:'12px',
        backgroundColor:'#007bff',
        color:'white',
        border:'none',
        borderRadius:'4px',
        fontSize:'16px',
        cursor:'pointer',
        marginTop:'10px'
    },
    text:{
        textAlign:'center',
        marginTop:'20px',
        color:'#666'
    },
    link:{
        color:'#007bff',
        textDecoration:'none'
    }
};
export default Login;