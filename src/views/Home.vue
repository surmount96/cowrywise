<template>
  <div class="home">
    <header class="bg-gray h-40 flex items-center justify-center">
      <div class="flex items-center w-full justify-center" v-show="!loading">
        <svg width="15" class="-mr-4" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z" stroke="#57667F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22 22L18 18" stroke="#57667F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <input type="text" v-model="search" @change="fetchSearch" class="home_input" placeholder="Search for photo">
      </div>
      <div v-show="loading">
        <h4>Searching for "{{ this.search }}"</h4>
      </div>
    </header>
  
    <loading v-if="loading"/>
    <main class="grid -mt-10 mb-4" v-else > 
      <div v-for="(result,index) in this.$store.state.photos.results" :key="result.id" v-if="index <= 5 ">
          <card :result="result"/>
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Loading from '@/components/Loading.vue'
import Card from '@/components/Card.vue'

export default {
  name: 'Home',
  data() {
    return {
      loading:false,
    };
  },
  async created() {
    await this.fetchSearch();
  },
  methods:{
    async fetchSearch() {
      this.loading = true;
      let search = this.search ? this.search : 'african';
      const res = await this.$store.dispatch('photos/getImages',search);
      if(res) {
        this.loading = false;
      }
    }
  },
  components: {
    Loading, Card
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
  &_input{
    border:none;
    width:80%;
    padding: 15px 40px;
    border-radius: 5px;
    font-size: .8em;
    &:focus{
      outline: none;
    }
  }
}
</style>