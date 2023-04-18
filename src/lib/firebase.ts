import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
	apiKey: 'AIzaSyBPmM0PJ8EF6AdkVn-RJKhB4-ZC7i466cM',
	authDomain: 'discord-clone-thing.firebaseapp.com',
	projectId: 'discord-clone-thing',
	storageBucket: 'discord-clone-thing.appspot.com',
	messagingSenderId: '650261803241',
	appId: '1:650261803241:web:bb75cdd808f55fd11f0078',
	measurementId: 'G-7P98Q1VFJ1'
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
