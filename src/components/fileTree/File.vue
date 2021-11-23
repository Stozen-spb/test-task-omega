<template>
    <div @click.stop="">
        <v-icon color="purple">mdi-file-multiple</v-icon> {{ name }}
    </div>
</template>

<script>
export default {
    name: 'File',
    props: ['structure', 'name'],
    data: () => {
        return {};
    },
};
</script>

<style lang="scss" scoped></style>
