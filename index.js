//2, 1, 5, 3, 11, 7   Shuffle NUMBER IN AARRAY
function LastElem(arr , i , j){
    let min = Infinity;
    let index = -1;
    while(i<=j){
        if(arr[i]<min){
            min = arr[i];
            index = i;
        }
        i+=1;
    }
   return index;
}
function OutPut_Func(arr){
    let i = 0;
    let j = arr.length-1;
    while(i!=arr.length-1){
        if(i%2==0){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j-=1;
            i+=1;
        }else{
            let temp = arr[i];
            let min_index = LastElem(arr,i,arr.length-1);
            arr[i] = arr[min_index];
            arr[min_index] = temp;
            i+=1;
        
        }
    }
    return arr;
}
let arr = [2, 1, 5, 3, 11, 7]
console.log(OutPut_Func(arr));
