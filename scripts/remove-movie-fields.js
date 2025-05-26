// Script para remover campos específicos do arquivo movies.json
const fs = require('fs');
const path = require('path');

// Caminho para o arquivo movies.json
const filePath = path.join(__dirname, '../json/movies.json');

// Ler o arquivo
const moviesData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Campos a serem removidos
const fieldsToRemove = [
  'plot',
  'url',
  'original_title',
  'imdb_rating',
  'num_votes',
  'release_date',
  'directors',
  'actors',
  'language',
  'country',
  'awards',
  'ratings',
  'box_office',
];

// Remover os campos de cada objeto
const updatedMovies = moviesData.map(movie => {
  // Criar um novo objeto sem os campos indesejados
  const newMovie = {};
  
  for (const key in movie) {
    if (!fieldsToRemove.includes(key)) {
      newMovie[key] = movie[key];
    }
  }
  
  return newMovie;
});

// Escrever o resultado de volta para o arquivo
fs.writeFileSync(filePath, JSON.stringify(updatedMovies, null, 2));

console.log('Campos removidos com sucesso!');
