import {Outlet, Link} from "react-router-dom";

const RouterLayout = () => {
    return (
        <>
            <div>
                <div>
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                    <div>
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>

            <Outlet />
        </>
    );
}

export default RouterLayout