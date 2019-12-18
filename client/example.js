
async function loadExampleList() {
  // Ladda in data ifrån databasen (via backend)
  let result = await fetch("/data/highscore")
  let highscore = await result.json()
  renderExampleList(highscore)
}


// Lyssna på knapp-klick för att skapa en ny person
$("body").on("click", "button", createPerson)

async function createPerson() {
  let person = {}
  person.name = $("#name").val()
  // Skicka den nya personen till databasen (via backend)
  let result = await fetch("/data/highscore", {
    body: JSON.stringify(person),
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })
  // Ladda listan på personer igen, eftersom vi just uppdaterat den
  loadExampleList()
}



async function createScore(name, score) {
  let newHighScore = {}
  newHighScore.name = name;
  newHighScore.score = score;
  // Skicka den nya personen till databasen (via backend)
  let result = await fetch("/data/highscore", {
    body: JSON.stringify(newHighScore),
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })
  // Ladda listan på personer igen, eftersom vi just uppdaterat den
  loadExampleList()
}


async function loadExampleList() {
  // Ladda in data ifrån databasen (via backend)
  let result = await fetch("/data/highscore")
  let highscore = await result.json()
  renderExampleList(highscore)
}

function renderExampleList(highscores) {
  let list = $("<ul/>")
  //for (let i=0; i<)
  for (let highscore of highscores) {
    list.append(`<li>${highscore.name}${highscore.score}</li>`)
  }
  $("#highscores").html(list)
}
