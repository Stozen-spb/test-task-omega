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

<style scoped>
@import './assets/css/style.css';

#app {
    background-color: #36383b;
    color: #fff;
    user-select: none;
}
</style>
