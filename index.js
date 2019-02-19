const  express = require('express');
const app = express();


app.get('/', (req,res) =>res.send('Hola mundo!first-app-node '));

app.listen(3000, ()=>{console.log('first-app-node esta en port 3000');}); 
console.log();
