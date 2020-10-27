<template>
    <span>
        <validation-provider :name="name" :rules="rule">
            <span class="selectWrap" slot-scope="{ errors }">
                <select class="select" v-model="localValue">
                    <template v-for="data in localKV">
                        <app-select-box-list-item
                            :key="data.key"
                            :text="data.key"
                            :target="data.value"
                        ></app-select-box-list-item>
                    </template>
                </select>
                <span>{{ errors[0] }}</span>
            </span>
        </validation-provider>
    </span>
</template>
<script lang="ts">
// import { AsyncErrorHandle } from "@/abr/decorator";
import { Component, Vue, Prop, Emit } from "nuxt-property-decorator";
import { KeyValueObject } from "iwashi_abr_1023/iwashiabr";
// component
import AppSelectBoxListItem from "./ListItem.vue";

@Component({
    components: {
        AppSelectBoxListItem
    }
})
export default class AppSelectBoxList extends Vue {
    @Prop() public value!: string;
    @Prop() public name!: string;
    @Prop() public dataSets!: Array<KeyValueObject | string | number>;
    @Prop() public rule!: string;

    public get localKV(): KeyValueObject[] {
        return this.dataSets.map(item => {
            if (typeof item === "string" || typeof item === "number") {
                return {
                    key: (item as unknown) as string,
                    value: (item as unknown) as string
                };
            }
            return item;
        });
    }

    @Emit("input")
    public input(value: string) {}
    @Emit("change")
    public change() {}

    private get localValue(): string {
        return this.value;
    }

    private set localValue(value: string) {
        this.input(value);
        this.change();
    }
}
</script>

<style lang="stylus" scoped>
.select {
    border: $primaryColor solid 1px;
    border-radius: 5px;
    display: inline-block;
    font: inherit;
    // font-weight: bold;
    padding: 6px 45px 6px 20px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background: url('~assets/img/input/down_icon.svg'), linear-gradient(90deg, white 0%, white 60%, $primaryColor 50%, $primaryColor 100%);
    background-repeat: no-repeat;
    background-position: 90%;
    background-size: 25% 25%, 110% 100%;
    font-family: 'Noto Sans JP', 'Montserrat', sans-serif;
    cursor: pointer;
}
</style>
