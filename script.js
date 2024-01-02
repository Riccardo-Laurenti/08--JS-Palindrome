


const wordReverse = document.getElementById('wordReverse')


const button = document.getElementById('button')


const result = document.getElementById('result')


const palindromeRes = document.getElementById('result')


let risultato = '';


let palindrome = false;


button.addEventListener('click', function () {

    const wordValueManipolo = wordReverse.value;

    for (let i = wordValueManipolo.length - 1; i >= 0; i--) {

        risultato += wordValueManipolo.charAt(i);

        palindrome = `La parola ${wordValueManipolo} non è palindroma -> Ritenta`;

        if (risultato === wordValueManipolo) {

            palindrome = `La parola ${wordValueManipolo} è palindroma`;

        }

    }

    palindromeRes.innerHTML += palindrome;

    setTimeout(() => {
        location.reload();
    }, 1920);
});


