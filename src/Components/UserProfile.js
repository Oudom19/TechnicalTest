import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { fetchUserProfile } from '../Services/api';
import styles from '../Styles/styles'; 

const UserProfile = ({ route }) => {
  const { token } = route.params;
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [gender, setGender] = useState('');

  useEffect(() => {
    const getProfile = async () => {
      try {
        console.log('Fetching user profile...');
        const data = await fetchUserProfile(token);
        console.log('Profile data received:', data);
        setProfile(data);
        setGender(data.gender || ''); 
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
        setError('Failed to fetch user profile.');
      } finally {
        setLoading(false);
      }
    };

    getProfile();
  }, [token]);

  if (loading) {
    return (
      <View style={styles.profileContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.profileContainer}>
      <Text style={styles.title}>Profile</Text>
      {error ? (
        <Text style={styles.profileText}>{error}</Text>
      ) : profile ? (
        <>
          <View style={styles.row}>
            <View style={styles.box}>
              <Text style={styles.boxValue}>{profile.firstName}</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.boxValue}>{profile.lastName}</Text>
            </View>
          </View>
          <View style={styles.emailBox}>
            <Text style={styles.boxValue}>{profile.email}</Text>
          </View>
          <View style={styles.genderContainer}>
            <Text style={styles.genderLabel}>Gender</Text>
            <View style={styles.genderOptions}>
              <TouchableOpacity
                style={[
                  styles.genderOption,
                  gender === 'Male' && styles.selectedOption
                ]}
                onPress={() => setGender('Male')}
              >
                <View style={[
                  styles.radioButton,
                  gender === 'Male' && styles.selectedRadioButton
                ]}>
                  {gender === 'Male' && <View style={styles.radioDot} />}
                </View>
                <Text style={styles.genderText}>Male</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.genderOption,
                  gender === 'Female' && styles.selectedOption
                ]}
                onPress={() => setGender('Female')}
              >
                <View style={[
                  styles.radioButton,
                  gender === 'Female' && styles.selectedRadioButton
                ]}>
                  {gender === 'Female' && <View style={styles.radioDot} />}
                </View>
                <Text style={styles.genderText}>Female</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      ) : (
        <Text style={styles.profileText}>No profile data available.</Text>
      )}
    </View>
  );
};

export default UserProfile;
