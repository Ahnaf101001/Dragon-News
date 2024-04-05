import { AiFillStar } from "react-icons/ai";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCardsHome = ({ newses }) => {

    const { author, title, image_url, details, rating, total_view, _id } = newses;
    const { name, img, published_date } = author;
    const { number } = rating;

    return (
        <div className="border-2 rounded-lg mb-[30px]">
            {/* writer section */}
            <div className="h-[100px] bg-slate-100 py-[13px] px-[20px] flex justify-between">
                {/* left side */}
                <div className="flex items-center gap-[10px]">
                    <img className="h-[40px] w-[40px] rounded-full" src={img} alt={name} />
                    <div>
                        <p className="text-xl font-bold">{name}</p>
                        <p>{published_date}</p>
                    </div>
                </div>
                {/* right side */}
                <div className="flex items-center gap-2 text-2xl">
                    <CiBookmark></CiBookmark>
                    <CiShare2></CiShare2>
                </div>
            </div>
            {/* news section */}
            <div className="p-[20px] flex flex-col gap-[20px]">
                <h2 className="text-2xl font-bold">{title}</h2>
                <img src={image_url} alt={title} />
                {
                    details.length > 200 ? <p>{details.slice(0, 200)} <Link className="text-orange-500" to={`/news/${_id}`}>Read More...</Link></p>
                        :
                        <p>{details}</p>
                }
            </div>
            <hr />
            {/* news ratings */}
            <div className="flex items-center justify-between p-[20px]">
                <div className="flex items-center gap-2">
                    <div className="flex gap-2">
                        <AiFillStar className="text-yellow-500"></AiFillStar>
                        <AiFillStar className="text-yellow-500"></AiFillStar>
                        <AiFillStar className="text-yellow-500"></AiFillStar>
                        <AiFillStar className="text-yellow-500"></AiFillStar>
                        <AiFillStar className="text-yellow-500"></AiFillStar>
                    </div>
                    <p>{number}</p>
                </div>
                <div className="flex gap-2 items-center">
                    <FaEye></FaEye>
                    <p>{total_view}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsCardsHome;