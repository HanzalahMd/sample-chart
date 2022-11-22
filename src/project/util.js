import dayjs from "dayjs";

const customParseFormat = require('dayjs/plugin/customParseFormat');

dayjs.extend(customParseFormat)

export const fetchProjectList = () => {
    // Hold an instance of a db object for us to store the IndexedDB data in
    let db;

    // Let us open our database
    const DBOpenRequest = window.indexedDB.open('projectList', 1);

    // Register two event handlers to act on the database being opened successfully, or not
    DBOpenRequest.onerror = (event) => {
        console.log('Error loading database.');
    };

    DBOpenRequest.onsuccess = (event) => {
        console.log('Database initialised.');

        // Store the result of opening the database in the db variable. This is used a lot below
        db = DBOpenRequest.result;
    }
}

export const sortTable = (projectList) => {

    // Sorted Array by Status
    const WIP =  projectList.filter(p => p.status === 'WIP');
    const completed = projectList.filter(p => p.status === 'Completed');
    const onHold = projectList.filter(p => p.status === 'On-Hold');

    // sort by date function
    const sortByDate = (array) => {
        return array.sort((a, b) => {
            const date1 = dayjs(a.approvalDate, 'DD/MM/YYYY')
            const date2 = dayjs(b.approvalDate, 'DD/MM/YYYY')
            return date2 - date1
        })
    }

    // Sorted Array by Date
    const WIP2 = sortByDate(WIP);
    const completed2 = sortByDate(completed);
    const onHold2 = sortByDate(onHold);

    // Combine all sorted arrays and return the value
    return WIP2.concat(completed2).concat(onHold2);
}