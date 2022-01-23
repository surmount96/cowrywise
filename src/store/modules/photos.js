import apiService  from '../../config/apiService';

const state = {
    loading: false,
    singleImage:{},
    results: []
};


const getters = {};

const mutations = {
    SAVE_IMAGES(state,data) {
        state.results = data;
    },
    FILTER_SINGLE_IMAGE(state,id) {
        state.singleImage = state.results[id];
    },
    REMOVE_IMAGE(state) {
        state.singleImage = {};
    },
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