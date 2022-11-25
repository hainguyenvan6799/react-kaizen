import {Link, useResolvedPath, useMatch} from 'react-router-dom';
import './style.css';

const Navbar = () => {
    return <nav className="nav">
        <ul>
            <CustomLink to="/useIdHookSample">UseId Hook Sample</CustomLink>
            <CustomLink to="/useTransitionHookSample">UseTransition Hook Sample</CustomLink>
        </ul>
    </nav>
}

const CustomLink = ({to, children, ...props}) => {
    const resolvedPath = useResolvedPath(to);
    console.log(resolvedPath)
    const isActive = useMatch({path: resolvedPath.pathname, end: true});
    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar;