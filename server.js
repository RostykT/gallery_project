const PORT = 8001;
const films = [
  {
    Title: "Terminator 2: Judgment Day",
    Year: "1991",
    imdbID: "tt0103064",
    Type: "movie",
    Directed_by:"James Cameron",
    Country: "USA",
    Description: `Lorem ipsum dolor sit amet,
     consectetur adipiscing elit, 
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
  },
  {
    Title: "The Terminator",
    Year: "1984",
    imdbID: "tt0088247",
    Type: "movie",
    Directed_by:"James Cameron",
    Country: "USA",
    Description: `Lorem ipsum dolor sit amet,
     consectetur adipiscing elit, 
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "Terminator 3: Rise of the Machines",
    Year: "2003",
    imdbID: "tt0181852",
    Type: "movie",
    Directed_by:"James Cameron",
    Country: "USA",
    Description: `Lorem ipsum dolor sit amet,
     consectetur adipiscing elit, 
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTk5NzM1ODgyN15BMl5BanBnXkFtZTcwMzA5MjAzMw@@._V1_SX300.jpg"
  },
  {
    Title: "Terminator Salvation",
    Year: "2009",
    imdbID: "tt0438488",
    Type: "movie",
    Directed_by:"James Cameron",
    Country: "USA",
    Description: `Lorem ipsum dolor sit amet,
     consectetur adipiscing elit, 
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    Poster:
      "https://m.media-amazon.com/images/M/MV5BODBlOTJhZjItMGRmYS00YzM1LWFmZTktOTJmNDMyZTBjMjBkXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg"
  },
  {
    Title: "Terminator Genisys",
    Year: "2015",
    imdbID: "tt1340138",
    Type: "movie",
    Directed_by:"James Cameron",
    Country: "USA",
    Description: `Lorem ipsum dolor sit amet,
     consectetur adipiscing elit, 
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjM1NTc0NzE4OF5BMl5BanBnXkFtZTgwNDkyNjQ1NTE@._V1_SX300.jpg"
  },
  {
    Title: "Terminator: Dark Fate",
    Year: "2019",
    imdbID: "tt6450804",
    Type: "movie",
    Directed_by:"James Cameron",
    Country: "USA",
    Description: `Lorem ipsum dolor sit amet,
     consectetur adipiscing elit, 
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOWExYzVlZDgtY2E1ZS00NTFjLWFmZWItZjI2NWY5ZWJiNTE4XkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_SX300.jpg"
  },
  {
    Title: "Terminator: The Sarah Connor Chronicles",
    Year: "2008–2009",
    imdbID: "tt0851851",
    Type: "series",
    Directed_by:"James Cameron",
    Country: "USA",
    Description: `Lorem ipsum dolor sit amet,
     consectetur adipiscing elit, 
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZGE2ZDgyOWUtNzdiNS00OTI3LTkwZGQtMTMwNzM4YWUxNGNhXkEyXkFqcGdeQXVyNjU2NjA5NjM@._V1_SX300.jpg"
  },
  {
    Title: "Terminator 3: Rise of the Machines",
    Year: "2003",
    imdbID: "tt0364056",
    Type: "game",
    Directed_by:"James Cameron",
    Country: "USA",
    Description: `Lorem ipsum dolor sit amet,
     consectetur adipiscing elit, 
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA5OTk4MTQwNV5BMl5BanBnXkFtZTgwMzkxNTEwMTE@._V1_SX300.jpg"
  },
  {
    Title: "Lady Terminator",
    Year: "1989",
    imdbID: "tt0095483",
    Type: "movie",
    Directed_by:"James Cameron",
    Country: "USA",
    Description: `Lorem ipsum dolor sit amet,
     consectetur adipiscing elit, 
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTg5NTA1NzEtNWNiNy00ZTc4LWJhZTgtYmJkODZhYWI3NmQ4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  },
  {
    Title: "Terminator 2: Judgment Day",
    Year: "1991",
    imdbID: "tt0244839",
    Type: "game",
    Directed_by:"James Cameron",
    Country: "USA",
    Description: `Lorem ipsum dolor sit amet,
     consectetur adipiscing elit, 
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2FhOTQ2MmQtNTY0OC00NWYyLThjNjMtZmZiOTBmYTY4MmM2XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg"
  }
];


const express = require("express");
const fs = require('fs');
const cors = require("cors");
const app = express();

app.use(cors({
    origin: "*"
}));

app.get("/api/health", (req, res) => res.json({ success: true }));

app.get("/films", (req, res) => {
  res.json(films);
});

app.get("/films/:id", (req, res) => {
  res.json(films[req.params.id]);
});

app.get('/video', (req, res) => {
  const range = req.headers.range;
  const videoPath = './terminator.mp4';
  const videoSize = fs.statSync(videoPath).size;

  const chunkSize = 1 * 1e+6;
  const start = Number(range.replace(/\D/g, ''));
  const end = Math.min(start + chunkSize, videoSize -1);

  const contentLength = end - start + 1;

  const headers = {
      "Content-Range": `bytes ${start}-${end}/${videoSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": contentLength,
      "Content-Type": "video/mp4"
  }
  res.writeHead(206, headers);

  const stream = fs.createReadStream(videoPath, { start, end })
  stream.pipe(res);
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
