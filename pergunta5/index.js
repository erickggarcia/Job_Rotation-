function inverterString(string) {
    var reverso = '';
    for (var i = string.length - 1; i >= 0; i--) {
        reverso += string[i];
    }
    return reverso;
}
console.log(inverterString("Pindamonhangaba"));