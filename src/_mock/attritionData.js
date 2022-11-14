import {faker} from "@faker-js/faker";
import dayjs from "dayjs";

const attritionData = [...Array(36)].map((_, index) => {
    let date;
    if(index < 12){
        date = new Date(2020, index)
    } else if (index < 24){
        date = new Date(2021, index-12)
    } else if (index < 36){
        date = new Date(2022, index-24)
    }
    return {
        month: dayjs(date).format('MMM YY'),
        value: {
            headcount: faker.datatype.number({ min: 30, max: 60 }),
            attrition: faker.datatype.number({ min: -20, max: -1 })
        }
    }
})

export default attritionData;