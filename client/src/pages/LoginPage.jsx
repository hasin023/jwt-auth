import { useState } from "react"
import { Link } from "react-router-dom";

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password);
    }

    return (
        <div className="flex items-center justify-center mt-10">
            <div className="card w-96 bg-base-100 shadow-2xl">
                <figure className="px-10 pt-10">
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Sing In</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                <input type="text" className="grow" placeholder="Email" value={email} onChange={handleEmailChange} />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                <input type="password" className="grow" placeholder="******" value={password} onChange={handlePasswordChange} />
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-success btn-outline">Login</button>
                        </div>

                    </form>
                    <p className="text-sm">Don&apos;t have an account? {" "}
                        <span>
                            <Link to="/register" className="text-secondary">Register</Link>
                        </span>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default LoginPage