import express, {Application} from 'express';
import router from './routes';
const port = process.env.PORT || 5000;
const app:Application = express();

app.get('/', (req, res) => {
    res.send('Hello')
})

app.use(router);

app.listen(port, () => console.log(`Server is running on port ${port}`))