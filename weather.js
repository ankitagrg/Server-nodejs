import fetch from "node-fetch";
import http from "http";
import url from "url";

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const query = parsedUrl.query;

  const lat = query.lat;
  const lon = query.lon;
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`,
  );

  const data = await response.json();

  res.end(JSON.stringify(data));
});



const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});


