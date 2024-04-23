import { useNavigate } from "react-router-dom";

export default function NotFound() {
	const navigate = useNavigate();
	const onBackClick = () => {
		navigate("/home");
	};
	return (
		<>
			<p className="mb-4 text-4xl font-extrabold text-center">404 Not Found :)</p>
			<div className="text-center">
				<button onClick={onBackClick} className="mt-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
					Go Back
				</button>
			</div>
		</>
	)
}