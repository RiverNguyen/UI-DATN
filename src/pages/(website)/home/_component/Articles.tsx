import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Articles = () => {
    return (
        <div className="container mx-auto mt-[74px]">
            <div className="flex justify-between *:font-medium mb-12 mt-9">
                <div className="text-[40px] leading-10">
                    <h1>Articles</h1>
                </div>
                <div className="flex items-center transition duration-500 ease-in-out transform hover:-translate-x-1 hover:opacity-70">
                    <Link to={""} className="underline">
                        More Articles
                    </Link>
                    <ArrowRight className="h-4" />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-7 ">
                <div className="*:mb-3">
                    <img
                        src="public/5.png"
                        alt=""
                        className="rounded-lg hover:scale-105 transform ease-in-out duration-500"
                    />
                    <h1 className="font-medium text-[20px]">
                        7 ways to decor your home
                    </h1>
                    <div className="flex items-center transition duration-500 ease-in-out transform hover:translate-x-1 hover:opacity-70">
                        <Link to={""} className="underline">
                            Read More
                        </Link>
                        <ArrowRight className="h-4" />
                    </div>
                </div>
                <div className="*:mb-3">
                    <img
                        src="public/5.png"
                        alt=""
                        className="rounded-lg hover:scale-105 transform ease-in-out duration-500"
                    />
                    <h1 className="font-medium text-[20px]">
                        Kitchen organization
                    </h1>
                    <div className="flex items-center transition duration-500 ease-in-out transform hover:translate-x-1 hover:opacity-70">
                        <Link to={""} className="underline">
                            Read More
                        </Link>
                        <ArrowRight className="h-4" />
                    </div>
                </div>
                <div className="*:mb-3">
                    <img
                        src="public/5.png"
                        alt=""
                        className="rounded-lg hover:scale-105 transform ease-in-out duration-500"
                    />
                    <h1 className="font-medium text-[20px]">
                        Decor your bedroom
                    </h1>
                    <div className="flex items-center transition duration-500 ease-in-out transform hover:translate-x-1 hover:opacity-70">
                        <Link to={""} className="underline">
                            Read More
                        </Link>
                        <ArrowRight className="h-4" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Articles;
