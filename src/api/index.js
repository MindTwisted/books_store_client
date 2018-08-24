import books from './books'
import authors from './authors'
import genres from './genres'
import users from './users'

export default {
    ...books,
    ...authors,
    ...genres,
    ...users
}