import { readdir, readFile, writeFile } from 'node:fs/promises';
import jsonData from './Exercise_1_data.json' with {type: 'json'}
import  path  from 'path';
console.clear()

const textFolderPath = "./text";
// console.log(jsonData.Asia)

async function fileAccess(){
    
        const files = await readdir(textFolderPath);

        function accessCountry (jsonSearch) {
            for (let index = 0; index < jsonSearch.length; index++) {
                const countries = jsonSearch[index];
                // the || is the OR operator 
                if (countries.ID === 2 || countries.ID === 3) {
                    const placeNames = [];
                    placeNames.push(countries.name)
                    console.log(placeNames) 
                };
            } 
        };
        for (let region in jsonData) {
            const countryName = jsonData[region]
            accessCountry(countryName)
        };
        
        // checks and prints the text file name and it's contents
        for (const filecontent of files) {
            //get the full path of the text files
            const fullTextPath = path.join(textFolderPath, filecontent);
            //reads the content in the text files
            const textfileContents = await readFile(fullTextPath, 'utf8');

            console.log(`file content: ${filecontent}`);
            console.log(textfileContents);
            

            // await writeFile(fullTextPath, "lmao", 'utf8');

            // console.log(textfileContents)
        }
}
fileAccess()