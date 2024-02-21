import { useSelector } from "react-redux";

const List = () => {
    const { renderList } = useSelector(state => state.Events);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400 sticky top-0 bg-gray-50 dark:bg-gray-800">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Sold
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {renderList?.map((item , idx) => (
                        <tr key={item.id} className="border-b border-gray-200 dark:border-gray-700">
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {idx+1}
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {item.title}
                            </td>
                            <td className="px-6 py-4">
                                {item.description}
                            </td>
                            <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                {item.price}
                            </td>
                            <td className="px-6 py-4">
                                {item.category}
                            </td>
                            <td className="px-6 py-4">
                                {item.sold.toString()}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default List;
