<template>
    <div class="list_container">
        <ValidationProvider :name="name" :rules="rule">
            <div slot-scope="{ errors }">
                <div
                    class="item_container"
                    v-for="(data, idx) in dataSets"
                    :key="idx"
                >
                    <app-radio-button-list-item
                        class="item"
                        v-model="localValue"
                        :text="data"
                        :target="data"
                        :name="name"
                    ></app-radio-button-list-item>
                </div>
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
import AppRadioButtonListItem from "./ListItem.vue";

@Component({
    components: {
        AppRadioButtonListItem
    }
})
export default class AppRadioButtonList extends Vue {
    @Prop() public value!: string;
    @Prop() public name!: string;
    @Prop() public dataSets!: string[];
    @Prop() public rule!: string;

    @Emit("input")
    public input(value: string) {}

    private get localValue(): string {
        return this.value;
    }

    private set localValue(value: string) {
        this.input(value);
    }
}
</script>
<style lang="stylus" scoped>
.list_container {
    .item_container {
        display: inline-block;
        padding: 0 10px 0 0;

        @media only screen and (max-width: 1023px) {
            display: block;
        }

        .item {
        }
    }
}
</style>
