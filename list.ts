class List<T> {
    private items: T[] = [];
  
    public add(item: T): void {
      this.items.push(item);
    }
  
    public get(index: number): T | undefined {
      return this.items[index];
    }
  
    public remove(index: number): void {
      this.items.splice(index, 1);
    }
  
    public getAll(): T[] {
      return this.items;
    }
  }
  
  // Пример использования
  const stringList = new List<string>();
  stringList.add("First");
  stringList.add("Second");
  console.log(stringList.getAll()); // ["First", "Second"]
  console.log(stringList.get(0)); // "First"
  stringList.remove(0);
  console.log(stringList.getAll()); // ["Second"]