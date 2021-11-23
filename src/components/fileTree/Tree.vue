<template>
    <div>
        <ul @click="isHidden = !isHidden">
            <li v-for="(item, index) in structure" :key="item.Code">
                <Folder v-if="isFolder(item)" :structure="item" :name="index" />
                <File v-else :name="index" />
            </li>
        </ul>
    </div>
</template>

<script>
import Folder from './Folder';
import File from './File';
import isFolder from '../../helpers/isFolder';

export default {
    props: ['structure'],
    data: () => {
        return {
            isHidden: false,
        };
    },
    methods: {
        isFolder: isFolder,
    },
    components: {
        Folder,
        File,
    },
};
</script>

<style lang="scss" scoped>
.hidden {
    display: none;
}
</style>
