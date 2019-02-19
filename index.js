const  express = require('express');
const app = express();


app.get('/', (req,res) =>res.send('Hola mundo!!!!!'));

app.listen(3000, ()=>{console.log('first appa  esta en port 3000');}); 
console.log();
