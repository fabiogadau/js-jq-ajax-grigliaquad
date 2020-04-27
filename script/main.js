/*
* Quadratini AJAX
Griglia 6x6 (36 boxes), ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9 (scegliere API opportuna).
Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
Il numero ottenuto appare al centro del quadrato.
DevTools console e network sono nostri amici.
*/

$(document).ready(function() {

  // Per riusabilità definisco l'URL dell'API in una variabile
  var randNumAPI = 'https://flynn.boolean.careers/exercises/api/random/int';

  // Definisco i .box in una variabile
  var boxes = $('.box');

  // Al click dei .box viene eseguito il seguente codice
  boxes.click(function() {
    // Definisco il .box cliccato
    var actualBox = $(this);

    // Inizio la chiamata AJAX
    $.ajax({
      // Definisco quale API voglio utilizzare
      url: randNumAPI,
      // Definisco il tipo di operazione, in questo caso voglio ottenere dei dati
      method: 'GET',
      // Funzione success se la chiamata viene eseguita correttamente
      success: function(result) {
        // Controllo se l'API viene chiamata correttamente
        //console.log(result);
        // Definisco il dato ottenuto in una variabile
        var randNum = result.response;

        // Inserisco il dato nei .box
        actualBox.text(randNum);

        // Assegnazione classe in base al numero
        if ( actualBox.text() <= '5' ) {
          actualBox.addClass('yellow');
          actualBox.removeClass('green');
        }
        else if ( actualBox.text() > '5' ) {
          actualBox.addClass('green');
          actualBox.removeClass('yellow');
        }
        else if ( actualBox.text() > '0' ) {
          alert('Bottone già cliccato');
        }

      },
      // Funzione error in caso di errori di esecuzione
      error: function() {
        console.log('Si è verificato un errore')
      }
    });
    // Fine della chiamata AJAX
  });
  








});