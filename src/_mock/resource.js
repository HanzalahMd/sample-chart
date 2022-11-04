import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

const resources = [...Array(72)].map((_, index) => ({
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    vendor: sample(['HCL', 'Optimum', 'Azure', 'Zhulke', 'Accenture']),
    program: sample(['DB', 'TMRW', 'CP', 'CEW', 'IDB']),
    squad: faker.lorem.slug(),
    status: sample(['On-Boarded', 'Off-Boarded']),
    role: sample([
        'UX Designer',
        'UI Designer',
        'System Analyst',
        'UI/UX Designer',
        'Project Manager',
        'Backend Developer',
        'Full Stack Designer',
        'Front End Developer',
        'Full Stack Developer',
    ]),
    proficiencySOW: sample([
        'L1-Beginner',
        'L2-Advanced Beginner',
        'L3-Competent',
        'L4-Proficient',
        'L5-Expert'
    ]),
    proficiencyEval: sample([
        'L1-Beginner',
        'L2-Advanced Beginner',
        'L3-Competent',
        'L4-Proficient',
        'L5-Expert'
    ]),
    attritionReason: sample([
        'Resigned - Voluntary',
        'Resigned - Non-voluntary',
        'Transfer / Change of Contract'
    ]),
    offBoardedDate: faker.date.past()
}));

export default resources;