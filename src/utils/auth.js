import { Auth } from 'aws-amplify';

const signOut = async () => {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log('Auth Error: ', error);
  }
};

export { signOut };
