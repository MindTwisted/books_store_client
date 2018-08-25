import books from './books'
import authors from './authors'
import genres from './genres'
import users from './users'
import cart from './cart'
import paymentTypes from './paymentTypes'
import orders from './orders'

export default {
    ...books,
    ...authors,
    ...genres,
    ...users,
    ...cart,
    ...paymentTypes,
    ...orders
}