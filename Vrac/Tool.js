/******************************************************************************
*
*  Tool.js                 David                         2017-11-10T12:OO:37
*
*
* Class servant a identifié si l'objet mis en parametres d'une des methodes
* est bien du type voulu
* ****************************************************************************/
class Tool {
    constructor(){
        return this;
    }
    isString(a){
        return (typeof a === 'string')? true: false;
    }
    isArray(a){
        return (Array.isArray(a)) ? true : false;
    }
    isFunction(a){
        return (typeof a === 'function')? true: false;
    }
    isObject(o){
        return (typeof o === 'object' && o.length === undefined) ?
            true : false;
    }
}
