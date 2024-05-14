import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Content = () => {
    return (
        <>
            <div className="grid grid-cols-2 gap-0 w-full">
                <div className="">
                    <img src="public/4.png" alt="" />
                </div>
                <div className="bg-[#F3F5F7] flex items-center">
                    <div className="ml-14">
                        <h1 className="font-bold text-[#377DFF] mb-3">
                            SALE UP TO 35% OFF
                        </h1>
                        <h1 className="font-medium text-[48px] leading-tight mb-3 tracking-wider">
                            HUNDREDS of <br /> New lower prices!
                        </h1>
                        <p className="text-[20px] mb-6 tracking-wider">
                            It’s more affordable than ever to give every <br />{" "}
                            room in your home a stylish makeover
                        </p>
                        <div className="underline flex items-center transition duration-500 ease-in-out transform hover:translate-x-2 hover:opacity-70 ">
                            <Link to="">Shop Now</Link>
                            <ArrowRight className="ml-1 h-4 w-4" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Content;
