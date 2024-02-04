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


function askDirName(depth:number, currentDepth:number, dirPath:string):void{
    rl.question(`Give directory name for sub nest ${currentDepth+1}: `, (dirName)=>{
        if (currentDepth === depth){
            createDirectories(`${dirPath}/${dirName}`); // the directory path is now created.
            rl.close()
            return;
        }
        askDirName(depth, currentDepth+1, `${dirPath}/${dirName}`)
        return;
 })
}


rl.question('Enter how far down your directory will be (0 if you want it at root): ', (nestNum: string) => {
    let dirPath = './src/assignment9'; // initialize root directory
    console.log("nestNum:", nestNum);
    if(typeof Number(nestNum) === "number" && Number(nestNum) >= 0){
        let depth:number = Number(nestNum);
        askDirName(depth, 0, dirPath);
       
    }
})


