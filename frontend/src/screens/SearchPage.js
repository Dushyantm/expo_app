import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const therapistsData = [
  // Your therapist data here
];

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  const handleSearch = () => {
    // Implement search logic here based on the searchQuery
  };

  const handleTherapistClick = (therapist) => {
    // Navigate to the AskPage with the selected therapist's data
    navigation.navigate('Ask', { therapist });
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        style={{ borderWidth: 1, padding: 8 }}
        placeholder="Search for a therapist..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <TouchableOpacity onPress={handleSearch}>
        <Text>Search</Text>
      </TouchableOpacity>
      <View style={{ marginTop: 16 }}>
        {/* Display search results */}
        {therapistsData.map((therapist) => (
          <TouchableOpacity
            key={therapist.username}
            onPress={() => handleTherapistClick(therapist)}
            style={{
              borderWidth: 1,
              padding: 8,
              marginVertical: 8,
            }}
          >
            <Text>{therapist.username}</Text>
            <Text>{therapist.keywords.join(', ')}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SearchPage;
