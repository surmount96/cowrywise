import apiService  from '../../config/apiService';

const state = {
    singleImage:{},
    results: []
};


const getters = {
    getResults(state) {
        return state.results.filter((item,index) => {
            if(index <= 5) {
              return item;
            }
          });;
    }
};

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