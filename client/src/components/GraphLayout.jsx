import { useDispatch } from "react-redux";
import Dropdown from "./Dropdown";
import { setBarGraphData, setPieChartData } from "../store/transactionReducer";
import { useNavigate } from "react-router-dom";

const GraphLayout = ({children , title}) => {

const navigate = useNavigate();    

const dispatch = useDispatch();    

const fetchForGraphs = (input) => {
    fetch(`http://localhost:5001/api/transactions/getPieChartData?month=${input}`)
    .then(res => res.json())
    .then(data => dispatch(setPieChartData(data)));

    fetch(`http://localhost:5001/api/transactions/getBarChartData?month=${input}`)
    .then(res => res.json())
    .then(data => dispatch(setBarGraphData(data)));

}

const forCancel = () => {
  return    
}

const handleNavigate = () => {
    navigate('/');
}

    return(
        <>
          <div className="w-screen h-screen flex flex-col items-center">
              <div className="w-full h-28 min-h-28 bg-blue-500 flex justify-center items-center">
                 <Dropdown onSelect={fetchForGraphs} forCancel={forCancel} />
                 <a onClick={handleNavigate} className="ml-5 underline text-white hover:cursor-pointer">Go back to Main Page</a>
              </div>
              {children}
          </div>
        </>
    )
}

export default GraphLayout;