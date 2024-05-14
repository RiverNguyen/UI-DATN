import {
    ArrowRight,
    CircleUserRound,
    Search,
    ShoppingBag,
    TicketPercent,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import Banner from "./Banner";
import Content from "./Content";
import Articles from "./Articles";
import Newsletter from "./Newsletter";

const HeaderPage = () => {
    return (
        <>
            <div className="h-[40px] bg-[#F3F5F7] flex justify-center items-center w-full m-0 font-semibold">
                <div className="flex justify-center mr-4">
                    <TicketPercent className="mr-2" />
                    <span>
                        Giảm giá 30% trên toàn cửa hàng — Thời gian có hạn!
                    </span>
                </div>
                <div className="flex justify-center items-center text-blue-500 underline ">
                    <Link className="mr-1" to="">
                        Mua sắm ngay
                    </Link>
                    <ArrowRight className="h-[18px]" />
                </div>
            </div>
            <div className="w-[1440px] mx-auto container">
                <header className="mx-auto container flex justify-between py-[18px] items-center">
                    <div className="">
                        <Link to={""}>
                            <img
                                src="public/3legant.svg"
                                className="h-[24px]"
                                alt="public/vite.svg"
                            />
                        </Link>
                    </div>
                    <div className="flex *:mr-[40px] *:font-medium">
                        <NavLink to={""}>Home</NavLink>
                        <NavLink to={""}>Shop</NavLink>
                        <NavLink to={""}>Product</NavLink>
                        <NavLink to={""}>Contact Us</NavLink>
                    </div>
                    <div className="flex *:mr-[20px]">
                        <Search />
                        <CircleUserRound />
                        <ShoppingBag />
                    </div>
                </header>
                <Banner />
            </div>
            <Content />
            <Articles />
            <Newsletter />
        </>
    );
};

export default HeaderPage;
