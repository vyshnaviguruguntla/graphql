

const db = require('./db')

const Query = {
    greeting:() => {
        return "hello from  TutorialsPoint !!!"
     },
     students:() => db.students.list(),
     test: () => 'Test Success, GraphQL server is up & running !!'
}
    
 module.exports = {Query}