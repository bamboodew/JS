const fruits = ['Apple', 'Banana'];
alert('共有' + fruits.length + '种水果！');
const first = fruits[0];
const last = fruits[fruits.length - 1]
console.log(first); // 在调试软件的控制台显示，不是在网页上显示
console.log(last)
fruits.forEach(function (item, index, array) {
	console.log(item, index);
});
const newLength = fruits.push('Orange'); // Appends new elements to an array, and returns the new length of the array.
fruits.forEach(function (item, index, array) {
	console.log(item, index);
});

console.log('newLength:', newLength);
console.log('newLength的数据类型:', typeof (newLength)); // 3
console.log(fruits); // Array(3) [ "Apple", "Banana", "Orange" ]
const last_ = fruits.pop(); // Removes the last element from an array and returns it.
console.log(fruits);
console.log('last_:', last_);
console.log('last_的数据类型:', typeof (last_));
const first_ = fruits.shift(); // Removes the first element from an array and returns it.
console.log('the deleted first item:', first_);
/*
Add to the front of an Array
 */
const newLength_1 = fruits.unshift('Strawberry'); // Inserts new elements at the start of an array, , and returns the new length of the array.
console.log(newLength_1);
console.log(fruits);
/*
Find the index of an item in the Array
 */
fruits.push('Mango');
const pos = fruits.indexOf('Banana');
console.log('Banana的位置:', pos);
/*
Remove an item by index position
 */
const vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log('蔬菜清单:', vegetables);
const pos_ = 1, n = 2;
const removeItems = vegetables.splice(pos, n);
console.log('删除一部分之后的蔬菜清单:', vegetables);
console.log('删除的蔬菜:', removeItems);