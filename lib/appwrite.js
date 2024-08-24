import { ID, Account, Client, Avatars, Databases } from 'react-native-appwrite';

export const appWriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.jsm.aoraandroid',
    projectId: '66c9f9d700066d2ca2b6',
    databaseId: '66c9fc02003c71204663',
    userCollectionId: '66c9fc42001e6a068e76',
    videoCollectionId: '66c9fc70001f58599019',
    storageId: '66c9ff5a001c33c15970'
}

const client = new Client();

client
    .setEndpoint(appWriteConfig.endpoint) 
    .setProject(appWriteConfig.projectId)
    .setPlatform(appWriteConfig.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        );
        
        if (!newAccount) throw new Error('Account creation failed');

        const avatarUrl = avatars.getInitials(username);

        await SignIn(email, password);

        const newUser = await databases.createDocument(
            appWriteConfig.databaseId,
            appWriteConfig.userCollectionId,
            ID.unique(), 
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl,
            }
        );

        return newUser; 
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};

export async function SignIn(email, password) {
    try {
        const session = await account.createEmailPasswordSession(email, password); // Fixed missing arguments
        return session;
    } catch (error) {
        throw new Error(error);
    }
}
