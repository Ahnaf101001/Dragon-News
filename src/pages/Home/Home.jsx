import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNsv from "../Shared/Lreft Side Nav/LeftSideNsv";
import NavBar from "../Shared/NavBar/NavBar";
import RightSideNav from "../Shared/Right Side Nav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCardsHome from "../Shared/News Cards For The Home Page/NewsCardsHome";

const Home = () => {

    const newses = useLoaderData();
    console.log(newses);

    return (
        <div>
            <div className="flex flex-col gap-[34px] mb-[80px] mt-[50px]">
                <Header></Header>
                <BreakingNews></BreakingNews>
                <NavBar></NavBar>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-[24px]">
                <div>
                    <LeftSideNsv></LeftSideNsv>
                </div>
                <div className="lg:col-span-2">
                    {
                        newses.map(news => <NewsCardsHome
                            key={news._id}
                            newses={news}
                        ></NewsCardsHome>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;