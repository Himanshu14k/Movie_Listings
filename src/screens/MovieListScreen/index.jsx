// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
// import { fetchMovies } from '../../utils/db';
// // import { fetchMovies } from '../db';

// const placeholderImage = 'https://via.placeholder.com/100';

// const MovieListScreen = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     fetchMovies((movies) => {
//       setMovies(movies);
//     });
//   }, []);

//   const renderItem = ({ item, index }) => (
//     <View style={styles.movieItem}>
//       <Image source={{ uri: item.poster || placeholderImage }} style={styles.poster} />
//       <View style={styles.movieDetails}>
//         <Text>Name: {item.name}</Text>
//         <Text>Runtime: {item.runtime || 'NA'}</Text>
//         <Text>Year: {item.year}</Text>
//         <Text>Genre: {item.genre}</Text>
//         <Text>Cast: {item.cast}</Text>
//         <Text>Director: {item.director}</Text>
//         <Text>Item Number: {index + 1}</Text>
//       </View>
//     </View>
//   );

//   return (
//     <FlatList
//       data={movies}
//       renderItem={renderItem}
//       keyExtractor={(item) => item.id.toString()}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   movieItem: {
//     flexDirection: 'row',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   poster: {
//     width: 100,
//     height: 150,
//     marginRight: 10,
//   },
//   movieDetails: {
//     flex: 1,
//     justifyContent: 'center',
//   },
// });

// export default MovieListScreen;



import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { fetchMovies } from '../../utils/db';

const placeholderImage = 'https://via.placeholder.com/100';

const MovieListScreen = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies((movies) => {
      setMovies(movies);
    });
  }, []);

//   const formatCast = (castArray) => {
//     console.log("castArraycastArray", castArray);
    
//     if (!castArray || castArray.length === 0) return 'N/A'; // Handle empty or undefined cast
//     return castArray?.map((castMember) => castMember.name).join(', ');
//   };
// console.log("moviesmovies",movies[0]?.cast && JSON?.parse(movies[0]?.cast));

const formatCast = (castString) => {
  let castArray;
  
  try {
    castArray = JSON.parse(castString);  // Parse cast string to array
  } catch (error) {
    return 'N/A';  // Return 'N/A' if parsing fails
  }

  if (!castArray || castArray.length === 0) return 'N/A';  // Handle empty cast
  return castArray.map((castMember) => castMember.name).join(', ');
};

  const renderItem = ({ item, index }) => (
    <View style={styles.movieItem}>
      <Image source={{ uri: item.poster || placeholderImage }} style={styles.poster} />
      <View style={styles.movieDetails}>
        <Text style={styles.movieName}>Name: <Text style={styles.title1}>{item.name}</Text></Text>
        <Text style={styles.movieName}>Runtime: <Text style={styles.title1}>{item.runtime || 'NA'}</Text></Text>
        <Text style={styles.movieName}>Year: <Text style={styles.title1}>{item.year}</Text></Text>
        <Text style={styles.movieName}>Genre: <Text style={styles.title1}>{item.genre}</Text></Text>
        <Text style={styles.movieName}>Cast: <Text style={styles.title1}>{formatCast(item.cast)}</Text></Text>
        <Text style={styles.movieName}>Director: <Text style={styles.title1}>{item.director}</Text></Text>
      </View>
      <View style={styles.indexBadge}>
        <Text style={styles.indexText}>{index + 1}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={movies}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  movieItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  poster: {
    width: 100,
    // height: 120,
    height: "100%",
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
  movieDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  movieName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: "#000"
  },
  title1: {
    fontSize: 14,
    marginBottom: 3,
    color: '#555',
  },
  indexBadge: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffb9b9',
  },
  indexText: {
    color: '#c72a2a',
    fontWeight: 'bold',
    fontSize: 16
  },
});

export default MovieListScreen;
