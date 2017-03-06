var gameStart = document.getElementById('game start')

gameStart.addEventListener('click', function () {
  var enterForest = window.prompt('Enter down the left path or right path or can\'t decide?')
  enterForest = enterForest.toLowerCase().trim()
  if (enterForest === 'left path') {
    window.alert('You approach a dark forest and attacked by a bear')
    var decision = window.prompt('run through or run away or climb up a tree')
    decision = decision.toLowerCase().trim()
    if (decision === 'run through') {
      var chances = Math.random()
      if (chances > 0.25) {
      window.alert('Congratulations, you made it past the bear and through the forest') }
      else {
      window.alert('Unfortunately you were mauled by the bear and did not survive, try again!') }
    }
    else if (decision === 'run away') {
      window.alert('I knew you were a coward, but at least you are alive.') }
    else if (decision === 'climb up a tree') {
      var number = window.prompt('You\'re stuck in a tree, and you can\'t get down. Pick a number between 1 and 10, and don\'t make a sound.')
      number = parseInt(number)
      if (number > 5 ) {
        window.alert('Congratulations, you picked a good number. The bear left and you were able to get down safe.')
      }
    else {
        window.alert('Unfortunately that number is too low, which causes you to slip out the tree. The bear then devours you whole.')
      }
    } 
    else {
        window.alert('You did not make the right choice so the bear mauled you anyways.') }
    }
  else if (enterForest === 'right path') {
    window.alert('You made it through the forest, congratulations! Now you approach a cabin.')
    var enterCabin = window.prompt('ring the door bell, knock on the door or do both?')
    enterCabin = enterCabin.toLowerCase().trim()
    if (enterCabin === 'ring the door bell') { window.alert('No one answers, so you go away.') }
    else if (enterCabin === 'knock on the door') { window.alert('A man behind the door tells you to go away or he will get his gun, so you leave immediately!') }
    else if (enterCabin === 'do both') {
      window.alert('A man opens the door and yells at you for waking him up from his sleep, but he likes your determination. He asks you if you seen a bear around here, and if so, did you kill it?')
    var truthBear = window.prompt('If you saw the bear and killed it then you have to respond by saying yes or you got it. If not, then repond by saying something else.')
    truthBear = truthBear.toLowerCase().trim()
      if (truthBear === 'yes' || truthBear === 'you got it') {
      window.alert('The man admires your courage and invites you in for a drink.')
        }
      else {
            alert('Go away!')
            }
      }
    }
  else {
        alert('Shame on you. Too scared to make a decision!')
        }
})
