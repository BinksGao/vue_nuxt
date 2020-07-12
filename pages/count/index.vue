<template>
    <div>
        <p>{{$store.state.count}}</p>
        <button @click="$store.commit('add')">加</button>
        <hr>
        <p>{{$store.state.subcount.scount}}</p>
        <button @click="$store.commit('subcount/addScount')">加</button>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log(this.$store.state)
        },
    }
</script>

<style lang="scss" scoped>

</style>