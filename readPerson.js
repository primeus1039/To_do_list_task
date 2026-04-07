import { readdir, readFile, writeFile, rename } from 'node:fs/promises';
import personJsonData from './peopleData.json' with {type: 'json'}
import  path  from 'path';
import { text } from 'node:stream/consumers';
console.clear()

const personData = personJsonData

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
