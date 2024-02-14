function addPlayer(){

  const name = document.getElementById('name').value
  const position = document.getElementById('position').value
  const number = document.getElementById('number').value

  const confirmation = confirm("Deseja adicionar esse jogador?\n" + "Nome: " + name + "\nPosição:" + position + "\nNúmero: " + number)
  if(confirmation){
    const newPlayer = document.createElement('li')
    newPlayer.id = "player_" + number
    newPlayer.innerText = "Posição: " + position + "\nNome: " + name + "\nNúmero: " + number
  
    const list = document.getElementById('teamList')
    list.appendChild(newPlayer)
  
    document.getElementById('name').value = ""
    $('#position').val('')
    document.getElementById('number').value = ""
  }
}

function removePlayer(){
  const number = document.getElementById('removeNumber').value
  const removePlayer = $('#player -'+number)
  
  const confirmation = confirm("Deseja remover esse jogador? \n" + removePlayer.innerText)
  if(confirmation){
    removePlayer.remove()
    document.getElementById('removeNumber').value = ""
  }
}

// function removePlayer(){
//   const numerJogador = $('#removeNumber').val();
//   const confirmar = confirm("Tem certeza que deseja excluir o jogador? \n" + $("#player_"+numerJogador).text());

//   if(confirmar) {
//     $("#player_"+numerJogador).remove()
//     $('#removeNumber').val('');
//   }
// }
