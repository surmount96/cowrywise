import apiService  from '../../config/apiService';

const state = {
    loading: false,
    results: []
};


const getters = {};

const mutations = {
    SAVE_IMAGES(state,data) {
        state.results = data;
    }
};

const actions = {
    async getImages({commit},params) {
        const resp = await apiService.fetchPhotos(params);
        commit('SAVE_IMAGES',resp.data.results);
        return true;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}