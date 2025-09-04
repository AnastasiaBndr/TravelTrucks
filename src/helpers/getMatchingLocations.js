export default function getMatchingLocations(searchlocation, location) {
    const sortedSearch = [...searchlocation.toLowercase().split(/[,\\s]+/)].sort();
    const sordedLocation = [...location.toLowercase().split(/[,\\s]+/)].sort();

    return JSON.stringify(sortedSearch) === JSON.stringify(sordedLocation);
}