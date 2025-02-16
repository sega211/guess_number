const upperText = function(str) {
    return (str[0].toUpperCase() + str.slice(1));
}
// console.log(upperText("lorem-ipsun")); // Lorem-ipsun
// console.log(upperText("миру мир")); // Миру мир
// console.log(upperText("Привед медвед")); // Привед медвед

const trimText = function(str, maxLength) {
    if (str.length <= maxLength) {
        return str;
    }
    const delimiters = [' ', ',', '.', '!', '?', ':', ';', '/'];

    let truncateIndex = -1;
    for (let i = maxLength - 1; i >= 0; i--) {
        if (delimiters.includes(str[i])) {
            truncateIndex = i;
            break;
        }
    }

    if (truncateIndex === -1) {
        return str.substring(0, maxLength) + '...';
    }

    return str.substring(0, truncateIndex) + '...';
}

const longString = "Это очень длинная строка, которая не помещается в заданное ограничение и должна быть обрезана.";
const maxChars = 40;

// console.log(trimText(longString, maxChars));
// console.log(trimText(`Задача организации, в особенности же дальнейшее развитие различных форм деятельности позволяет выполнять важные задания по разработке систем массового участия. Таким образом, новая модель организационной деятельности влечет за собой процесс внедрения и модернизации направлений прогрессивного развития. Равным образом рамки и место обучения кадров способствует подготовке и реализации существенных финансовых и административных условий.`
// , maxChars));


