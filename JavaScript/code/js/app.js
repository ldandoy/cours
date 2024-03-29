// js/app.js

let cols = document.querySelectorAll(".col");

for(let i=0; cols.length>i;i++) {
	console.log(cols[i])
}

let a1 = document.querySelector('.a1');
let a2 = document.querySelector('.a2');
let a3 = document.querySelector('.a3');
let b1 = document.querySelector('.b1');
let b2 = document.querySelector('.b2');
let b3 = document.querySelector('.b3');
let c1 = document.querySelector('.c1');
let c2 = document.querySelector('.c2');
let c3 = document.querySelector('.c3');

// Set the scrore from localstorage
if (localStorage.getItem('scrore_1') == null) {
	document.querySelector('.player1_score').innerHTML = 0;
	localStorage.setItem('scrore_1', 0);
	
}
if (localStorage.getItem('scrore_2') == null) {
	document.querySelector('.player2_score').innerHTML = 0;
	localStorage.setItem('scrore_2', 0);
}

document.querySelector('.player1_score').innerHTML = localStorage.getItem('scrore_1');
document.querySelector('.player2_score').innerHTML = localStorage.getItem('scrore_2');

let current_player = 1;
let game_win = false;

cols.forEach((col) => {
	col.onmouseover = (e) => {
		e.target.style.background = 'silver';
	}

	col.onmouseleave = (e) => {
        if(e.target.classList.value.includes('win')) {
            e.target.style.background = '#c7ffbc';
        } else {
            e.target.style.background = 'none';
        }
	}

    col.onclick = (e) => {
        // clear all old messages
	    clearMsg();

        // Checked if the player can click on the cell
		if (!game_win) {
            if (e.target.innerHTML == "") {
                e.target.innerHTML = document.querySelector('.player'+current_player+'_play').innerHTML;

				game_win = checkGame();

				if (game_win) {
					showMsg(document.querySelector(
						'.player'+current_player+'_name').innerHTML + " win the game !<br />" +
						'Do you want to play again ? <a href="">Clique here !</a>'
					);

					// Here we manage the scrore with localstorage
					localStorage.setItem('scrore_'+current_player, parseInt(localStorage.getItem('scrore_'+current_player)) + 1);
					document.querySelector('.player'+current_player+'_score').innerHTML = localStorage.getItem('scrore_'+current_player);
				} else {
					// remove the active class from the current_player
					document.querySelector(".player"+current_player).classList.remove("active");
			
					// Switch the current_player after playing
					if (current_player == 1) {
						current_player = 2;
					} else {
						current_player = 1;
					}
			
					// Add the active class to current_player
					document.querySelector(".player"+current_player).classList.add("active");
				}
            } else {
                // When a player play in a not empty cell
                showMsg('Vous ne pouvez pas jouer ici. La case a déjà été joué. !');
            }
        } else {
			// When the game is ended
			showMsg('La partie est terminée !');
		}
    }
})