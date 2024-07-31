import { useState } from 'react';
import SignupGirl from '../../assets/SignupGirl.jpg';
import {Link, useNavigate} from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../../../firebase'

const Login = () => {

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[isValid, setIsValid] = useState(null)

    const navigate = useNavigate()

    const handleLogin = async(e) => {
        e.preventDefault();
         
        try{
            const userCredential = await signInWithEmailAndPassword(auth,email,password);
            const user = userCredential.user;
            alert(user)

            alert("login successfull")
            navigate("/home")
        }catch(error){
            setIsValid(false)
        }
        
    };

    return (
        <div className="bg-[#2d2d2d] flex flex-col md:flex-row md:h-screen">
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-12">
                <div className="h-auto w-3/4 md:h-auto md:w-3/4 lg:w-1/2">
                    <img src={SignupGirl} alt="Image" className='rounded-full w-full h-auto' />
                </div>
            </div>
            
            {/* Form Section */}
            <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-12 ">
                <div className="flex min-h-full flex-1 flex-col justify-center lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="text-center text-4xl font-bold leading-9 tracking-tight text-white">
                            Sign in to your account
                        </h2>
                    </div>
                   
                    {isValid === false &&(
                            <div className='text-red-500 text-center animate-bounce pt-8'>User does not exist or Invalid credentials !!!</div>
                    )}
                    
                   
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form action="#" method="POST" className="space-y-6" onSubmit={handleLogin}>
                            <div>
                                <label htmlFor="email" className="block text-xl font-medium leading-6 text-white">
                                    Email address
                                </label>
                                <div className="mt-4">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={email}
                                        onChange={(e)=>{setEmail(e.target.value)}}
                                        required
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-lg sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-xl font-medium leading-6 text-white">
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-[#54d3f3] hover:text-[#92eff7]">
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={password}
                                        onChange={(e)=>{setPassword(e.target.value)}}
                                        required
                                        autoComplete="current-password"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-lg sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-[#54d3f3] px-3 py-1.5 text-xl font-semibold leading-6 text-black shadow-sm hover:bg-[#92eff7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-10"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-white">
                            Not a member?{' '}
                            <Link to="/signUp" className="font-semibold leading-6 text-[#54d3f3] hover:text-[#92eff7]">
                                Sign Up Now
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
