import {Routes, Route} from "react-router-dom";
import Home from '../components/pages/Home.tsx';
import About from '../components/pages/About.tsx';
import NotFound from '../components/pages/NotFound.tsx';


export default function Routing() {
	return (
	<Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
		<Route path="*" element={<NotFound />} />
    </Routes>
	)
}