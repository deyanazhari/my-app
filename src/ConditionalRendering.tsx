import react,{useState} from 'react';

const ConditionalRendering:React.FC = ()=> {
    const [isLoggedIn,setIsLoggedIn]= useState<boolean>(false);
    const toogleLogin =() =>{
        setIsLoggedIn(!isLoggedIn);
    }
    return(
        // <div>Conditional Rendering</div>
        // <button onClick={toogleLogin}></button>
        <div>
            <h1>Conditional Rendering</h1>
            {
            isLoggedIn ?
            <h2>Welcome Back</h2> :
            <h2>please Login</h2>
        }
        <button onClick={toogleLogin}>
            {
                isLoggedIn ? 
                "Log Out" :
                "Log In"
            }
        </button>
        </div>
    );
}

export default ConditionalRendering;