import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';
import banner from '../../../assets/bg.png';
import { Link } from "react-router-dom";

const RightSideNav = () => {
    return (
        <div className="flex flex-col gap-[30px]">
            {/* Login */}
            <div className="flex flex-col gap-[20px] p-4">
                <h2 className="text-3xl font-bold">Login with</h2>
                <div className="flex flex-col gap-[10px]">
                    <button className="btn bg-transparent flex items-center gap-3 hover:bg-cyan-400 hover:text-white text-cyan-400 border-cyan-400 min-w-full"><FaGoogle></FaGoogle> Login with Google</button>
                    <button className="btn bg-transparent flex items-center gap-3 hover:bg-black hover:text-white text-black border-black min-w-full"><FaGithub></FaGithub> Login with Github</button>
                </div>
            </div>
            {/* Social Sites */}
            <div className="flex flex-col gap-[20px] p-4">
                <h2 className="text-3xl font-bold">Find Us On</h2>
                <div>
                    <button className="btn min-w-full rounded-none bg-transparent flex items-center border-1 border-slate-200 gap-3"><FaFacebook></FaFacebook> Facebook</button>
                    <button className="btn min-w-full rounded-none bg-transparent flex items-center border-1 border-slate-200 gap-3 border-y-none"><FaTwitter></FaTwitter> Twitter</button>
                    <button className="btn min-w-full rounded-none bg-transparent flex items-center border-1 border-slate-200 gap-3"><FaInstagram></FaInstagram> Instagram</button>
                </div>
            </div>
            {/* Q Zone */}
            <div className="p-4 bg-gray-100">
                <h2 className="text-3xl font-bold">Q Zone</h2>
                <div>
                    <img src={qZone1} alt="" />
                    <img src={qZone2} alt="" />
                    <img src={qZone3} alt="" />
                </div>
            </div>
            {/* banner */}
            <div
                style={
                    {
                        backgroundImage: `url(${banner})`,
                    }
                }
                className="px-[32px] py-[64px] text-center flex flex-col gap-[30px] min-h-full"
            >
                <h2 className="text-3xl text-white">Create an Amazing Newspaper</h2>
                <p className="text-white">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <Link>
                    <a className="btn bg-[#D72050] text-white hover:text-[#D72050] hover:bg-white rounded-none border-[#D72050] hover:border-[#D72050] sm:btn-sm md:btn-md lg:btn-lg">Learn More</a>
                </Link>
            </div>
        </div>
    );
};

export default RightSideNav;