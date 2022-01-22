<template>
 
    <div :style="`background-image: url(${result.urls.regular})`" style="background-size:cover;">
        <p> {{ result.user.name }}</p>
        <p> {{ result.user.location }}</p>
    </div>

</template>

<script>
export default {
    props:{
        result: {
            type:Object,
        }
    },
    data() {
        return {

        };
    }
}
</script>