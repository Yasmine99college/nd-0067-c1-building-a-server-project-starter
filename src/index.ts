// import express from 'express';

// const app = express();
// const port = 3000;
// app.get('/api', (req, res) => {
//     res.send('Hello, world!');
// });
// app.listen(port, () => {
//     console.log(`server started at localhost:${port}`)
// });
// const logger = (
//     req: express.Request,
//     res: express.Response,
//     next: Function
// ): void => { };
// app.get('/route', logger, (req, res) => {
//     res.send('success!');
// });
const myFunc = (num: number): number => {
    return num * num;
};

export default myFunc;