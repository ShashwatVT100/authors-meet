import { useAuth } from "./AuthContext";
function Dashboard(){
    const {user}=useAuth();
    return(
        <div style={styles.container}>
            <div style={styles.content}>
                <h1 style={styles.heading}>Dashboard</h1>
                <p style={styles.text}>Welcome! This is a protected page. Only logged in users can see this.</p>
                <div style={styles.card}>
                    <h3>Your Profile</h3>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                </div>
            </div>
        </div>
    );
};
const styles={
    container:{
        padding:'40px 20px',
        maxWidth:'800px',
        margin:'0 auto'
    },
    content:{
        backgroundColor:'white',
        padding:'30px',
        borderRadius:'8px',
        boxShadow:'0 2px 10px rgba(0,0,0,0.1)'
    },
    heading:{
        color:'#333',
        marginBottom:'20px'
    },
    text:{
        color:'#666',
        fontSize:'16px',
        marginBottom:'30px'
    },
    card:{
        backgroundColor:'#f8f9fa',
        padding:'20px',
        borderRadius:'6px',
        border:'1px solid #dee2e6'
    }
};
export default Dashboard;