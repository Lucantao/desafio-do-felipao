let heroName = "Lucélio"
let quantitiesXp =2000
const stateName = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]

let result = `O herói de nome ${heroName} esta no nível `

let nivel 

switch (true) {
  case quantitiesXp < 1000:
  nivel = stateName[0]
  break;

  case quantitiesXp < 2000:
  nivel = stateName[1]
  break;

  case quantitiesXp < 5000:
  nivel = stateName[2]
  break;

  case quantitiesXp < 7000:
  nivel = stateName[3]
  break;

  case quantitiesXp < 8000:
  nivel = stateName[4]
  break;

  case quantitiesXp < 9000:
  nivel = stateName[5]
  break;

  case quantitiesXp < 10000:
  nivel = stateName[6]
  break;

  case quantitiesXp >= 10001:
  nivel = stateName[7]
  break;

  default:
  nivel = stateName[0]

}

console.log(result + nivel)