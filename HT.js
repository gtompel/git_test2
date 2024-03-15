var HashTable = /** @class */ (function () {
    function HashTable() {
        this.table = {};
    }
    HashTable.prototype.insert = function (key, value) {
        this.table[key] = value;
    };
    HashTable.prototype.search = function (key) {
        return this.table[key];
    };
    HashTable.prototype.remove = function (key) {
        delete this.table[key];
    };
    HashTable.prototype.update = function (key, value) {
        if (this.table[key]) {
            this.table[key] = value;
        }
        else {
            console.log("Key " + key + " not found");
        }
    };
    HashTable.prototype.count = function () {
        return Object.keys(this.table).length;
    };
    return HashTable;
}());
// Пример использования
var myTable = new HashTable();
myTable.insert('name', 'Alice');
myTable.insert('age', 30);
console.log(myTable.search('name')); // Output: Alice
console.log(myTable.count()); // Output: 2
myTable.remove('age');
console.log(myTable.count()); // Output: 1
myTable.update('name', 'Bob');
console.log(myTable.search('name')); // Output: Bob
