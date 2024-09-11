import React, { useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { createTable, fetchMovies, insertMovie } from '../../utils/db';
import { routesConstants } from '../../constants/constants';

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    // Create the SQLite table if it doesn't exist
    createTable();

    // Check if the movies are already stored in the local DB
    fetchMovies((movies) => {
      if (movies.length === 0) {
        // No movies in the DB, call the API and save the first 50 movies
        axios.get('https://1ad721fd-f79b-4602-a86e-1a7dae50ee0c.mock.pstmn.io/getmockdata')
          .then(response => {
            const moviesData = response.data;

            // Take only the first 50 movies
            const limitedMovies = moviesData.slice(0, 50);

            // Insert the limited movies into the SQLite database
            limitedMovies.forEach(movie => {
              insertMovie(movie);
            });
          })
          .catch(error => console.log('Error fetching movies from API:', error));
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Open List" onPress={() => navigation.navigate(routesConstants.movieList)} color="#1e90ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
});

export default HomeScreen;
