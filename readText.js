import { readdir, readFile, writeFile, rename } from 'node:fs/promises';
import jsonData from './Exercise_1_data.json' with {type: 'json'}
import  path  from 'path';
import { text } from 'node:stream/consumers';
console.clear()

const textFolderPath = "./text";
const textBackupPath = "./text/textBackup"
const textMultiplyPath = "./text/textMultiply"
// console.log(jsonData.Asia)

async function fileAccess(){
        const files = await readdir(textFolderPath);
        const continentList = [];

        // accesses the json and prints the values
        function accessCountry (jsonSearch) {
            const placeNames = [];
            for (let index = 0; index < jsonSearch.length; index++) {
                const countries = jsonSearch[index];
                // the || is the OR operator 
                if (countries.ID === 2 || countries.ID === 3) {
                    placeNames.push(countries.Name)
                    console.log(placeNames) 
                };
            } 
        };
        accessCountry(jsonData)
        
        function randomNum(array) {
            const randomNumber = Math.floor(Math.random() * array.length)
            return array[randomNumber]
        }

        // checks and prints the text file name and it's contents
        for (const filename of files) {
            //skips all files/folder that is not (.txt)
            if (!filename.endsWith('.txt')) continue;
            //get the full path of the text files
            const fullTextPath = path.join(textFolderPath, filename);
            // readFile() reads the content in the text files using the file's path
            const textfileContents = await readFile(fullTextPath, 'utf8');

            //backup original content
            const textFilePathBackup = path.join(textBackupPath, "backup_" + filename);
            await writeFile(textFilePathBackup, textfileContents, 'utf8');

            //writeFile(where, what, how) returns = "Task_from_An/todolist_task/backup_1.txt"
            //const backupFile_path = path.join(textFolderPath, "backup_",filename) 
            //await writeFile(backupFile_path, textfileContents, 'utf8');

            // prints the name of file and its contents
            console.log(`file content: ${filename}`);
            console.log(textfileContents);

            //get the number from the text file name
            const getFileNumber = parseInt(filename.replace('.txt', ''));
            // checks if getFileNumber is a number using double negative
            if(!isNaN(getFileNumber)) {
                // create new file name
                const newFileName = `${getFileNumber*3.14}.txt`
                // creating the new location for file + the name of file
                const newFileLocation = path.join(textMultiplyPath, newFileName);
                // creates file
                await rename(fullTextPath, newFileLocation)
            }
            console.log(parseInt(filename))
            
            // gets and updates the continents from json into continentList
            for (let content = 0; content < jsonData.length; content++) {
                const getInfo = jsonData[content];
                if (!continentList.includes(getInfo.Continents)){
                    continentList.push(getInfo.Continents);
                }
            }
            await writeFile(fullTextPath, randomNum(continentList), 'utf8');
        }
        //test for checking how continentList will be handled, will be deleted.
        console.log(continentList)
        console.log(randomNum(continentList))
        
}
fileAccess()

