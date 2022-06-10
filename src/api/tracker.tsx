import axios from 'axios';
import  AsyncStorage  from '@react-native-async-storage/async-storage'

const instance =  axios.create({
    baseURL: 'http://localhost:3000'
});

instance.interceptors.request.use(
    async ( config ) => { 
        const token = await AsyncStorage.getItem('token');
        if( token ){
            if(config.headers === undefined) config.headers = {};
            config.headers.Authorization = `Bearer ${token}`; 
        } 
        return config;
    },
    ( err ) => { return Promise.reject( err ) }
);


export default instance;