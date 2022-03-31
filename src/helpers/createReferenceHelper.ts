import { firebase } from '@react-native-firebase/database';

export const createReferenceHelper = firebase
  .app()
  .database(
    'https://todolistfirebase-cb428-default-rtdb.europe-west1.firebasedatabase.app/',
  );
