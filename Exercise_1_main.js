import jsonData from './Exercise_1_data.json' with { type: 'json'};
import { readdir } from 'node:fs/promises';

console.clear()
// console.log(jsonData.Asia)
// console.log(jsonData.Oceania)

// function to check the json data and prints only the countries
function searchObject(arraySearch) {
    const country_list = [];
    for (let index = 0; index < arraySearch.length; index++) {
        const objects = arraySearch[index];

        //updates country only if it does not exist in country_list
        if (!country_list.includes(objects.Country)) {
            country_list.push(objects.Country);
        }
    };
    console.log(country_list);
};
searchObject(jsonData)

// read text file names and count them
const imageFolder = './assets';

async function readImageFiles () {
    try {
        //prints out image names
        const imageFiles = await readdir(imageFolder);
        for (const imageNames of imageFiles) {
            console.log(imageNames);
        }

        //prints out the total count of images in folder
        const filesAmount = [];
        for (const countFiles of imageFiles){
            filesAmount.push(countFiles);
        }
        console.log(filesAmount.length);
    }
    catch{
    console.log("some error found")
    };
}
readImageFiles();





