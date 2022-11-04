const DATA = {
    vendors: [
        {
            name: "HCL",
            program: [
            {
                name: 'TMRW',
                assessedValue: {
                    high: 5,
                    low: 2,
                    equal: 12,
                    fresh: 2
                }
            },
            {
                name: 'DBB',
                assessedValue: {
                    high: 2,
                    low: 1,
                    equal: 10,
                    fresh: 0
                }
            },
            {
                name: 'CP',
                assessedValue: {
                    high: 1,
                    low: 0,
                    equal: 12,
                    fresh: 1
                }
            },
            {
                name: 'IDB',
                assessedValue: {
                    high: 0,
                    low: 0,
                    equal: 8,
                    fresh: 0
                }
            }
        ],
            resource: [
            { id: 'TM264', program: 'TMRW', squad: 'TMRW-BTS-SQ1', name: 'John Cena', role: 'React Developer', sow: 'L3-Competent', assessment: 'L5-Expert'},
            { id: 'DB629', program: 'IDB', squad: 'IDB-QRT-SQ3', name: 'Maria Carey', role: 'Backend Developer', sow: 'L3-Competent', assessment: 'L3-Competent'},
            { id: 'DB217', program: 'DBB', squad: 'DBB-SWE-SQ4', name: 'Tony Stark', role: 'System Analyst', sow: 'L1-Beginner', assessment: 'L2-Advanced Beginner'},
            { id: 'CP966', program: 'CP', squad: 'CP-NRT-SQ2', name: 'Harvey Norman', role: 'Developer', sow: 'L3-Competent', assessment: 'L2-Advanced Beginner'},
        ]
        },
        {
            name: "Optimum",
            program: [
                {
                    name: 'TMRW',
                    assessedValue: {
                        high: 0,
                        low: 1,
                        equal: 1,
                        fresh: 0
                    }
                },
                {
                    name: 'DBB',
                    assessedValue: {
                        high: 3,
                        low: 0,
                        equal: 12,
                        fresh: 0
                    }
                },
                {
                    name: 'CP',
                    assessedValue: {
                        high: 0,
                        low: 0,
                        equal: 4,
                        fresh: 2
                    }
                },
                {
                    name: 'IDB',
                    assessedValue: {
                        high: 2,
                        low: 1,
                        equal: 3,
                        fresh: 2
                    }
                }
            ],
            resource: [
                { id: 'FJ23', program: 'IDB', squad: 'TMRW-WEV-SQ1', name: 'Mohammed', role: 'UI/UX Developer', sow: 'L5-Expert', assessment: 'L5-Expert'},
                { id: 'QW234', program: 'CP', squad: 'IDB-TYB-SQ3', name: 'Hanzalah Md', role: 'Frontend Developer', sow: 'L2-Advanced Beginner', assessment: 'L3-Competent'},
                { id: 'CD235', program: 'TMRW', squad: 'DBB-SWE-SQ4', name: 'Yasmin Mogahed', role: 'System Analyst', sow: 'L1-Beginner', assessment: 'L3-Competent'},
                { id: 'BR235', program: 'CP', squad: 'CP-WEF-SQ2', name: 'Xin Ming', role: 'Designer', sow: 'L3-Competent', assessment: 'L2-Advanced Beginner'},
            ]
        },
    ]
}

export default DATA;