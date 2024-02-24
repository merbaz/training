import cluster from "cluster";
import os from "os";
import { dirname } from "path";
import { fileURLToPath } from "url";

const _dirname = dirname(fileURLToPath(import.meta.url));

const cpuCount = os.cpus().length;
console.log(`cluster process id: ${process.pid}`);
cluster.setupPrimary({
    exec: _dirname + "/app.js"
});

for(let i=0; i<=cpuCount; i++){
    cluster.fork()
}

cluster.on("exit", (worker, code)=>{
    console.log(`worker ${worker.process.pid} has been killed with code ${code}`);
    console.log(`Starting another worker`);
    cluster.fork();
})


