import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/(website)/home/page";
import LayoutWebsite from "./pages/(website)/layout";
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LayoutWebsite />}>
                    <Route index element={<HomePage />} />
                    <Route path="*" element={<div>404</div>} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
