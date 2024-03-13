type Nullable<T> = T | null;
type MaybeString = Nullable<string>; // string | null
/* Nullable<T> - создаёт тип,
который делает все свойства из первоначального типа T может быть либо T, либо null:
*/
