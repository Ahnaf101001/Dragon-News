import { useEffect, useState } from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const LeftSideNsv = () => {

    const [categories, setCategories] = useState([]);

    const [newses, setNewses] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data1 => setNewses(data1))
    }, [])

    return (
        <div className="flex flex-col gap-[40px]">
            <h2 className="text-3xl">All Categories</h2>
            <div className="flex flex-col">
                {
                    categories.map(category => <Link
                        key={category.id}
                        className="block text-3xl p-[17px]"
                        to={`/category/${category.id}`}
                    >
                        {category.name}
                    </Link>)
                }
            </div>
            <div>
                {
                    newses.slice(0, 3).map(news => <Link 
                    key={news._id} 
                    to={`/news/${news._id}`}>
                        <div>
                            <img src={news.image_url} alt={news.title} />
                            <h2 className="font-bold">{news.title}</h2>
                            <p className="flex items-center gap-2"><FaCalendar></FaCalendar>{news.author.published_date}</p>
                        </div>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default LeftSideNsv;