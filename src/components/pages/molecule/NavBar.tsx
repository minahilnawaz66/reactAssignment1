import { Link } from "react-router-dom";

export default function NavBar() {
	return <nav className="flex flex-wrap flex-col p-5">

		<ul className="flex">
			<li className="p-3">
				<Link to="/home">Home</Link>
			</li>
			<li className="p-3">
				<Link to="/about">About</Link>
			</li>
		</ul>
	</nav>
}