
const paginate = (followers) => {
   const itemsPerPage = 9;
   const pages = Math.ceil(followers.length / itemsPerPage)

   const newFlowers = Array.from( {length: pages} , (_, index ) => {
       const start = index * itemsPerPage;
       return followers.slice(start, start + itemsPerPage)
   } )
   return newFlowers
}

export default paginate

