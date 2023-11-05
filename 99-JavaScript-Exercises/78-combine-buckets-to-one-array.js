// Accumulate all the data regarding a job candidate to one array of all companies. Companies are distributed through 4 buckets based in which period the candidate was there.
function getAllCompanies(candidate) {
    const comp1 = candidate.companiesLessThanAYear
    const comp2 = candidate.companiesLessThanThreeYears
    const comp3 = candidate.companiesLessThanSixYears
    const comp4 = candidate.companiesLongerThanSixYearsAgo
    const companies = comp1.concat(comp2,comp3,comp4);
    console.log(companies)



}
console.log(getAllCompanies({
    name: 'Raisa',
    age: 27,
    gender: 'female',
    companiesLessThanAYear: ['Google'],
    companiesLessThanThreeYears: ['Microsoft', 'Apple'],
    companiesLessThanSixYears: [],
    companiesLongerThanSixYearsAgo: ['Riot Games'],
}))
// Expected output: ['Google', 'Microsoft', 'Apple', 'Riot Games']
