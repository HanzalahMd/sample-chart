const payload = {
    vendor: {
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
        ]
    }
}

export default payload;