import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZoneImage1 from '../../../assets/Images/qZone1.png';
import qZoneImage2 from '../../../assets/Images/qZone2.png';
import qZoneImage3 from '../../../assets/Images/qZone3.png';
import bgImage from '../../../assets/Images/bg.png';



const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">Login With</h2>
                <button className="btn btn-outline w-full border">
                <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline w-full border">
                <FaGithub></FaGithub>
                Login with Github
                </button>
            </div>
            <div className="p-4 mb-6">
                <h2 className="text-lg font-semibold text-[#403F3F]">Find Us On</h2>
                <div className="border-2 rounded-t-lg">
                <a className="p-4 text-lg flex items-center" href="">
                    <FaFacebook className="mr-3"></FaFacebook>
                    Facebook
                </a>
                </div>
                <div className="border-2">
                <a className="p-4 text-lg flex items-center" href="">
                    <FaTwitter className="mr-3"></FaTwitter>
                    Twitter
                </a>
                </div>
                <div className="border-2 rounded-b-lg">
                <a className="p-4 text-lg flex items-center" href="">
                    <FaInstagram className="mr-3"></FaInstagram>
                    instagram
                </a>
                </div>
            </div>
            <div className="p-4 mb-6 bg-[#F3F3F3]">
                <h2 className="text-lg font-semibold text-[#403F3F]">Q-Zone</h2>
                <img src={qZoneImage1} alt="" />
                <img src={qZoneImage2} alt="" />
                <img src={qZoneImage3} alt="" />
            </div>
            <div className="px-8 py-16 bg-[{bgImage}]">
                <h2 className=" text-center mb-6 text-3xl font-bold">Create an Amazing Newspaper</h2>
            </div>
                
        </div>
    );
};

export default RightSideNav;