
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const sleep = () => new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("2 seconde")
    },2000)
})



sleep(0).then((res)=>{
    console.log(res);
})

module.exports = {sleep};