import express from 'express';

const PORT = process.env.PORT || 5000;

const Main = () => {
  const app = express();

  app.get('/', (req, res) => {
    res.status(200).json({
      message: 'Hello world',
    });
  });

  app.get('/status', (req, res) => {
    res.status(200).json({
      message: 'server is working',
    });
  });

  app.listen(PORT, () => console.log(`Server starting at PORT: ${PORT}`));
};

Main();
