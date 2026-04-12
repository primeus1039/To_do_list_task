import { readdir, readFile, writeFile, rename } from 'node:fs/promises';
import personJsonData from './peopleData.json' with {type: 'json'}
import  path  from 'path';
import { text } from 'node:stream/consumers';
console.clear()

const personData = personJsonData
const getImageFolderPath = "assets"
const getImages = await readdir(getImageFolderPath)

async function accessPersonData(personArray) {
    for (let indexDetails = 0; indexDetails < personArray.length; indexDetails++) {
        const personalDetails = personArray[indexDetails];
        
        //checks and prints details of people above age 20
        if (personalDetails.Age > 20) {
            console.log(personalDetails)
        }
    }
}
accessPersonData(personData)

const allImagesPath = [];

for (const index of getImages) {
    console.log(index);
    console.log(getImageFolderPath)
    const fullImagePath = getImageFolderPath + '/' + index;
    console.log(fullImagePath)
    // && is the AND operator, || is the OR operator
    if (!fullImagePath.endsWith('jpg') && !fullImagePath.endsWith('png')) continue;
    allImagesPath.push(fullImagePath);

}
console.log(allImagesPath)
console.log()