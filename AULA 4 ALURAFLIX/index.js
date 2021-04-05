//var filme1 = "Star Wars"
//var filme2 = "toy story"
//var filme3 = "interestellar"

//var filmes = ["Star Wars", "toy story", "interestellar"]


//var filmes = []

//filmes.push("Star Wars")
//filmes.push("toy story")

//console.log(filmes[1]);

//var filmes = ["Star Wars", "toy story", "interestellar", "Esqueceram de mim"]

//while (tentativas > 0) {

//    tentativas = tentativas - 1
//}

//for (var i = 0; i < filmes.length ; i++) {
//    console.log(filmes[i]);
//}

var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BOTg2MmZiZDUtZGQ0My00MGNjLTk1ZGUtMTM1OTNhODJjYzdlXkEyXkFqcGdeQXVyNzMxNjA3OTQ@._V1_UY268_CR147,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMTY1NzU0MDM5NF5BMl5BanBnXkFtZTcwODk3MDY3Mg@@._V1_UY317_CR2,0,214,317_AL_.jpg"]

for (var i = 0;  i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + ">")
}
