import { Mail } from "lucide-react";

const Newsletter = () => {
    return (
        <>
            <div className="relative mt-[74px]">
                <img src="public/footer.png" alt="" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center tracking-wider">
                    <h1 className="font-medium text-[40px]">
                        Join Our Newsletter
                    </h1>
                    <p className="text-[18px] text-[#141718]">
                        Sign up for deals, new products and promotions
                    </p>
                    <div className="flex justify-between items-center border-b-[#6C7275] border-t-0 border border-r-0 border-l-0 mt-5 pb-3">
                        <Mail className="h-6 w-6" strokeWidth={1} />
                        <form action="">
                            <input
                                type="text"
                                placeholder="Email address"
                                className="bg-[#F2F4F6] w-[396px] px-3 py-1 focus:outline-none"
                            />
                            <button className="text-[#6C7275] font-medium">
                                Signup
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Newsletter;
