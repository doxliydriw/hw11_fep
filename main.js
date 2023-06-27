const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item) {
    if (item in array) {
        array.splice(array.indexOf(item), 1)
    }
    return array
}
removeElement(array, 5);
console.log(array);