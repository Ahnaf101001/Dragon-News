import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="lg:max-w-[1140px] m-auto font-poppins">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;