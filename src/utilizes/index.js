export const utilize = {
    //********** */ handle eclipis word by length word
    handleFormatTime(payload=0){
        if(payload>=0){
            const minutes = Math.floor(payload / 60);
            const remainingSeconds = payload % 60;
            return `${minutes}m ${remainingSeconds}s`;   
        }
        return '0m 0s'
    },
    labelEmptyChecked(data, argOne = data, argTwo = '-'){
        return data ? argOne : argTwo
    }
}