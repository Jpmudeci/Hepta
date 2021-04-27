const express = require('express');
const app = express();

app.use(express.static(__dirname +'/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.procces || 3000; // PONEMOS EL PUERTO

const purchaseRouter = require('./routes/purchaseRoutes');

app.use('/api', purchaseRouter);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
})
