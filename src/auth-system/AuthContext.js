import { createContext,useState,useContext,useEffect } from "react";
const AuthContext=createContext();
export const useAuth=()=>{
    const context =useContext(AuthContext);
    if(!context){
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
export const AuthProvider=({children})=>{
    const [user,setUser]=useState(null);
    const [isAuthenticated,setIsAuthenticated]=useState(false);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const storedUser=localStorage.getItem('user');
        if(storedUser){
            setUser(JSON.parse(storedUser));
            setIsAuthenticated(true);
        }
        setLoading(false);
    },[]);
    const login=(email,password)=>{
        const users=JSON.parse(localStorage.getItem('users')||'[]');
        const foundUser=users.find(
            (u)=>u.email===email&&u.password===password
        );
        if(foundUser){
            const userWithoutPassword={
                username:foundUser.username,
                email:foundUser.email
            };
            setUser(userWithoutPassword);
            setIsAuthenticated(true);
            localStorage.setItem('user',JSON.stringify(userWithoutPassword));
            return{success:true};
        }else{
            return {success:false,message:'Invalid email or password'};
        }
    };
    const signup=(username,email,password)=>{
        const users=JSON.parse(localStorage.getItem('users')||'[]');
        const userExists=users.some((u)=>u.email===email);
        if(userExists){
            return{success:false,message:'user already exists'};
        }
        const newUser={
            username,
            email,
            password
        };
        users.push(newUser);
        localStorage.setItem('users',JSON.stringify(users));
        const userWithoutPassword={username,email};
        setUser(userWithoutPassword);
        setIsAuthenticated(true);
        localStorage.setItem('user',JSON.stringify(userWithoutPassword));
        return{success:true};
    };
    const logout =()=>{
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('user');
    };
    const users=()=>{
        return JSON.parse(localStorage.getItem('users')||'[]');
    };
    const value={
        user,
        users,
        isAuthenticated,
        loading,
        login,
        signup,
        logout
    };
    return<AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};