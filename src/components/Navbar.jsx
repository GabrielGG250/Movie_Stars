import { Link } from "react-router-dom"
import { BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'

const Navbar = () => {
    return (
        <nav className="navbar text-bg-dark d-flex py-3 py-md-4">
            <h2 className="col-5 my-0 ms-2">
                <Link className="fs-3 link-warning text-decoration-none d-flex align-items-center" to="/">
                    <BiCameraMovie />
                    MovieStars
                </Link>
            </h2>

            <div className="col-6 col-lg-5 col-xl-4 col-xxl-3 me-3">
                <form className="d-flex input-group">
                    <input className="form-control" type="text" placeholder="Busque Filmes" />
                    <button className="btn btn-warning" type="submit">
                        <BiSearchAlt2 />
                    </button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar