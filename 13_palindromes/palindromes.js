const palindromes = function (string) {
    let array = string.split('');

    let semPontuacao = array.filter(char => {
        return !/\p{P}|\s/u.test(char);
    })

    let reverse = [...semPontuacao].reverse();

    for (let i = 0; i < semPontuacao.length; i++) {
        if (semPontuacao[i].toLowerCase() !== reverse[i].toLowerCase()) {
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
