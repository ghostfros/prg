var items = [5,3,7,6,2,9];
function swap(items, l, h){
    var temp = items[l];
    items[l] = items[h];
    items[h] = temp;
}
function partition(items, l, h) {
    var pivot   = items[Math.floor((l + h) / 2)], //middle element
        i       = l; //left pointer
        j       = h; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, l, h) {
    var index;
    if (items.length > 1) {
        index = partition(items, l, h); //index returned from partition
        if (l < index - 1) { //more elements on the left side of the pivot
            quickSort(items, l, index - 1);
        }
        if (index < h) { //more elements on the right side of the pivot
            quickSort(items, index, h);
        }
    }
    return items;
}
// first call to quick sort
var sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray); //prints [2,3,5,6,7,9]