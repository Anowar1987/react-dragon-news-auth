import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from 'moment';
import { FaBusinessTime } from "react-icons/fa";
import cardImage1 from '../../../assets/Images/1.png'
import cardImage2 from '../../../assets/Images/2.png'
import cardImage3 from '../../../assets/Images/3.png'


const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))


    }, [])

    return (
        <div>
            <h2 className="text-xl font-semibold">All Categories</h2>
            <div className="px-14 py-4 bg-[#E7E7E7] rounded-md mt-5 mb-7">
                <h3 className="text-xl font-semibold text-[#403F3F]">National News</h3>
            </div>

            {
                categories.map(category => <Link 
                    className="block text-xl font-medium text-[#9F9F9F] mb-7" 
                    key={category.id} to={`/category/${category.id}`}>{category.name}
                    </Link>)
            }
            <div>
            <div className="mb-4 card card-compact w-full bg-base-100 shadow-xl">
            <img src={cardImage1} alt="" />
            <div className="card-body">
                <h2 className="card-title text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                <div className="flex">
                    <p>Sports</p>
                    <FaBusinessTime></FaBusinessTime>
                    <p>{moment().format("MMM D, YYYY")}</p>
                </div>
            </div>
            </div>
            <div className="mb-4 card card-compact w-full bg-base-100 shadow-xl">
            <img src={cardImage2} alt="" />
            <div className="card-body">
                <h2 className="card-title text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                <div className="flex">
                    <p>Sports</p>
                    <FaBusinessTime></FaBusinessTime>
                    <p>{moment().format("MMM D, YYYY")}</p>
                </div>
            </div>
            </div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
            <img src={cardImage3} alt="" />
            <div className="card-body">
                <h2 className="card-title text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                <div className="flex">
                    <p>Sports</p>
                    <FaBusinessTime></FaBusinessTime>
                    <p>{moment().format("MMM D, YYYY")}</p>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default LeftSideNav;