import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRenderList } from "../store/transactionReducer";

const Dropdown = ({onSelect , forCancel}) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const[currSel , setCurrSel] = useState('Select month')

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const dispatch = useDispatch();

    const{originalRenderList} = useSelector(state => state.Events);

    const handleMonth = (inputMonth) => {
        setIsOpen(!isOpen);

        if(inputMonth === 'cancel'){
            forCancel()
            setCurrSel('Select month')
            return
        }
        onSelect(inputMonth);
        setCurrSel(inputMonth)
    }

    return(
        <>
            <div className="relative">
                <button id="dropdownDefaultButton" onClick={toggleDropdown} className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-40 min-w-40" type="button">
                    {currSel}
                    <svg className={`w-2.5 h-2.5 ms-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>

                <div id="dropdown" className={`absolute top-full z-10 ${isOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li >
                        <a onClick={() => handleMonth('cancel')} href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Cancel selection</a>
                    </li>
                        {months.map((month, index) => (
                            <li key={index}>
                                <a onClick={() => handleMonth(month)} href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{month}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Dropdown;
