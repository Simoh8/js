function reverse(word){

let reverseword = word.split('').reverse().join('')


if(reverseword === word){
return 'the word can also be read from behind'
}
else {
    return 'the word cannot'
}
// return word===reverseword

}

console.log(reverse('madam'));
