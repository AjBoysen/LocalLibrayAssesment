let findById = require("./helperfunctions")
const books = require("../data/books")
const accounts = require("../data/accounts")

//passed
function findAuthorById(authors, id) {
 return findById(authors, id)
}
//passed
function findBookById(books, id) {
return findById(books, id)
}
//passed
function partitionBooksByBorrowedStatus(books) {
  let partitionedBooksArray = []
  partitionedBooksArray.push(books.filter((book) => book.borrows[0].returned === false))
  partitionedBooksArray.push(books.filter((book) => book.borrows[0].returned === true))
  console.log(partitionedBooksArray)
  return partitionedBooksArray
}
//passed
function getBorrowersForBook(book, accounts) {
  const {borrows} = book
 return borrows.slice(0,10).reduce((borrowers, user) => {
  let foundUser = findById(accounts, user.id)
  foundUser.returned = user.returned
  borrowers.push(foundUser)
  return borrowers
 }, [])
}
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
