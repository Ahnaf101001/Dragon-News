import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex bg-[#F3F3F3] p-[16px]">
            <button className="btn bg-[#D72050] text-white hover:text-[#D72050] hover:bg-white  hover:border-[#D72050] sm:btn-sm md:btn-md lg:btn-lg">Latest</button>
            <Marquee pauseOnHover={true} speed={100} loop={0}>
                <Link to='/'>Hello World</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;