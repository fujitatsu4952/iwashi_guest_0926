<template>
    <div class="list_container">
        <ValidationProvider :name="name" :rules="rule">
            <div slot-scope="{ errors }">
                <template class="item_container" v-for="data in localKV">
                    <app-check-box-list-item
                        :key="data.key"
                        v-model="localValue"
                        :text="data.key"
                        :target="data.value"
                        :name="name"
                    ></app-check-box-list-item>
                </template>
                <p>{{ errors[0] }}</p>
            </div>
        </ValidationProvider>
    </div>
</template>
<script lang="ts">
// import { AsyncErrorHandle } from "@/abr/decorator";
import { Component, Vue, Prop, Emit } from "nuxt-property-decorator";
import { KeyValueObject } from "iwashi_abr_1023/iwashiabr";
// component
import AppCheckBoxListItem from "./ListItem.vue";

@Component({
    components: {
        AppCheckBoxListItem
    }
})
export default class AppCheckBoxList extends Vue {
    @Prop() public value!: string[];
    @Prop() public name!: string;
    @Prop() public dataSets!: Array<KeyValueObject | string | number>;
    @Prop() public rule!: string;

    public get localKV(): KeyValueObject[] {
        return this.dataSets.map(item => {
            if (typeof item === "string" || typeof item === "number") {
                return {
                    key: item.toString(),
                    value: (item as unknown) as string
                };
            }
            return item;
        });
    }

    @Emit("input")
    public input(value: string[]) {}

    private get localValue(): string[] {
        return this.value;
    }

    private set localValue(value: string[]) {
        this.input(value);
    }
}
</script>
<style lang="stylus" scoped>
.list_container {
    .item_container {
        display: flex;

        .item {
        }
    }
}
</style>
