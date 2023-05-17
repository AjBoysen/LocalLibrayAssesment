const accounts = require("../data/accounts")


let findById = require("./helperfunctions")
//passed
function findAccountById(accounts, id) {
  return findById(accounts, id)
}
//passed
function sortAccountsByLastName(accounts) {
  return accounts.sort((userA, userB) => 
    userA.name.last.toLowerCase() > userB.name.last.toLowerCase() ? 1 : -1
  )
}
//passed
function getTotalNumberOfBorrows(account, books) {
  let total = 0
  const userID = account.id
  for (let book in books){
    if (books[book].borrows.some((userBorrowID) => userID === userBorrowID.id)){
      total ++
    }
  }
 
  return total
}
//passed
function getBooksPossessedByAccount(account, books, authors) {
  const accID = account.id
     return books.reduce((allBooks, book) => {
      const currentBorrower = book.borrows[0].id
      if(currentBorrower === accID){
        const {authorId} = book
        const bookAuthor = findById(authors, authorId)
        book.author = bookAuthor
        allBooks.push(book)
      }   
      return allBooks
     }, [])
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
