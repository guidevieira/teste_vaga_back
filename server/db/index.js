const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 10,
    password: 'test12334',
    user: 'teste_vaga',
    database: 'teste_vaga_git',
    host: 'mysql669.umbler.com',
    port: '41890'
})

let chirpdb = {}

chirpdb.getCompany = async (data) => {
    return new Promise((resolve, reject) => {
        pool.query("SELECT * FROM company", (err, results) => {
            console.log(err)
            if(results.length != 0 ){
                return resolve(results)
            }else{
                return resolve({ 'erro': 'email nao existe'})
            }
        })
    })
}

chirpdb.getCompanyParams = async (data) => {
    return new Promise((resolve, reject) => {
        pool.query("SELECT * FROM company WHERE id = ?",data.id, (err, results) => {
            console.log(err)
            if(results.length != 0 ){
                return resolve(results[0])
            }else{
                return resolve({ 'erro': 'email nao existe'})
            }
        })
    })
}

chirpdb.getPostsParam = async (data) => {
    return new Promise((resolve, reject) => { 
        pool.query("SELECT * FROM users LEFT JOIN posts ON posts.userId = users.id WHERE companyId = ?",data.id, (err, results) => {
            if(results.length != 0 ){
                return resolve(results)
            }else{
                return resolve({ 'erro': 'email nao existe'})
            }
        })
    })
}

chirpdb.getPost = async (data) => {
    return new Promise((resolve, reject) => { 
        pool.query("SELECT * FROM posts WHERE id = ?",data.id, (err, results) => {
            if(results.length != 0 ){
                return resolve(results[0])
            }else{
                return resolve({ 'erro': 'email nao existe'})
            }
        })
    })
}



module.exports = chirpdb