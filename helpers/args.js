

const getArgs = (args) => {
    const res = {};
    const [exec, file, ...rest] = args;
    rest.forEach((value, index, array) => {
        if(value.charAt(0) == '-') {
            if (index == array.length - 1) {
                res[value.substring(1)] = true;
            } else if (array[index+1].charAt(0) != '-') {
                res[value.substring(1)] = array[index+1];  // если аргумент начался с - и следующий арг не начинается с -, то положи в результат под ключом - [текст, после дефиса] значение аргумента под индексом +1;
            } else {
                res[value.substring(1)] = true;
            }
        }        
    });
    return res;
};

export { getArgs }