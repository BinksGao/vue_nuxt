<template>
    <div>
        <h2>Home Page</h2>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log(111)
            this.$myInjectedFunction('test')
        },
    }
</script>

<style lang="scss" scoped>

</style>