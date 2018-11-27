/******************************************************************************
*
*  ArrayOwnSeparator.js                 David              2017-11-17T12:41:37
*
*
* Class servant à découper un tableau d'objets en plusieurs tableaux d'objets
* en précisant quelle clef de l'objet sert a concevoir les tableaux de sorties
* update du 21/11/2017 : on peut maintenant selectionner plusieurs clefs
* pour la decoupe
* ****************************************************************************/


class ArrayOwnSeparator{
    constructor(arrObj, sep){
        if(!Array.isArray(arrObj))
            throw 'Object ArrayByDay must be initialized';
        if(!Array.isArray(sep) && typeof sep != 'string')
            throw 'Separator must be a string or array';
        var v = this.verifySeparator(arrObj, sep);
        if(!v.verify)
            throw 'Keys separator is not in object iterator: '+v.it;

        this.keySeparator = sep;
        this.returnArray = [];
        this.uniqueValuesSep = [];
        this.getUniqueSeparator(arrObj);
        this.createReturnArray(arrObj);
        this.returnArray = this.cleanEmpty(this.returnArray);
    }
    verifySeparator(arrObj, sep){
        if(typeof sep == 'string'){
            for(var i = 0; i < arrObj.length; i++){
                if(!arrObj[i].hasOwnProperty(sep))
                return {verify: false, it: i};
            }
        }else{
            for(var i = 0; i < arrObj.length; i++){
                for(var j = 0; j < sep.length; j++){
                    if(!arrObj[i].hasOwnProperty(sep[j]))
                        return {verify: false, it: i+" / "+j};
                }
            }
        }
        return {verify: true, it: -1};
    }
    getUniqueSeparator(arrObj){
        if(typeof this.keySeparator == 'string'){
            var arr = [];
            for(var i = 0; i < arrObj.length; i++){
                if(arrObj[i][this.keySeparator] instanceof Date)
                    arr.push((arrObj[i][this.keySeparator]).toString());
                else
                    arr.push(arrObj[i][this.keySeparator]);
            }
            arr.sort();
            this.uniqueValuesSep = arr.filter(this.onlyUnique);
        }else{
            for(var j = 0; j < this.keySeparator.length; j++){
                var arr = [];
                for(var i = 0; i < arrObj.length; i++){
                    arr.push(arrObj[i][this.keySeparator[j]]);
                    if(arrObj[i][this.keySeparator[j]] instanceof Date)
                        arr.push((arrObj[i][this.keySeparator[j]]).toString());
                    else
                        arr.push(arrObj[i][this.keySeparator[j]]);
                }
                arr.sort();
                this.uniqueValuesSep.push(arr.filter(this.onlyUnique));
            }
        }
    }
    createReturnArray(arrObj){
        if(typeof this.keySeparator == 'string'){
            arrObj.forEach((obj)=>{
                var value = obj[this.keySeparator];
                for(var i = 0; i < this.uniqueValuesSep.length; i++){
                    if(value == this.uniqueValuesSep[i]){
                        if(Array.isArray(this.returnArray[i]))
                            this.returnArray[i].push(obj);
                        else {
                            this.returnArray[i] = [];
                            this.returnArray[i].push(obj);
                        }
                        break;
                    }
                }
            });
        }else{
            var arrSep = [], arr = this.uniqueValuesSep;
            arrSep = this.getCombinations(arr, this.keySeparator.length);
            this.multiArraySeparator = arrSep;
            arrObj.forEach((obj, k)=>{
                for(var i = 0; i < arrSep.length; i++){
                    var findVal = false;
                    for(var j = 0; j < arrSep[i].length; j++){
                        if(obj[this.keySeparator[j]] == arrSep[i][j])
                            findVal = true;
                        else{
                            findVal = false;
                            break;
                        }
                    }
                    if(findVal){
                        if(Array.isArray(this.returnArray[i]))
                            this.returnArray[i].push(obj);
                        else {
                            this.returnArray[i] = [];
                            this.returnArray[i].push(obj);
                        }
                    }
                }
            });
        }
    }
    getCombinations(arr, n){
        var i,j,k,elem,l = arr.length,childperm,ret=[];
        if(n == 1){
            for(var i = 0; i < arr.length; i++){
                for(var j = 0; j < arr[i].length; j++){
                    ret.push([arr[i][j]]);
                }
            }
            return ret;
        }else{
            for(i = 0; i < l; i++){
                elem = arr.shift();
                for(j = 0; j < elem.length; j++){
                    childperm = this.getCombinations(arr.slice(), n-1);
                    for(k = 0; k < childperm.length; k++){
                        ret.push([elem[j]].concat(childperm[k]));
                    }
                }
            }
            return ret;
        }
        i=j=k=elem=l=childperm=ret=[]=null;
    }
    onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    cleanEmpty(arr){
        var newArray = [];
        for(var i = 0; i < arr.length; i++){
            if(arr[i]){
                if(Array.isArray(arr[i]))
                    newArray.push(this.cleanEmpty(arr[i]));
                else
                    newArray.push(arr[i]);
            }
        }
        return newArray;
    }
}

export const ToolArrayByOwnSeparator = ArrayOwnSeparator;
