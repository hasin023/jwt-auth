import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Goodbye World</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <div className="flex gap-4 items-center justify-center">
                        <Link to='/login' className="btn btn-outline btn-primary btn-sm">Sign In</Link>
                        <Link to='/register' className="btn btn-outline btn-sm">Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero