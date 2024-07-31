import { useState } from 'react';
import SignupGirl from '../../assets/SignupGirl.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passMatch, setPassMatch] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate(); // Used for navigation after signup

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Reset previous errors
        setError('');
        setSuccess('');

        // Client-side validation
        if (password !== confirmPassword) {
            setPassMatch(false);
            setError("Passwords do not match");
            return;
        } else {
            setPassMatch(true);
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters long");
            return;
        }

        try {
            setLoading(true); // Set loading state

            // Create user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            if (user) {
                // Create a reference to the user document in Firestore
                const userRef = doc(db, 'Users', user.uid);

                // Save user data to Firestore
                await setDoc(userRef, {
                    email: user.email,
                    fullname: name,
                    username: username,
                });

                setSuccess("User registered successfully");

                // Redirect to the home page or another page after signup
                navigate('/');
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <div className="bg-[#2d2d2d] flex flex-col md:flex-row h-auto lg:h-screen">
            <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-12">
                <div className="h-1/2 w-3/4 md:h-auto md:w-3/4 lg:w-1/2">
                    <img src={SignupGirl} alt="Signup Illustration" className='rounded-full w-full h-auto' />
                </div>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-12 my-4">
                <div className="flex min-h-full flex-1 flex-col justify-center lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-5xl font-bold leading-9 tracking-tight text-white">
                            Sign Up
                        </h2>
                    </div>

                    <p className="mt-5 text-center text-sm text-white">
                        Join to discover{' '}
                        <span className="font-semibold leading-6 text-[#54d3f3] hover:text-[#92eff7]">
                            movies
                        </span>
                        {' '}with us
                    </p>

                    {error && <p className="error text-red-500 text-center my-2 mt-4">{error}</p>}
                    {success && <p className="success text-green-500 text-center my-2 mt-4">{success}</p>}

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">
                                    Your Full Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset font-bold px-3 ring-gray-300 placeholder:text-gray-400 sm:text-lg sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                                    Email
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset font-bold px-3 ring-gray-300 placeholder:text-gray-400 sm:text-lg sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-white">
                                    Username
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        required
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset font-bold px-3 ring-gray-300 placeholder:text-gray-400 sm:text-lg sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                        Setup Your Password
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-lg sm:leading-6 px-3"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-white">
                                        Confirm Your Password
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        required
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-lg sm:leading-6 px-3"
                                    />

                                    {passMatch === false && (
                                        <div className='mt-2 px-4 text-red-500 animate-bounce'>Passwords do not match!</div>
                                    )}
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className={`flex w-full justify-center rounded-full bg-[#54d3f3] px-3 py-1.5 text-xl font-semibold leading-6 text-black shadow-sm hover:bg-[#92eff7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-10 ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
                                    disabled={loading} // Disable button when loading
                                >
                                    {loading ? 'Signing Up...' : 'Sign Up'}
                                </button>
                            </div>
                        </form>

                        <p className="mt-5 text-center text-sm text-white">
                            Already a member?{' '}
                            <Link to="/" className="font-semibold leading-6 text-[#54d3f3] hover:text-[#92eff7]">
                                Log In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
