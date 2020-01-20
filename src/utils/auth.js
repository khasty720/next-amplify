import { Auth } from 'aws-amplify';

const signOut = async () => {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log(error);
  }
};

export { signOut };
