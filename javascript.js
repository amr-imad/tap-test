function check(nums,target){
    let output=[]
    if (Array.isArray(nums)&&nums.every(i=>typeof i === 'number')&&typeof(target)==='number'){
        for(i in nums){
            for(n in nums){
                if (nums[i]+nums[n]===target){
                    output.push(i,n)
                    return output
                }
            }
        }return console.log('No match found')
    }else{
       return console.log("Wrong Input")
    }
}