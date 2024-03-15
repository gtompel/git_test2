class HashTable {
  private table: {[key: string]: any} = {};

  insert(key: string, value: any): void {
    this.table[key] = value;
  }

  search(key: string): any {
    return this.table[key];
  }

  remove(key: string): void {
    delete this.table[key];
  }

  update(key: string, value: any): void {
    if (this.table[key]) {
      this.table[key] = value;
    } else {
      console.log(`Key ${key} not found`);
    }
  }

  count(): number {
    return Object.keys(this.table).length;
  }
}

// Пример использования
const myTable = new HashTable();
myTable.insert('name', 'Alice');
myTable.insert('age', 30);

console.log(myTable.search('name')); // Output: Alice
console.log(myTable.count()); // Output: 2

myTable.remove('age');
console.log(myTable.count()); // Output: 1

myTable.update('name', 'Bob');
console.log(myTable.search('name')); // Output: Bob