var cards = document.querySelectorAll('.card');

cards.forEach(function(card) {
    var players = [];
    var gameName = card.querySelector('h2').textContent;

    card.querySelector('.join-button').addEventListener('click', function() {
        var name = card.querySelector('.name-input').value;
        if (name && !players.includes(name)) {
            players.push(name);
            card.querySelector('.players').textContent = 'Players: ' + players.join(', ');
            card.querySelector('.name-input').value = '';
        }
    });

    card.querySelector('.spin-button').addEventListener('click', function() {
        if (players.length === 0) {
            card.querySelector('.result').textContent = 'No players have joined yet!';
        } else {
            card.querySelector('.result').textContent = 'Spinning...';
            setTimeout(function() {
                var randomPlayer = players[Math.floor(Math.random() * players.length)];
                card.querySelector('.result').textContent = randomPlayer + ', you got: ' + gameName + '!';
            }, 3000);
        }
    });
});
