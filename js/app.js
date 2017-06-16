$(function() {

  var scorerTable = $('.scorer_table');
  //variables for url
  var scorerUrl = 'https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/serie-a/seasons/15-16/topscorers';


  /* Insert scorers to DOM  */
  function insertContent(scorers) {

    for(var i = 0 ; i < 10; i++) {
        var tr = $('<tr>', {class: "scorers"});
        var td_position = $('<td>', {class: "first_column"}).text(i + 1);
        var td_fullname = $('<td>', {class: "second_column"});
        var td_goals = $('<td>', {class: "third_column"}).text(scorers[i].goals);
        var div_fullname = $('<div>', {class: "border_space"}).text(scorers[i].fullname);
        td_fullname.append(div_fullname);
        tr.append(td_position);
        tr.append(td_fullname);
        tr.append(td_goals);
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
