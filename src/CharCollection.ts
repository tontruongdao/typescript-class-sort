export class CharCollection {
    constructor(public data: string) {}

    get length(): number {
        return this.data.length
    }

    compare(leftIdx: number, rightIdx: number): boolean {
        return this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase();
    }

    swap(leftIdx: number, rightIdx: number): void {
        const char = this.data.split('');

        const leftHand = char[leftIdx];
        char[leftIdx] = char[rightIdx];
        char[rightIdx] = leftHand;

        this.data = char.join('')
    }
}