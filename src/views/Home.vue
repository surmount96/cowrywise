<template>
  <div class="home">
    <header class="bg-gray h-40 flex items-center" :class="{'justify-center' : $store.state.photos.results.length > 0 && !search}">
      <div class="flex items-center w-full justify-center" v-if="!searchState">
        <svg width="15" class="-mr-4" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z" stroke="#57667F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22 22L18 18" stroke="#57667F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <input type="text" v-model="search" @keydown.enter="fetchSearch" class="home_input" placeholder="Search for photo">
      </div>
      
      <div class="home_text flex justify-between " v-if="searchState">
        <h4>
          {{ !loading && $store.state.photos.results.length == 0 ? 'No': '' }}
          {{ searchMessage  }}
        </h4>
        <div class="home_text-close" @click="closeSearch" title="Close search">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L18.7742 18.7742" stroke="#14142B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 18.7742L18.7742 5.99998" stroke="#14142B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </header>
    <loading v-if="loading"/>
    <main class="grid -mt-10 mb-4" v-else > 
      <div v-for="(result,index) in filterResults" :key="result.id">
          <card :result="result" :id="index"/>
      </div>
    </main>
    <modal />
  </div>
</template>

<script>
// @ is an alias to /src
import Loading from '@/components/Loading.vue'
import Card from '@/components/Card.vue';
import Modal from '@/components/Modal.vue';

export default {
  name: 'Home',
  data() {
    return {
      loading:false,
      searchState:false,
      searchMessage: '',
      search:'',
    };
  },
  async created() {
    await this.fetchSearch();
  },
  computed:{
    filterResults() {
      return this.$store.state.photos.results.filter((item,index) => {
        if(index <= 5) {
          return item;
        }
      });
    }
  },
  methods:{
    async fetchSearch() {
      this.loading = true;
      this.searchMessage = `Searching for "${this.capitalize(this.search)}"`;
      if (this.search) this.searchState = true;
      let search = this.search ? this.search : 'african';
      const res = await this.$store.dispatch('photos/getImages',search);
      if(res) {
        this.searchMessage = `Search Results for "${this.capitalize(this.search)}"`;
        this.loading = false;
      }
    },
    capitalize(value) {
      if(!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    closeSearch() {
      this.searchState = false;
    }
  },
  components: {
    Loading, Card, Modal
  }
}
</script>

<style lang="scss">
.w-full{
  width: 100%;
}
.-mr-4{
  margin-right: -30px;
  z-index: 90;
}
.home{
  min-height: 100vh;

  &_text{
    font-size:1.6em;
    width:60%;
    margin:0 auto;
    position: relative;

    &-close{
      position: absolute;
      top:-10px;
      left:-30px;
      cursor: pointer;
    }
  }
  &_input{
    border:none;
    width:80%;
    padding: 15px 40px;
    border-radius: 5px;
    font-size: .8em;
    box-shadow: 2px 2px 5px #ccc;
    &:focus{
      outline: none;
    }
  }
}
</style>