import dayjs from "dayjs";
import {faker} from "@faker-js/faker";
import {sample} from "lodash";

const projects = [
    {
        epmCode: 'EM123',
        name: 'Project Example',
        phases: [
            {
                phaseName: 'Phase 1',
                kpi: {
                    uobs: dayjs('2022-12-29').format('MMM-YY'),
                    uobm: dayjs('2022-12-29').format('MMM-YY'),
                    uobt: null,
                    uobi: null,
                    uobc: null,
                    uobv: null,
                    uobhk: null,
                    uobob: null
                }
            }
        ],
        btsHead: faker.lorem.word(2).toUpperCase(),
        btomHead: faker.lorem.word(2).toUpperCase(),
        portfolioHead: faker.lorem.word(2).toUpperCase(),
        projectManager: faker.lorem.word(2).toUpperCase(),
        deliveryHead: faker.lorem.word(2).toUpperCase(),
        deliveryManager: faker.lorem.word(2).toUpperCase(),
        businessSegment: sample(['Group Retail', 'Business']),
        team: sample(['DB', 'TMRW', 'CP', 'CEW', 'IDB']),
        startDate: dayjs('2022-11-29').format('MMM-YY'),
        completionDate: dayjs('2022-12-29').format('MMM-YY'),
        closureDate: '',
        strategic: sample(['Strategic', 'BAU Partner']),
        approvalComm: faker.lorem.word(3).toUpperCase(),
        approvalDate: dayjs('2022-11-29').format('DD-MMM-YY'),
        projectReview: faker.lorem.paragraph(),
        executiveSummary: faker.lorem.paragraph(),
        achievements: faker.lorem.paragraph(),
        deliverableStatus: {},
        riskIssues: {}
    }
]