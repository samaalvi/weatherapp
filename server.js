import { createServer } from "http";

const server = createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    });

 res.end(
        JSON.stringify([
          {
            id: 1,
            country: "Iran",
            week: [
              { id: 1, name: "sat", temperature: "34" },
              { id: 2, name: "sun", temperature: "32" },
              { id: 3, name: "mon", temperature: "30" },
              { id: 4, name: "tue", temperature: "29" },
              { id: 5, name: "wed", temperature: "28" },
              { id: 6, name: "thu", temperature: "31" },
              { id: 7, name: "fri", temperature: "33" },
            ],
          },
          {
            id: 2,
            country: "USA",
            week: [
              { id: 1, name: "sat", temperature: "25" },
              { id: 2, name: "sun", temperature: "27" },
              { id: 3, name: "mon", temperature: "26" },
              { id: 4, name: "tue", temperature: "24" },
              { id: 5, name: "wed", temperature: "23" },
              { id: 6, name: "thu", temperature: "22" },
              { id: 7, name: "fri", temperature: "28" },
            ],
          },
          {
            id: 3,
            country: "Germany",
            week: [
              { id: 1, name: "sat", temperature: "18" },
              { id: 2, name: "sun", temperature: "19" },
              { id: 3, name: "mon", temperature: "17" },
              { id: 4, name: "tue", temperature: "16" },
              { id: 5, name: "wed", temperature: "15" },
              { id: 6, name: "thu", temperature: "17" },
              { id: 7, name: "fri", temperature: "18" },
            ],
          },
        ])
      );
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
