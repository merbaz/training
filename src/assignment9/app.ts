import fs from "fs";
import readline from "readline";

let rl = readline.createInterface(process.stdin, process.stdout);

function createDirectories(dirPath: string): void {
  fs.mkdir(dirPath, {recursive:true}, (error) => {
    if (error) {
      console.error(`Failed to create directory "${dirPath}":`, error);
      rl.close();
      return;
    }
    console.log(`Created directory "${dirPath}"`);
  });
}


rl.question('Enter how far down your directory will be: ', (nestNum: string) => {
    let dirPath = './'; // initialize root directory
    if(typeof Number(nestNum) === "number" && Number(nestNum) < 0){
        let nest:number = Number(nestNum);
        for(let i=0; i<nest; i++){
            rl.question(`Give directory name for sub nest ${i+1}: `, (dirName)=>{
                dirPath = dirPath + dirName + "/";
                return;
            })
        }
        console.log(dirPath);
        createDirectories(dirPath); // the directory path is now created.
    }
})


