<template>
    <div class="list_item_container">
        <input
            class="app-radio-button-list-item"
            type="radio"
            :name="name"
            v-model="localValue"
            :value="target"
            :id="`${text}`"
        />
        <label :for="`${text}`">
            <div class="text">{{ text }}</div>
        </label>
    </div>
</template>
<script lang="ts">
// import { AsyncErrorHandle } from "@/abr/decorator";
import { Component, Vue, Prop, Emit } from "nuxt-property-decorator";

@Component({})
export default class AppRadioButtonListItem extends Vue {
    @Prop() public value!: string;
    @Prop() public text!: string;
    @Prop() public target!: string;
    @Prop() public name!: string;
    // @Prop() public description: string | undefined;

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
.list_item_container {
    display: flex;
    margin: 0 0 3px 0;
    align-items: center;

    .app-radio-button-list-item {
        width: 25px;
    }

    .text {
        @media only screen and (max-width: 1023px) {
            font-size: 12px;
        }
    }
}
</style>
