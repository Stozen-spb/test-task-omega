<template>
    <div @click.stop="isHidden = !isHidden" class="d-inline-block">
        <v-icon color="blue">{{ iconName }}</v-icon>
        {{ name }}
        <ul>
            <li
                :class="{ hidden: isHidden }"
                v-for="(item, index) in structure"
                :key="item.Code"
            >
                <Folder v-if="isFolder(item)" :structure="item" :name="index" />
                <File v-else :name="index" />
            </li>
            <li
                v-if="structure && structure.length === 0"
                :class="{ hidden: isHidden }"
            >
                Empty
            </li>
        </ul>
    </div>
</template>

<script>
import isFolder from '../../helpers/isFolder';
export default {
    name: 'Folder',
    props: ['structure', 'name'],
    data: () => {
        return {
            isHidden: true,
        };
    },
    methods: {
        isFolder: isFolder,
    },
    computed: {
        iconName() {
            return this.isHidden ? 'mdi-folder' : 'mdi-folder-open';
        },
    },
    beforeCreate: function () {
        this.$options.components.Folder = require('./Folder.vue').default;
        this.$options.components.File = require('./File.vue').default;
    },
};
</script>

<style lang="scss" scoped>
.hidden {
    display: none;
}
</style>
