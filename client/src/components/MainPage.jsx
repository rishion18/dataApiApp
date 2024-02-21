import { useDispatch, useSelector } from "react-redux";
import Dropdown from "./Dropdown.jsx";
import Pagination from "./Pagination.jsx";
import SearchBar from "./searchBar.jsx";
import { setAllTransactions, setOriginalRenderList, setRenderList } from "../store/transactionReducer.js";
import { useEffect } from "react";
import List from "./List.jsx";
import { useNavigate } from "react-router-dom";

const MainPage = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch();

  const fetchTransactions = () => {
    fetch(`http://localhost:5001/api/transactions/pagination?pageNumber=${1}&itemsPerPage=${10}`)
    .then(res => res.json())
    .then(data => {
        dispatch(setRenderList(data))
        dispatch(setOriginalRenderList(data))
    })
  }

  const fetchAllTransactions = () => {
    fetch(`http://localhost:5001/api/transactions/getAllTransactions`)
    .then(res => res.json())
    .then(data => dispatch(setAllTransactions(data)))
  }
  const{originalRenderList} = useSelector(state => state.Events);


  const fetchTransactionsThatMonth = (month) => {
    fetch(`http://localhost:5001/api/transactions/sortByMonth?month=${month}`)
    .then(res => res.json())
    .then(data => dispatch(setRenderList(data)))
}

const forCancel = () => {
    dispatch(setRenderList(originalRenderList));
    
}

  useEffect(() => {
    fetchTransactions();
    fetchAllTransactions();
  } , [])

  const handleNav = () => {
    navigate('/charts');
  }

   return(
    <>
        <div className="w-screen h-screen flex flex-col justify-between items-center">
            <div className="w-full h-28 min-h-28 bg-blue-500 flex justify-center items-center"> 
                <div className="w-full flex justify-center items-center gap-5">
                    <SearchBar/>
                    <Dropdown onSelect={fetchTransactionsThatMonth} forCancel={forCancel}/>
                    <a onClick={handleNav} className="text-white underline text-lg hover:cursor-pointer">view charts</a>
                </div>
            </div>
            <List/>
            <div className="w-full">
             <Pagination/>
            </div>
        </div>
    </>
   )
}

export default MainPage;