import books from './books'
import authors from './authors'
import genres from './genres'

export default {
    ...books,
    ...authors,
    ...genres
}