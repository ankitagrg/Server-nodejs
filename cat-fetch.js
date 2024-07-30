import fetch from "node-fetch";
import http from "http";
import url from 'url';

const server = http.createServer(async (req, res) => {
  try {
    const response = await fetch("https://meowfacts.herokuapp.com/");
    const data = await response.json();

    res.end(JSON.stringify(data));
  } catch (error) {
    res.end("Error fetching cat fact");
  }
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});