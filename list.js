var List = /** @class */ (function () {
    function List() {
        this.items = [];
    }
    List.prototype.add = function (item) {
        this.items.push(item);
    };
    List.prototype.get = function (index) {
        return this.items[index];
    };
    List.prototype.remove = function (index) {
        this.items.splice(index, 1);
    };
    List.prototype.getAll = function () {
        return this.items;
    };
    return List;
}());
// Пример использования
var stringList = new List();
stringList.add("First");
stringList.add("Second");
console.log(stringList.getAll()); // ["First", "Second"]
console.log(stringList.get(0)); // "First"
stringList.remove(0);
console.log(stringList.getAll()); // ["Second"]
