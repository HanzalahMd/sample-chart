import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const projects = [...Array(12)].map((_, index) => ({
    id: faker.lorem.word(5).toUpperCase(),
    name: faker.lorem.words(3),
    phase: sample(['Phase 1', 'Phase 2', 'Phase 3', 'Phase 4']),
    btsHead: faker.lorem.word(2).toUpperCase(),
    btomHead: faker.lorem.word(2).toUpperCase(),
    portfolioHead: faker.lorem.word(2).toUpperCase(),
    projectManager: faker.lorem.word(2).toUpperCase(),
    deliveryHead: faker.lorem.word(2).toUpperCase(),
    deliveryManager: faker.lorem.word(2).toUpperCase(),
    businessSegment: sample(['Group Retail', 'Business']),
    team: sample(['DB', 'TMRW', 'CP', 'CEW', 'IDB']),
    startDate: faker.date.between('2020-01-01T00:00:00.000Z', '2022-11-01T00:00:00.000Z').toLocaleDateString(),
    completionDate: faker.date.between('2020-01-01T00:00:00.000Z', '2023-01-01T00:00:00.000Z').toLocaleDateString(),
    strategic: sample(['Strategic', 'BAU Partner']),
    approvalComm: faker.lorem.word(3).toUpperCase(),
    lastUpdatedBy: faker.name.firstName(),
    lastUpdatedDate: faker.date.between('2020-01-01T00:00:00.000Z', '2023-01-01T00:00:00.000Z').toLocaleDateString(),
    approvalDate: faker.date.between('2022-01-01T00:00:00.000Z', '2023-01-01T00:00:00.000Z').toLocaleDateString(),
    isVerified: faker.datatype.boolean(),
    status: sample(['WIP', 'Completed', 'On-Hold'])
}));

export default projects;