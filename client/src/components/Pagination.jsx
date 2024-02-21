import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setOriginalRenderList, setRenderList } from "../store/transactionReducer.js";

const Pagination = () => {

    const[activePage , setActivePage] = useState(1);

    const dispatch = useDispatch();


    const fetchData = () => {
        fetch(`https://dataapiapp-1.onrender.com/api/transactions/pagination?pageNumber=${activePage}&itemsPerPage=${10}`)
        .then(res => res.json())
        .then(data => {
            dispatch(setRenderList(data))
            dispatch(setOriginalRenderList(data))
        })
    }

    useEffect(() => {
      fetchData();
    } , [activePage])


    const handlePrev = () => {
        setActivePage((prev) => {
            if(prev > 1){
                return prev -= 1;
            }
            return prev;
        })
    }
    const handleNext = () => {
        setActivePage((prev) => {
            if(prev < 6){
                return prev += 1;
            }
            return prev;
        })
    }

    return(
        <div className="w-full flex justify-between items-center bg-blue-500">
           <p className="ml-5 text-white flex justify-center items-center">{`Page no. ${activePage}`}</p>
            <div className="flex justify-center items-center gap-3 m-5">
                <button onClick={handlePrev} class="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white">
                Prev
                </button>
                <button onClick={handleNext} class="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white">
                Next
                </button>
            </div>
            <p className="mr-5 text-white flex justify-center items-center">items per page : 10</p>

        </div>
    )
}

export default Pagination;