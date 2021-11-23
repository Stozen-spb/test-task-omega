<template>
    <div>
        <v-container>
            <v-row class="text-left">
                <v-col cols="md-6"><Tree :structure="structure" /></v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import fileStructure from '../jsons/projectTree.json';
import Tree from './fileTree/Tree';
//console.log(fileStructure);
export default {
    name: 'MainComponent',
    data: () => {
        return { structure: fileStructure };
    },
    components: {
        Tree,
    },
};
</script>

<style lang="sass" scoped></style>
