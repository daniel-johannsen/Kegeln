let player = [];


function addPlayer() {
    let newPlayer = document.getElementById('player').value;

    player.push(newPlayer);

    document.getElementById('player').value = '';

    renderPlayer();
}


function renderPlayer() {
    document.getElementById('newPlayer').innerHTML = '';

    for (i = 0; i < player.length; i++) {
        let name = player[i];

        document.getElementById('newPlayer').innerHTML += `
        <div class="player">
        <div id="name" class="name">${name}</div>
        <div class="g pointer" id="g_${i}" onclick="higherCounter('g_${i}')" ondblclick="lowerCounter('g_${i}')">0</div>
        <div class="g pointer" id="i_${i}" onclick="higherCounter('i_${i}')" ondblclick="lowerCounter('i_${i}')">0</div>
        <div class="g pointer" id="y_${i}" onclick="higherCounter('y_${i}')" ondblclick="lowerCounter('y_${i}')">0</div>
        </div>
                `;
    }
}


function higherCounter(container) {
    let currentCounter = +document.getElementById(container).innerHTML;
    currentCounter++;
    document.getElementById(container).innerHTML = currentCounter;
}


function lowerCounter(id) {
    let currentCounter = +document.getElementById(id).innerHTML;
    currentCounter -= 3;
    if (currentCounter < 0) {
        currentCounter = 0;
    }
    document.getElementById(id).innerHTML = currentCounter;
}