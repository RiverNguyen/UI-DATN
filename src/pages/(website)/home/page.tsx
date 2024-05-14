import HeaderPage from "./_component/Header";
import { Helmet } from "react-helmet";
const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <HeaderPage />
        </>
    );
};

export default HomePage;
