import apiInstance from './apiInstance';
class apiService {
    async fetchPhotos(query) {
        const token = process.env.VUE_APP_TOKEN;
        return await apiInstance.get(`search/photos?client_id=${token}&query=${query}`);
    }
}

const instance = new apiService();

export default instance;