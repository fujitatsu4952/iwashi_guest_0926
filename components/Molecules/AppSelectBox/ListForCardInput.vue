<template>
    <span>
        <validation-provider :name="name" :rules="rule">
            <span slot-scope="{ errors }">
                <select class="select_card" v-model="localValue">
                    <template v-for="data in localKV">
                        <app-select-box-list-item
                            :key="data.key"
                            :text="data.key"
                            :target="data.value"
                        ></app-select-box-list-item>
                    </template>
                </select>
                <p v-if="errors[0]">{{ errors[0] }}</p>
                <p v-else>&nbsp;</p>
            </span>
        </validation-provider>
    </span>
</template>
<script lang="ts">
// import { AsyncErrorHandle } from '@/abr/decorator';
import { Component, Vue, Prop, Emit } from "nuxt-property-decorator";
import { KeyValueObject } from "iwashi_abr_1023/iwashiabr";
// component
import AppSelectBoxListItem from "./ListItem.vue";
// mixins
import List from "./List.vue";

@Component({
    components: {
        AppSelectBoxListItem
    },
    mixins: [List]
})
export default class AppSelectBoxListForCardInput extends Vue {}
</script>

<style lang="stylus" scoped>
.select_card {
    border: none;
    width: 100%;
    background-color: $sectionBackgroundColor;
}

p {
    word-break: break-all;
}
</style>
