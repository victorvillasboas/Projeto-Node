
// Criando a Função do Objeto Aluno
function aluno(matricula, nome, idade, mediaglobal){
  this.matricula = matricula;
  this.nome = nome;
  this.idade = idade;
  this.mediaglobal = mediaglobal;

  var alunos = [matricula, nome, idade, mediaglobal];
}

//Criando a Função do Vetor Alunos
function Alunos(){
  alunos = [];
  
  var A1 = new aluno(001, "Luan", 18, 9);
  var A2 = new aluno(002, "Elias", 19, 9);
  var A3 = new aluno(003, "Keylane", 20, 9);
  var A4 = new aluno(004, "Victor", 19, 9);
  var A5 = new aluno(005, "Poliana", 19, 9);

  alunos.push(A1, A2, A3, A4, A5);
  
  return alunos;
}

// Requerir o modulo do MYSQL no projeto
var bancoAlunos = require('mysql2');

// criando a conexão com o banco de dados
var connection = bancoAlunos.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'cadastro'
});


// A partir daqui pra baixa não funciona é apenas teste

/*
// {nome: 'Al', matricula: null, cpf: null}

function buscaalunos(Alunos) {
    let filtroMatricula = "", filtroNome = "", filtroIdade = "", filtroMedia = ""
    if (Alunos.matricula != null) {
        filtroMatricula = "matricula <= " + Alunos.matricula
    }
    if (Alunos.nome != null) {
        filtroNome = "nome like '" + Alunos.nome + "%'" 
    }
    if (Alunos.idade != null) {
        filtroIdade = "idade <= " + Alunos.idade
    }
    let filtro = ""
    filtro = filtroMatricula
    if (filtro != "" && filtroNome != "") {
        filtro += " AND "
    }
    filtro += filtroNome
    if (filtro != "" && filtroCpf != "") {
        filtro += " AND "
    }
    filtro += filtroIdade
    if (filtro != "") {
        filtro = " WHERE " + filtro
    }
    connection.query(
        'SELECT * FROM pessoas' + filtro,
        function(err, results, fields) {
          //console.log(results); // results contains rows returned by server
          for(let i = 0; i < results.length; i++) {
            console.log("Nome: " + results[i].nome)
          }
        }
    );
}

selecionaPessoas({nome: 'Joani', matricula: 500, cpf: null})

*/



//teste
/*const Sequelize = require('sequelize')
const sequelize = new Sequelize('desafiolt', 'root', '150903', {
host: "localhost", 
dialect:' mysql'
}) /*


sequelize.authenticate().then(function(){
console.log("Conectado com sucesso!")
}) catch(function(erro){
console.log("Falha ao se conectar: "+erro)
}) 
*/


//criando conexao com banco

var mysql = require("mysql");
var con = mysql.createConnection({
host: "localhost", user: "root", 
password: "150903", 
database: "desafiolt"
});

con.connect (function (err) {
    if (err) throw err;
    console.log("Conectado!");
});


con.connect (function (err) {
    if (err) throw err;
    console. log ("Conectado!");
    var sal = "SELECT * FROM Alunos";
    con.query(sql, (err, result) =>
    {
    if (err) throw err; console. log(result);

    });
});
