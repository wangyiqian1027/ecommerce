import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

export const LoginFields = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/login", { email, password });
            Swal.fire({
                icon: 'success',
                title: 'Login Successful',
                text: response.data.message 
            }).then((result) => {
                localStorage.setItem("userid",response.data.userid);
                navigate("/");
            });
        } catch (error) {
            setError("Invalid email or password");
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: 'Invalid email or password'
            });
        }
    };
    

    return (
        <>
            <div className="wrapper-container light">
                <div className="container-content double">
                    <h2>Login to Your EleganceCraft Account</h2>
                    <form onSubmit={handleLogin}>
                        <input type="email" name="email" id="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" name="password" id="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button type="submit">Login</button>
                        {error && <p>{error}</p>}
                        <p>Forgot Password? <Link to={"#"}>Reset Password</Link></p>
                        <p>Don&apos;t have an account? <Link to={"/signup"}>Signup Here</Link></p>
                    </form>
                </div>
            </div>
        </>
    );
};

export const SignupFields = () => {
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        if (password !== cpassword) {
            setError("Passwords do not match");
            return;
        }
        try {
            const response = await axios.post("http://localhost:3001/register", {
                email,
                full_name: fullName,
                password,
                cpassword,
                address,
                phone_number: phoneNumber
            });
            // Handle successful registration
            console.log(response.data);
            // Redirect to login route
            navigate("/login");
        } catch (error) {
            setError("Registration failed");
            console.error("Registration error:", error);
        }
    };

    return (
        <>
            <div className="wrapper-container light">
                <div className="container-content double">
                    <h2>Create Your EleganceCraft Account</h2>
                    <form onSubmit={handleSignup}>
                        <input type="email" name="email" id="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="text" name="full_name" id="full_name" placeholder="Full name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                        <input type="password" name="password" id="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <input type="password" name="cpassword" id="cpassword" placeholder="Confirm password" value={cpassword} onChange={(e) => setCPassword(e.target.value)} />
                        <textarea name="address" id="address" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                        <input type="number" name="phone_number" id="phone_number" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                        <button type="submit">Signup</button>
                        {error && <p>{error}</p>}
                        <p>Already have an account? <Link to={"/login"}>Login Here</Link></p>
                    </form>
                </div>
            </div>
        </>
    );
};
