import { Link } from 'react-router-dom';
export default function NotFound() {
    return (
        <div className="error-div">
            <h1>404 Not Found! Go Back</h1>
            <Link to="/" className="nav-link">
                Home
            </Link>
        </div>
    );
}
