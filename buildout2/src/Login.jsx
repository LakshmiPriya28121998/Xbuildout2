import { useState } from "react"

export default function Login(){

const [username,setUsername] = useState("");
const [password,setPassword] = useState("");
const [isloggedin,setIsloggedin] = useState(false);
const [isinvalid, setIsinvalid] = useState(false);

const handleusername = (event) => {
    setUsername(event.target.value);
}

const handlepassword = (event) => {
    setPassword(event.target.value);
}

const handlesubmit = (event) => {
    event.preventDefault();
    if(password === "password" && username === "user"){
        setIsloggedin(true);
        setIsinvalid(false);

    }
    else{
        setIsinvalid(true);
    }
}

    return(
        <div>
            <form>
                <h1>Login Page</h1>
                {isinvalid && <div>Invalid username or password</div>}
                { isloggedin ? <div>Welcome, user!</div> :  <div>
                <div>
                <label for="Username">Username:</label>
                <input type="text" id="Username" value={username} onChange={handleusername}/>
                </div>
                <div>
                <label for="Password">Password:</label>
               <input type="password" id="Password" value={password} onChange={handlepassword}/>
                </div>
                <button type="submit" onClick={handlesubmit}>Submit</button>
                </div>}
               
               
               
            </form>
        </div>
    )
}