import express from 'express';

const defaultRouter = express.Router();

defaultRouter.get(
  '/',(req, res) => {
      console.log('The api is running')
      return res.status(200).json({message: "The api is live"})}
);

export default defaultRouter;
