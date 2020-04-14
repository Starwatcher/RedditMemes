import { getRandomMeme, getLocalRandomMeme } from '../dist';

async function init() {
    try {
        console.log("\n========================================");
        console.log("=          Gettin Random Meme          =");
        console.table(await getRandomMeme());
        console.log("\n========================================");
        console.log("=       Gettin Random Anime Meme       =");
        console.table(await getRandomMeme("anime"));
        console.log("\n========================================");
        console.log("=     Gettin Random Spongebob Meme     =");
        console.table(await getRandomMeme("spongebob"));
        console.log("\n========================================");
        console.log("=     Gettin Spanish Spongebob Meme     =");
        console.table(await getLocalRandomMeme("es"));
    } catch(e) {
        throw e;
    }
}

init().then(() => console.log("Done")).catch(() => console.log("Done"));