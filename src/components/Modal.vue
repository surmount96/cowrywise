<template>
    <div class="modal" v-if="Object.entries($store.state.photos.singleImage).length > 0">
        <div class="modal_close" @click="closeImage">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6L18.7742 18.7742" stroke="#EAEBEB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 18.7742L18.7742 5.99998" stroke="#EAEBEB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

        </div>
        <div class="modal_inner">
            <div class="modal_bg" :style="`background-image: linear-gradient(to right, rgba(0,0,0,.25),rgba(0,0,0,.25)),`">
                <img :src="$store.state.photos.singleImage.urls.regular" class="modal_bg-img"/>
            </div>
            <div class="modal_text modal_text_container">
                <p class="modal_text_primary">{{ $store.state.photos.singleImage.user.name }}</p>
                <p class="modal_text_secondary">{{ $store.state.photos.singleImage.user.location }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            result: this.$store.state.photos.singleImage
        };
    },
    methods: {
        closeImage() {
            this.$store.commit('photos/REMOVE_IMAGE');
        }
    },
}
</script>

<style lang="scss">

.modal {
    position:fixed;
    top:0;
    height: 100vh;
    width: 100%;
    background-image: linear-gradient(to right, rgba(137,137,137,.45),rgba(137,137,137,.45));
    z-index: 999;

    &_close{
        position:absolute;
        top:0;
        right:50px;
        cursor: pointer;
    }

    &_inner{
        height:90%;
        width:85%;
        background-color: #fff;
        margin: 2em auto;
        border-radius: var(--modal-border);
    }

    &_bg{
        border-radius: var(--modal-border) var(--modal-border) 0 0;
        background-size:cover;background-position: center top;background-repeat:no-repeat;

        &-img{
            object-fit: cover;
            width:100%;
            height:75vh;
            border-radius: var(--modal-border) var(--modal-border) 0 0;
        }
    }

    &_text{
        color:#000;

        &_container{
            padding: 20px 30px;
        }

        &_primary{
            color: #485873;
            line-height: 35px;
            font-size: 1.2em;
            font-weight: 800px;
        }

        &_secondary{
            color:#7C889B;
            font-size: .8em;
        }

    }
}

</style>