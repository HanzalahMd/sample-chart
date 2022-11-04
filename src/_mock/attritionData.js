import {faker} from "@faker-js/faker";

const attritionData = [
    {
        year: 2020,
        totalHeadcount: [...Array(12)].map(() => faker.datatype.number({ min: 30, max: 60 })),
        totalAttrition: [...Array(12)].map(() => faker.datatype.number({ min: -20, max: -1 }))
    },
    {
        year: 2021,
        totalHeadcount: [...Array(12)].map(() => faker.datatype.number({ min: 30, max: 60 })),
        totalAttrition: [...Array(12)].map(() => faker.datatype.number({ min: -20, max: -1 }))
    },
    {
        year: 2022,
        totalHeadcount: [...Array(12)].map(() => faker.datatype.number({ min: 30, max: 60 })),
        totalAttrition: [...Array(11)].map(() => faker.datatype.number({ min: -20, max: -1 }))
    }
]