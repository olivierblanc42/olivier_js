
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const myPromise = (ms) => new Promise(resolve => setTimeout(resolve ,ms) );



const sleep = async () => {
    console.log("start")
    await myPromise(2000);
    console.log("end")
};

sleep();
module.exports = {sleep};