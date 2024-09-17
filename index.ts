function sumArr(arr: number[]):number{
    let res: number = 0
    for(let i: number = 0; i< arr.length; i++)
    {
        res += arr[i]
    }
    return res
}
let arr: number[] = [2,3,4,]
console.log((sumArr(arr)))