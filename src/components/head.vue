<template>
    <div class="mhead">
        <img :src="userInfo.userHead" class="userHead" @click="showUserPanel">
        <p class="searchBar" @click="$router.push('/search')">
            <i class="fa fa-search"></i>
            <span>搜索</span>
        </p>
        <!--<div class="addBox" v-if="pageType=='message'">-->
            <!--+-->
        <!--</div>-->
        <!--<div class="addFriend" v-else-if="pageType=='friend'">-->
            <!--添加-->
        <!--</div>-->
        <!--<div class="fa fa-th-large" v-else-if="pageType=='dynamic'"></div>-->
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "mhead",
        props:['pageType','placeholder'],
        computed:{
            ...mapGetters(['userInfo'])
        },
        data(){
            return {

            }
        },
        methods:{
            showUserPanel(){
                this.$store.commit('SET_USER_PANEL',true);
                this.$store.commit('SET_MASK',true);
            }
        }
    }
</script>

<style scoped lang="scss">
    .mhead {
        height: .6rem;
        background: linear-gradient(to right, #5d8cfe 0%, #57b8fd 100%);
        padding: 0 .1rem;
        display: flex;
        align-items: center;
        position:absolute;
        top:0;
        left:0;
        width:100%;
        z-index:500;
        img.userHead {
            height: .38rem;
            border-radius: 50%;

        }
        .searchBar {
            height: .3rem;
            width: calc(100% - .6rem);
            border-radius: .03rem;
            background: linear-gradient(to right, #4884f2 0%, #4aa7f4 100%);
            margin-left: .12rem;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding-left: .08rem;
            i {
                color: #76aafe;
                font-size: .16rem;
                margin-right: .05rem;
            }
            span {
                font-size: .15rem;
                color: #76aafe;
            }
        }
        .addBox{
            font-size: .36rem;
            color: #fff;
            margin-left: .14rem;
            position:relative;
            top:-0.05rem;
        }
        .addFriend{
            font-size:.16rem;
            color:#fff;
            margin-left: .14rem;
        }
        .fa-th-large{
            font-size:.22rem;
            color:#fff;
            margin-left: .14rem;
        }
    }
</style>
