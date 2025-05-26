import csv from 'csv-parser'
import fs, { writeFileSync } from 'fs'
import path from 'path'
import type { Movie } from '~/types/data'

/**
 * Script para processar arquivo CSV de filmes do IMDB
 * Extrai apenas os campos necessários e exporta para JSON
 */

// Define o caminho para o arquivo CSV. Por default, usa 'movies.csv' na pasta scripts
const MOVIES_CSV_FILE_PATH = path.join(process.cwd(), 'scripts', 'movies.csv')

/**
 * Processa o arquivo CSV e extrai apenas os campos necessários
 * Campos mantidos: const, your_rating, date_rated, title, title_type, runtime, year, genres, total_seasons, poster
 */
async function processMovies() {
  if (!fs.existsSync(MOVIES_CSV_FILE_PATH)) {
    console.log('🎬 CSV file not found:', MOVIES_CSV_FILE_PATH)
    return
  }

  console.log('🎬 Processando arquivo CSV de filmes...')
  
  try {
    const movies: Movie[] = []
    
    // Cria uma promise para lidar com o processamento do CSV
    const processComplete = new Promise<void>((resolve, reject) => {
      fs.createReadStream(MOVIES_CSV_FILE_PATH)
        .pipe(
          csv({
            mapHeaders: ({ header }) =>
              header
                .replace(/(\(.*\))/g, '')
                .trim()
                .toLowerCase()
                .replace(/\s/g, '_'),
          })
        )
        .on('data', (movieData: any) => {
          // Extrai apenas os campos específicos
          movies.push({
            const: movieData.const,
            your_rating: movieData.your_rating,
            date_rated: movieData.date_rated,
            title: movieData.title,
            title_type: movieData.title_type,
            runtime: movieData.runtime,
            year: movieData.year,
            genres: movieData.genres,
            total_seasons: movieData.total_seasons || null,
            poster: movieData.poster || null
          })
        })
        .on('error', (error) => {
          console.error(`❌ Erro ao processar o arquivo CSV: ${error.message}`)
          reject(error)
        })
        .on('end', () => {
          // Salva o resultado no arquivo JSON
          const outputPath = path.join(process.cwd(), 'json', 'movies.json')
          writeFileSync(outputPath, JSON.stringify(movies, null, 2))
          console.log(`✅ ${movies.length} filmes processados e salvos em json/movies.json`)
          resolve()
        })
    })

    await processComplete
  } catch (error) {
    console.error(`❌ Erro ao processar filmes: ${error.message}`)
  }
}

/**
 * Função principal para execução do script
 */
export async function seed() {
  await processMovies()
}

// Executa o script
seed()
