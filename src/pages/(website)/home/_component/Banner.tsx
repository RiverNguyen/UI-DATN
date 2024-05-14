// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import required modules
import {
    EffectFade,
    Navigation,
    Pagination,
    Scrollbar,
    FreeMode,
    Autoplay,
} from "swiper/modules";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    Banknote,
    Heart,
    LockKeyhole,
    Phone,
    Star,
    StarHalf,
    Truck,
} from "lucide-react";

export default function Banner() {
    const pagination = {
        dynamicBullets: true,
        renderBullet: function (index: number, className: string) {
            return "<span class='" + className + "'>" + (index + 1) + "</span>";
        },
    };
    return (
        <>
            <div className="mx-auto container">
                <div className="">
                    <Swiper
                        spaceBetween={30}
                        effect={"fade"}
                        pagination={pagination}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[EffectFade, Navigation, Pagination, Autoplay]}
                        className="mySwiper rounded-lg"
                    >
                        <SwiperSlide>
                            <img src="src/assets/images/banner.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="src/assets/images/banner-1.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="grid grid-cols-2 gap-3 my-4">
                    <div className="font-medium text-[72px]">
                        <h1>Simply Unique/</h1>
                        <h1>Simply Better.</h1>
                    </div>
                    <div className="text-[#6C7275] m-auto tracking-wider">
                        <p>
                            <b className="text-black">3legant</b> is a gift &
                            decorations store based in HCMC, <br /> Vietnam. Est
                            since 2019.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 grid-flow-col gap-4 *:bg-[#F3F5F7]">
                    <div className="row-span-3 h-[784px] relative rounded-xl">
                        <div className="absolute top-[48px] left-[48px] ">
                            <h1 className="text-[34px] font-medium ">
                                Living Room
                            </h1>
                            <Link
                                className="underline flex items-center font-medium transition duration-500 ease-in-out transform hover:translate-x-2 hover:opacity-70 hover:scale-105"
                                to={""}
                            >
                                Shop now <ArrowRight className="h-4" />
                            </Link>
                        </div>
                        <img
                            className="w-[548px] h-[664px] mx-auto mt-[6rem] hover:scale-105 transition duration-500 ease-in-out transform cursor-pointer"
                            src="src/assets/images/Paste image.png"
                            alt=""
                        />
                    </div>
                    <div className="col-span-2 h-[384px] relative rounded-xl">
                        <div className="absolute bottom-[48px] left-[32px]">
                            <h1 className="text-[34px] font-medium">Bedroom</h1>
                            <Link
                                className="underline flex items-center font-medium transition duration-500 ease-in-out transform hover:translate-x-2 hover:opacity-70 hover:scale-105"
                                to={""}
                            >
                                Shop now <ArrowRight className="h-4" />
                            </Link>
                        </div>
                        <img
                            src="src/assets/images/1.png"
                            className="h-[332px] w-[260px] my-auto float-end mr-16 mt-6 hover:scale-105 transition duration-500 ease-in-out transform cursor-pointer"
                            alt=""
                        />
                    </div>
                    <div className="col-span-2 h-[384px] relative rounded-xl">
                        <div className="absolute bottom-[48px] left-[32px]">
                            <h1 className="text-[34px] font-medium">Kitchen</h1>
                            <Link
                                className="underline flex items-center font-medium transition duration-500 ease-in-out transform hover:translate-x-2 hover:opacity-70 hover:scale-105"
                                to={""}
                            >
                                Shop now <ArrowRight className="h-4" />
                            </Link>
                        </div>
                        <img
                            src="src/assets/images/2.png"
                            className="h-[260px] w-[280px] float-end mr-16 mt-16 hover:scale-105 transition duration-500 ease-in-out transform cursor-pointer"
                            alt=""
                        />
                    </div>
                </div>
                <div className="flex justify-between *:font-medium mb-12 mt-9">
                    <div className="text-[40px] leading-10">
                        <h1>
                            New <br /> Arrivals
                        </h1>
                    </div>
                    <div className="flex items-center transition duration-500 ease-in-out transform hover:-translate-x-1 hover:opacity-70">
                        <Link to={""} className="underline">
                            More Products
                        </Link>
                        <ArrowRight className="h-4" />
                    </div>
                </div>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    freeMode={true}
                    scrollbar={true}
                    modules={[FreeMode, Scrollbar]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="bg-[#F3F5F7] rounded-xl relative group">
                            <Link to={""} className="cursor-pointer">
                                <img
                                    src="src/assets/images/3.png"
                                    alt=""
                                    className="transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                />
                            </Link>
                            <div className="absolute top-6 left-4 uppercase font-bold px-4 rounded-md bg-white">
                                New
                            </div>
                            <div className="absolute top-14 left-4 uppercase font-bold px-4 rounded-md bg-[#38CB89] text-white">
                                -50%
                            </div>
                            <Heart className="cursor-pointer absolute top-6 right-4 h-10 w-6 transition duration-500 ease-in-out transform hover:fill-red-500 hover:-translate-y-1 " />
                            <Link
                                to={""}
                                className="absolute cursor-pointer left-0 right-0 bottom-6 mx-auto bg-black text-white text-center w-[230px] p-[12px] rounded-lg transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100"
                            >
                                Add to cart
                            </Link>
                        </div>
                        <div className="*:my-3">
                            <div className="star-rating relative">
                                <div className="stars flex *:h-5 *:w-5">
                                    {Array.from({ length: 5 }, () => (
                                        <Star />
                                    ))}
                                </div>
                                <div className="stars rating absolute top-0 flex *:h-5 *:w-5">
                                    <Star fill="black" strokeWidth={0} />
                                    <Star fill="black" strokeWidth={0} />
                                    <StarHalf fill="black" strokeWidth={0} />
                                </div>
                            </div>
                            <h1 className="font-semibold">Loveseat Sofa</h1>
                            <div className="flex *:text-[14px]">
                                <p className="mr-3 font-semibold">$199.00</p>
                                <p className="line-through text-[#6C7275]">
                                    $400.00
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-[#F3F5F7] rounded-xl relative group">
                            <img
                                src="src/assets/images/3.png"
                                alt=""
                                className="transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-in-out"
                            />
                            <div className="absolute top-6 left-4 uppercase font-bold px-4 rounded-md bg-white">
                                New
                            </div>
                            <div className="absolute top-14 left-4 uppercase font-bold px-4 rounded-md bg-[#38CB89] text-white">
                                -50%
                            </div>
                            <Heart className="absolute top-6 right-4 h-10 w-6" />
                            <div className="absolute left-0 right-0 bottom-6 mx-auto bg-black text-white text-center w-[230px] p-[12px] rounded-lg transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                                Add to cart
                            </div>
                        </div>
                        <div className="*:my-3">
                            <div className="flex *:h-5 *:w-5">
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                            </div>
                            <h1 className="font-semibold">Loveseat Sofa</h1>
                            <div className="flex *:text-[14px]">
                                <p className="mr-3 font-semibold">$199.00</p>
                                <p className="line-through text-[#6C7275] ">
                                    $400.00
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-[#F3F5F7] rounded-xl relative group">
                            <img
                                src="src/assets/images/3.png"
                                alt=""
                                className="transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-in-out"
                            />
                            <div className="absolute top-6 left-4 uppercase font-bold px-4 rounded-md bg-white">
                                New
                            </div>
                            <div className="absolute top-14 left-4 uppercase font-bold px-4 rounded-md bg-[#38CB89] text-white">
                                -50%
                            </div>
                            <Heart className="absolute top-6 right-4 h-10 w-6" />
                            <div className="absolute left-0 right-0 bottom-6 mx-auto bg-black text-white text-center w-[230px] p-[12px] rounded-lg transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                                Add to cart
                            </div>
                        </div>
                        <div className="*:my-3">
                            <div className="flex *:h-5 *:w-5">
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                            </div>
                            <h1 className="font-semibold">Loveseat Sofa</h1>
                            <div className="flex *:text-[14px]">
                                <p className="mr-3 font-semibold">$199.00</p>
                                <p className="line-through text-[#6C7275] ">
                                    $400.00
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-[#F3F5F7] rounded-xl relative group">
                            <img
                                src="src/assets/images/3.png"
                                alt=""
                                className="transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-in-out"
                            />
                            <div className="absolute top-6 left-4 uppercase font-bold px-4 rounded-md bg-white">
                                New
                            </div>
                            <div className="absolute top-14 left-4 uppercase font-bold px-4 rounded-md bg-[#38CB89] text-white">
                                -50%
                            </div>
                            <Heart className="absolute top-6 right-4 h-10 w-6" />
                            <div className="absolute left-0 right-0 bottom-6 mx-auto bg-black text-white text-center w-[230px] p-[12px] rounded-lg transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                                Add to cart
                            </div>
                        </div>
                        <div className="*:my-3">
                            <div className="flex *:h-5 *:w-5">
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                            </div>
                            <h1 className="font-semibold">Loveseat Sofa</h1>
                            <div className="flex *:text-[14px]">
                                <p className="mr-3 font-semibold">$199.00</p>
                                <p className="line-through text-[#6C7275] ">
                                    $400.00
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-[#F3F5F7] rounded-xl relative group">
                            <img
                                src="src/assets/images/3.png"
                                alt=""
                                className="transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-in-out"
                            />
                            <div className="absolute top-6 left-4 uppercase font-bold px-4 rounded-md bg-white">
                                New
                            </div>
                            <div className="absolute top-14 left-4 uppercase font-bold px-4 rounded-md bg-[#38CB89] text-white">
                                -50%
                            </div>
                            <Heart className="absolute top-6 right-4 h-10 w-6" />
                            <div className="absolute left-0 right-0 bottom-6 mx-auto bg-black text-white text-center w-[230px] p-[12px] rounded-lg transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                                Add to cart
                            </div>
                        </div>
                        <div className="*:my-3">
                            <div className="flex *:h-5 *:w-5">
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                            </div>
                            <h1 className="font-semibold">Loveseat Sofa</h1>
                            <div className="flex *:text-[14px]">
                                <p className="mr-3 font-semibold">$199.00</p>
                                <p className="line-through text-[#6C7275] ">
                                    $400.00
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-[#F3F5F7] rounded-xl relative group">
                            <img
                                src="src/assets/images/3.png"
                                alt=""
                                className="transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-in-out"
                            />
                            <div className="absolute top-6 left-4 uppercase font-bold px-4 rounded-md bg-white">
                                New
                            </div>
                            <div className="absolute top-14 left-4 uppercase font-bold px-4 rounded-md bg-[#38CB89] text-white">
                                -50%
                            </div>
                            <Heart className="absolute top-6 right-4 h-10 w-6" />
                            <div className="absolute left-0 right-0 bottom-6 mx-auto bg-black text-white text-center w-[230px] p-[12px] rounded-lg transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                                Add to cart
                            </div>
                        </div>
                        <div className="*:my-3">
                            <div className="flex *:h-5 *:w-5">
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                            </div>
                            <h1 className="font-semibold">Loveseat Sofa</h1>
                            <div className="flex *:text-[14px]">
                                <p className="mr-3 font-semibold">$199.00</p>
                                <p className="line-through text-[#6C7275] ">
                                    $400.00
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-[#F3F5F7] rounded-xl relative group">
                            <Link to={""} className="cursor-pointer">
                                <img
                                    src="src/assets/images/3.png"
                                    alt=""
                                    className="transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                />
                            </Link>
                            <div className="absolute top-6 left-4 uppercase font-bold px-4 rounded-md bg-white">
                                New
                            </div>
                            <div className="absolute top-14 left-4 uppercase font-bold px-4 rounded-md bg-[#38CB89] text-white">
                                -50%
                            </div>
                            <Heart className="absolute top-6 right-4 h-10 w-6" />
                            <Link
                                to={""}
                                className="absolute cursor-pointer left-0 right-0 bottom-6 mx-auto bg-black text-white text-center w-[230px] p-[12px] rounded-lg transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100"
                            >
                                Add to cart
                            </Link>
                        </div>
                        <div className="*:my-3">
                            <div className="flex *:h-5 *:w-5">
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                            </div>
                            <h1 className="font-semibold">Loveseat Sofa</h1>
                            <div className="flex *:text-[14px]">
                                <p className="mr-3 font-semibold">$199.00</p>
                                <p className="line-through text-[#6C7275] ">
                                    $400.00
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-[#F3F5F7] rounded-xl relative group">
                            <img
                                src="src/assets/images/3.png"
                                alt=""
                                className="transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-in-out"
                            />
                            <div className="absolute top-6 left-4 uppercase font-bold px-4 rounded-md bg-white">
                                New
                            </div>
                            <div className="absolute top-14 left-4 uppercase font-bold px-4 rounded-md bg-[#38CB89] text-white">
                                -50%
                            </div>
                            <Heart className="absolute top-6 right-4 h-10 w-6" />
                            <div className="absolute left-0 right-0 bottom-6 mx-auto bg-black text-white text-center w-[230px] p-[12px] rounded-lg transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                                Add to cart
                            </div>
                        </div>
                        <div className="*:my-3">
                            <div className="flex *:h-5 *:w-5">
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                            </div>
                            <h1 className="font-semibold">Loveseat Sofa</h1>
                            <div className="flex *:text-[14px]">
                                <p className="mr-3 font-semibold">$199.00</p>
                                <p className="line-through text-[#6C7275] ">
                                    $400.00
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="grid grid-cols-4 gap-7 *:w-auto *:rounded-lg my-[74px]">
                    <div className="bg-[#F3F5F7] h-[280px] flex justify-center flex-col">
                        <div className="ml-12">
                            <Truck className="h-14 w-14 mb-3" strokeWidth={1} />
                            <h1 className="font-medium text-[20px] tracking-wider my-3">
                                Free Shipping
                            </h1>
                            <p className="font-[14px] text-[#6C7275]">
                                Order above $200
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#F3F5F7] h-[280px] flex justify-center flex-col">
                        <div className="ml-12">
                            <Banknote
                                className="h-14 w-14 mb-3"
                                strokeWidth={1}
                            />
                            <h1 className="font-medium text-[20px] tracking-wider my-3">
                                Money-back
                            </h1>
                            <p className="font-[14px] text-[#6C7275]">
                                30 days guarantee
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#F3F5F7] h-[280px] flex justify-center flex-col">
                        <div className="ml-12">
                            <LockKeyhole
                                className="h-14 w-14 mb-3"
                                strokeWidth={1}
                            />
                            <h1 className="font-medium text-[20px] tracking-wider my-3">
                                Secure Payments
                            </h1>
                            <p className="font-[14px] text-[#6C7275]">
                                Secured by Stripe
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#F3F5F7] h-[280px] flex justify-center flex-col">
                        <div className="ml-12">
                            <Phone className="h-14 w-14 mb-3" strokeWidth={1} />
                            <h1 className="font-medium text-[20px] tracking-wider my-3">
                                24/7 Support
                            </h1>
                            <p className="font-[14px] text-[#6C7275]">
                                Phone and Email support
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
