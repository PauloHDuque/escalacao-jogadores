function addPlayer(){

  const name = $('#name').val()
  const position = $("#position").val();
  const number = $("#number").val()

  const confirmation = confirm("Escalar " +  name + " como " + position + "?")
  if(confirmation){
    const list = $('#teamList')
    const newPlayer = $("<li>").attr('id', 'player_' + number).text(name + " - " + position + " (" + number + ")")
    list.append(newPlayer)

    $('#name').val('')
    $("#position").val('')
    $("#number").val('')
  } 

}

function removePlayer(){
const number = $('#removeNumber').val()
const removePlayer = $('#player_' + number);

  if (removePlayer.length) {
    const confirmation = confirm("Tem certeza de que deseja remover este jogador?\n" + removePlayer.text());
    if (confirmation) {
        removePlayer.remove();
        $('#removeNumber').val('');
    }
} else {
    alert("Jogador não encontrado!");
  }
}