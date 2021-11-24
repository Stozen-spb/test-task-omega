<template>
    <v-app>
        <v-main>
            <Main />
        </v-main>
    </v-app>
</template>

<script>
import Main from './components/Main';
export default {
    name: 'App',

    components: {
        Main,
    },

    data: () => ({
        //
    }),
};
</script>

<style lang="sass" scoped>
#app
    background-color: #36383b
    color: #fff
    user-select: none
</style>
