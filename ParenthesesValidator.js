let parenthesesInput = '()()()()';
const stack = [];
function parenthesesValidator(input) {
    for (let i = 0; i < input.length; i++) {
        if (input.charAt(i) == '(') {
            stack.push(input.charAt(i));
        } else {
            if (stack.length === 0) {
                return false;
            } else {
                let char = stack.pop();
                if (input.charAt(i) == ')' && char != '(') {
                    return false;
                }
            }
        }
    }

    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(parenthesesValidator(parenthesesInput));
