import transactions from "../models/transactions.models.js";

export const initialiseData = async (data) => {
    try {
        const existingDataCount = await transactions.countDocuments();
        if (existingDataCount > 0) {
            console.log('Data already initialized. Skipping data insertion.');
            return; 
        }

        await transactions.insertMany(data);

        console.log('Data initialization successful.');
    } catch (error) {
        console.error('Error initializing data:', error);
    }
};

function monthNameToNumber(monthName) {
    const months = {
        'January': 1,
        'February': 2,
        'March': 3,
        'April': 4,
        'May': 5,
        'June': 6,
        'July': 7,
        'August': 8,
        'September': 9,
        'October': 10,
        'November': 11,
        'December': 12
    };

    return months[monthName] || null;
}

const monthName = 'February';
const monthNumber = monthNameToNumber(monthName);
console.log(monthNumber); 


export const sortByMonth = async (req, res) => {
    try {
        const month = req.query.month; 

        const data = await transactions.find();

        const filteredData = data.filter(item => new Date(item.dateOfSale).getMonth() + 1 === monthNameToNumber(month));

        res.status(200).json(filteredData);
    } catch (error) {
        console.error('Error sorting data by month:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

export const getDataForMonth = async(req , res) => {
try{
    const month = req.query.month;
    const data = await transactions.find();
    const filteredData = data.filter(item => new Date(item.dateOfSale).getMonth() + 1 === monthNameToNumber(month));

    const result = filteredData.reduce((acc , item) => {
         if(item.sold){
            acc.totalSale += item.price;
            acc.totalSoldItems += 1;
         }else{
            acc.totalItemsNotSold += 1;
         }
         return acc;
    } , {totalSale: 0 , totalSoldItems: 0 , totalItemsNotSold:0});

    res.status(200).send(result);
}catch (error) {
        console.error('Error sorting data by month:', error);
        res.status(500).json({ message: 'Server Error' });
    }


}

export const getBarChartData = async (req, res) => {
    try {
        const month = req.query.month;
        const data = await transactions.find();
        const filteredData = data.filter(item => new Date(item.dateOfSale).getMonth() + 1 === monthNameToNumber(month));

        const priceRanges = {
            '0-100': 0,
            '101-200': 0,
            '201-300': 0,
            '301-400': 0,
            '401-500': 0,
            '501-600': 0,
            '601-700': 0,
            '701-800': 0,
            '801-900': 0,
            '901-above': 0
        };

        filteredData.forEach(item => {
            const price = item.price;
            if (price >= 0 && price <= 100) {
                priceRanges['0-100']++;
            } else if (price >= 101 && price <= 200) {
                priceRanges['101-200']++;
            } else if (price >= 201 && price <= 300) {
                priceRanges['201-300']++;
            } else if (price >= 301 && price <= 400) {
                priceRanges['301-400']++;
            } else if (price >= 401 && price <= 500) {
                priceRanges['401-500']++;
            } else if (price >= 501 && price <= 600) {
                priceRanges['501-600']++;
            } else if (price >= 601 && price <= 700) {
                priceRanges['601-700']++;
            } else if (price >= 701 && price <= 800) {
                priceRanges['701-800']++;
            } else if (price >= 801 && price <= 900) {
                priceRanges['801-900']++;
            } else {
                priceRanges['901-above']++;
            }
        });

        res.status(200).send(priceRanges);
    } catch (error) {
        console.error('Error getting bar chart data:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

export const getPieChartData = async (req, res) => {
    try {
        const month = req.query.month;
        const data = await transactions.find();
        const filteredData = data.filter(item => new Date(item.dateOfSale).getMonth() + 1 === monthNameToNumber(month));

        const categoryCounts = {};

        filteredData.forEach(item => {
            const category = item.category;
            categoryCounts[category] = (categoryCounts[category] || 0) + 1;
        });

        res.status(200).json(categoryCounts);
    } catch (error) {
        console.error('Error getting pie chart data:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

export const pagination = async (req, res) => {
    try {
        const { pageNumber, itemsPerPage } = req.query;

        const data = await transactions.find();

        const startIndex = (pageNumber - 1) * itemsPerPage;
        const endIndex = pageNumber * itemsPerPage;

        const pageData = data.slice(startIndex, endIndex);

        res.status(200).json(pageData);
    } catch (error) {
        console.error('Error handling pagination:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

export const getAllTransactions = async (req, res) => {
    try {
        const data = await transactions.find();

        res.status(200).json(data);
    } catch (error) {
        console.error('Error getting all transactions:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};


