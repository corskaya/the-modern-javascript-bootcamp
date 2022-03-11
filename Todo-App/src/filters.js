/////////////////// Challenge /////////////////

// Set up filters default object
const filters = {
  searchText: '',
  hideCompleted: false
}

// getFilters
// arguments: none
// return value: filters object
const getFilters = () => filters

// setFilters
// arguments: updates object with optional searchText or hideCompleted
// return value: none
const setFilters = (updates) => {
  if (typeof updates.searchText === 'string') {
    filters.searchText = updates.searchText
  }

  if (typeof updates.hideCompleted === 'boolean') {
    filters.hideCompleted = updates.hideCompleted
  }
}

// make sure to set up the exports
export { getFilters, setFilters }