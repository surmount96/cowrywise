<template>
    <div class="card" @click="showImage" :style="`background-image: linear-gradient(to right, rgba(0,0,0,.25),rgba(0,0,0,.25)), url(${result.urls.regular})`" style="background-size:cover;">
        <p class="card_primary"> {{ result.user.name }}</p>
        <p class="card_primary_2"> {{ result.user.location }}</p>
    </div>
</template>

<script>
export default {
    props:{
        result: {
            type:Object,
            required: true
        },
        id: {
            type:Number,
            required: true
        }
    },
    data() {
        return {

        };
    },
    methods: {
        showImage() {
            this.$store.commit('photos/FILTER_SINGLE_IMAGE', this.id);
        }
    },
}
</script>

<style lang="scss">
.card{
    &_primary{
        font-size:.9em;
        font-weight:500px;
        line-height:20px;

        &_2{
            font-size:.6em;
            font-weight:300px;
        }
    }

}
</style>