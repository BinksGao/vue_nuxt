<template>
    <div>
        <h2>商品详情页</h2>
        {{detail.price}}
        {{detail.description}}
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
            return axios.get('/data/test.json').then(res => {
               context.app.myInjectedFunction('ctx!')
                return {
                    detail: res.data
                }
            })
        },
    }
</script>

<style lang="scss" scoped>

</style>