// const sort = (array) => {

//     for (let i = 0; i < array.length; ++i) {

//         for (let k = 0; k < array.length; ++k) {

//             if (array[k] > array[k + 1]) {
//                 let x = array[k];
//                 array[k] = array[k + 1];
//                 array[k + 1] = x;

//             }
            
//         }
//     }

//     return array;
// }


// let arrToSort = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];
// // console.log(arrToSort);


// console.log(sort(arrToSort));



function insertionSort(array) {

    let n = array.length;

        for (let i = 1; i < n; i++) {
            
            let current = array[i];
            let j = i-1; 

            while ((j > -1) && (current < array[j])) {
                array[j+1] = array[j];
                j--;
            }
            array[j+1] = current;
        }

    return array;
}


let arrToSort = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];
// // console.log(arrToSort);



console.log(insertionSort(arrToSort));



































































// var input = [2,3,8,1,4,5,9,7,6];

// var output = [];
// var inserted;

// for (var i = 0, ii = input.length ; i < ii ; i++){
//   inserted = false;
//   for (var j = 0, jj = output.length ; j < jj ; j++){
//     if (input[i] < output[j]){
//       inserted = true;
//       output.splice(j, 0, input[i]);
//       break;
//     }
//   }
  
//   if (!inserted)
//     output.push(input[i])
// }

// console.log(output);