import { firebase } from '@react-native-firebase/database';

export const createReferenceHelper = firebase
  .app()
  .database(
    'https://fir-2f0d3-default-rtdb.europe-west1.firebasedatabase.app/',
  );
