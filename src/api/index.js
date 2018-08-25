import books from './books'
import authors from './authors'
import genres from './genres'
import users from './users'
import cart from './cart'

export default {
    ...books,
    ...authors,
    ...genres,
    ...users,
    ...cart
}