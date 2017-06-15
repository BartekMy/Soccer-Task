$(function() {

  var scorerTable = $('.scorer_table');
  //variables for url
  var scorerUrl = 'https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/serie-a/seasons/15-16/topscorers';


  /* Insert scorers to DOM  */
  function insertContent(scorers) {
    console.log(scorers);

    for(var i = 0 ; i < 10; i++) {
        var tr = $('<tr>', {class: "scorers"});
        var td_position = $('<td>').text($("tr").index(".scorers"));
        console.log(td_position);
        // var td_position = $('<td>').text(td_index);
        var td_fullname = $('<td>').text(scorers[i].fullname);
        tr.append(td_position);
        tr.append(td_fullname);
        scorerTable.append(tr);
    };
  }

  /* Load scorers and insert them into the DOM
  */
  function loadScorers() {
        $.ajax({
            url: scorerUrl,
            method: 'GET',
            dataType: 'JSON',
            success: function(response) { insertContent(response.data.topscorers); },
            error: function(err) { alert(err); },
            beforeSend: function(xhr) {
              xhr.setRequestHeader("X-Mashape-Authorization", "kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw");
            }
          });
        }
  loadScorers();

});
