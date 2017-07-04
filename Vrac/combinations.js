let instance = null;
class CombinationArray{
    construct(){
        if(!instance)
            instance = this;

        return instance;
    }

    /*
        arr -> array datas
        datas -> temp array to store current combination
        start & end -> start and end of index in arr
        r -> size of a combination to be printed
        sArr -> array all combination find
    */
    combinationUtil(arr, datas, start, end, index, r, sArr){
        var self = new CombinationArray();
        //current combination is ready to be add to sArr
        if(index == r){
            if(!Array.isArray(sArr[r]))
                sArr[r] = [];
            var a = "";
            for(var j = 0; j < r; j++){
                a += datas[j]+" ";
            }
            sArr[r].push(a.trim());
        }

        //replace index with all possible elements. The condition
        // end-i+1 > = r-index makes suze that including one element
        // at index will make a combination with remaining elements
        // at remaining positions
        for(var i = start; i <= end && end-i+1 >= r-index; i++){
            datas[index] = arr[i];

            self.combinationUtil(arr, datas, i+1, end, index+1, r, sArr);

        }
    }

    static chooseCombinations(arr, r, sArr){
        var self = new CombinationArray();
        //temp array to store all combination one by one
        var data = [];
        //sort array to handle duplicate
        arr.sort((a,b)=>{return a > b});

        //remove duplicates
        arr = self.removeDuplicate(arr);

        var n = arr.length;

        if(r > n )
            throw 'Combination of '+ r +' elemets is impossible.'
                + 'Because your array length is : ' + n;

        if(r < 0)
            throw 'Combination of '+ r +' elemets is impossible.'

        self.combinationUtil(arr, data, 0, n-1, 0, r, sArr);

        sArr = sArr[sArr.length-1];
    }

    static allCombinations(arr, sArr){
        var self = new CombinationArray();
        //temp array to store all combination one by one
        var data = [];

        //sort array to handle duplicate
        arr.sort((a,b)=>{return a > b});

        //remove duplicates
        arr = self.removeDuplicate(arr);
        var n = arr.length;

        for(var i = 1; i <= n; i++){
            self.combinationUtil(arr, data, 0, n-1, 0, i, sArr);
        }
        //because arr[i] is undefined
        sArr.shift();
    }

    removeDuplicate(arr){
        //arr must be sorting
        var temp = [];
        for(var i = 0; i < arr.length-1; i++){
            if(arr[i] != arr[i+1]){
                temp.push(arr[i]);
            }
            if(i == arr.length-2){
                if(arr[i] != arr[i+1])
                    temp.push(arr[i+1]);
            }
        }
        return temp;
    }

    removeCaseUndefined(arr){
        var temp = [];
        for(var i = 0; i < arr.length; i++){
            if(arr[i] !== undefined)
                temp.push(arr[i]);
        }
        return temp;
    }
}