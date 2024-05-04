import { useState } from "react"
import { Link } from "react-router-dom";

import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";


const RegisterPage = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, password);
    }

    return (
        <div className="flex items-center justify-center mt-10">
            <div className="card w-96 bg-base-100 shadow-2xl">
                <figure className="px-10 pt-10">
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Sing Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-3">
                            <label className="input input-bordered flex items-center gap-2">
                                <FaUser />
                                <input type="text" className="grow" placeholder="Name" value={name} onChange={handleNameChange} />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <MdEmail />
                                <input type="email" className="grow" placeholder="Email" value={email} onChange={handleEmailChange} />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <RiLockPasswordFill />
                                <input type="password" className="grow" placeholder="******" value={password} onChange={handlePasswordChange} />
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-success btn-outline">Sign up</button>
                        </div>

                    </form>
                    <p className="text-sm">Already have an account? {" "}
                        <span>
                            <Link to="/login" className="text-primary">Sign in</Link>
                        </span>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default RegisterPage