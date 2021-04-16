import { Sorter } from './Sorter'
import { NumCollection } from './NumCollection'

const numCollection = new NumCollection( [10, 3, 5, 0])
const sorter = new Sorter(numCollection)

sorter.sort()

console.log(numCollection.data)