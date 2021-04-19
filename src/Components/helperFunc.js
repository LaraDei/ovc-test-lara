export const filterList = (searchTerm, category, list) => 
    list.filter(item =>item[category].toLowerCase().includes(searchTerm))

// export const findItem = (searchTerm)