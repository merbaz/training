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


rl.question('Give Path Of File To Copy: ', (source: string)=>{
    rl.question('Give Path Of File To Paste Content To: ', (destination:string)=>{
        fs.copyFile(source, destination, (error)=>{
           if(error){
            throw error;
           } 
           console.log("Copied And Pasted Successfully");
           rl.close()
        })
    })
})

const sourceFilePath = './src/assignment9/large_file.txt'; // Replace 'large_file.txt' with your actual large file path
const destinationFilePath = './src/assignment9/processed_file.txt'; // Path to save the processed file

const readStream = fs.createReadStream(sourceFilePath, {highWaterMark: 64});
const writeStream = fs.createWriteStream(destinationFilePath);

let bytesCompleted = 0;
readStream.on('data', (chunk) => {
    console.log(chunk);
    bytesCompleted = bytesCompleted + chunk.length
    console.log(`Processed ${bytesCompleted} bytes`);
    writeStream.write(chunk);
});

readStream.on('end', () => {
    console.log('File processing completed.');
    writeStream.end();
});

readStream.on('error', (err) => {
    console.error('Error reading file:', err);
});

writeStream.on('finish', () => {
    console.log('Data has been written to the destination file successfully.');
});

writeStream.on('error', (err) => {
    console.error('Error writing to destination file:', err);
});


const imagePath = './src/assignment9/image.jpg'; 

fs.readFile(imagePath, (err, data) => {
  if (err) {
    console.error('Error reading image file:', err);
    return;
  }

  const base64String = Buffer.from(data).toString('base64');
  console.log('Base64-encoded image:', base64String);
});
