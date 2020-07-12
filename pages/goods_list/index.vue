<template>
    <div>
        <h2>商品列表</h2>
        <ul>
            <li v-for="item of list" :key="item.id">
                <nuxt-link :to="'/detail/' + item.id">{{item.name}}</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [
                    {
                        id: 1,
                        name: 'ihpone',
                        price: 1000
                    },
                    {
                        id: 2,
                        name: 'ihpone2',
                        price: 2000
                    },
                    {
                        id: 3,
                        name: 'ihpone3',
                        price: 3000
                    },
                    {
                        id: 4,
                        name: 'ihpone4',
                        price: 4000
                    }
                ]
            }
        },
        asyncData(context) {
            context.app.myInjectedFunction('ctx!') 
        },
    }
</script>

<style lang="scss" scoped>

</style>