function shuffle(ar) {
    let currentIndex = ar.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = ar[currentIndex];
        ar[currentIndex] = ar[randomIndex];
        ar[randomIndex] = temporaryValue;
    }
    return ar;
}



export {shuffle}