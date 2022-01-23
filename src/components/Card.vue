<template>
    <div @click="showImage" :style="`background-image: linear-gradient(to right, rgba(0,0,0,.25),rgba(0,0,0,.25)), url(${result.urls.regular})`" style="background-size:cover;">
        <p> {{ result.user.name }}</p>
        <p> {{ result.user.location }}</p>
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