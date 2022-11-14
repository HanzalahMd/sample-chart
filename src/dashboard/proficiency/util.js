import resources from "../../_mock/resource";

export const evaluate = (vendor) => {
    const feed = resources.filter(resource => resource.vendor === vendor)
    const programs = [];
    feed.forEach(f => {
        if(programs.indexOf(f.program) === -1){
            programs.push(f.program)
        }
    })

    const getValue = (text) => {
        if(text.length > 0) {
            const value = text.substring(1, 2);
            return Number(value)
        }
        return null // No Evaluation yet
    }

    const higher = feed.filter(feed => {
        return getValue(feed.proficiencyEval) > getValue(feed.proficiencySOW)
    })
    const lower = feed.filter(feed => {
        return getValue(feed.proficiencyEval) < getValue(feed.proficiencySOW)
    })
    const equal = feed.filter(feed => {
        return getValue(feed.proficiencyEval) === getValue(feed.proficiencySOW)
    })

    const newStaff = feed.filter(feed => {
        return getValue(feed.proficiencyEval) === null
    })

    return {
        vendor, programs, higher, lower, equal, newStaff
    }
}

export const divideByPrograms = (array, category) => {
    const grouped = [];
    const programs = array.programs;

    // eslint-disable-next-line no-restricted-syntax
    for(const prg of programs){
        const current = array[category].filter(arr => arr.program === prg)
        grouped.push(current);
    }
    return grouped;
}