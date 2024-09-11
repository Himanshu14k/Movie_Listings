import SQLite from '@boltcode/react-native-sqlite-storage';

// Open or create the database
const db = SQLite.openDatabase(
    {
        name: 'MoviesDB',
        location: 'default',
    },
    () => console.log('Database opened successfully'),
    error => console.log('Error opening database:', error)
);

// Function to create the table if it doesn't exist
export const createTable = () => {
    db.transaction(tx => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS Movies (id INTEGER PRIMARY KEY AUTOINCREMENT, poster TEXT, name TEXT, runtime TEXT, year TEXT, genre TEXT, cast TEXT, director TEXT);',
            [],
            () => console.log('Table created successfully'),
            error => console.log('Error creating table:', error)
        );
    });
};

// Function to insert a movie into the database
export const insertMovie = (movie) => {
    db.transaction(tx => {
        tx.executeSql(
            'INSERT INTO Movies (poster, name, runtime, year, genre, cast, director) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [movie.poster, movie.name, movie.runtime, movie.year, movie.genre, movie.cast, movie.director],
            (tx, results) => {
                if (results.rowsAffected > 0) {
                    console.log('Movie inserted successfully');
                }
            },
            error => console.log('Error inserting movie:', error)
        );
    });
};

// Function to fetch movies from the database
export const fetchMovies = (callback) => {
    db.transaction(tx => {
        tx.executeSql(
            'SELECT * FROM Movies',
            [],
            (tx, results) => {
                const rows = results.rows;
                let movies = [];
                for (let i = 0; i < rows.length; i++) {
                    movies.push(rows.item(i));
                }
                callback(movies);
            },
            error => console.log('Error fetching movies:', error)
        );
    });
};
