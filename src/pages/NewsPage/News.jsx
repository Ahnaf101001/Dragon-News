import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import NavBar from "../Shared/NavBar/NavBar";
import RightSideNav from "../Shared/Right Side Nav/RightSideNav";

const News = () => {

    const { id } = useParams();

    return (
        <div>
            <div className="flex flex-col gap-[34px] mb-[80px] mt-[50px]">
                <Header></Header>
                <NavBar></NavBar>
            </div>
            <h2 className="text-xl font-bold">Dragon News</h2>
            <p>{id}</p>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-[24px]">
                <div className="lg:col-span-3">
                    
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;