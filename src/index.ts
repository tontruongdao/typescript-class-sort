import { Sorter } from './Sorter'
import { NumCollection } from './NumCollection'
import { CharCollection } from './CharCollection'

// const numCollection = new NumCollection( [10, 3, 5, 0])
// const sorter = new Sorter(numCollection)

// sorter.sort()

const charCollection = new CharCollection('Xaayb');
const sorter = new Sorter(charCollection);
sorter.sort()

console.log(charCollection.data)