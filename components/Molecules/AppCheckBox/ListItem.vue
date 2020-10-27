<template>
    <div class="list_item_container">
        <input
            class="app-check-button-list-item"
            type="checkbox"
            :name="name"
            :value="target"
            v-model="localValue"
            :id="`${text}`"
        />
        <label :for="`${text}`">
            <div class="text" for="sample_checkbox">{{ text }}</div>
        </label>
        <div v-if="description">{{ description }}</div>
    </div>
</template>
<script lang="ts">
// import { AsyncErrorHandle } from "@/abr/decorator";
import { Component, Vue, Prop, Emit } from "nuxt-property-decorator";

@Component({})
export default class AppCheckBoxListItem extends Vue {
    @Prop() public value!: string[];
    @Prop() public text!: string;
    @Prop() public target!: string;
    @Prop() public name!: string;
    @Prop() public description: string | undefined;

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
.list_item_container {
    display: flex;
    margin: 0 0 3px 0;
    align-items: center;

    .app-check-button-list-item {
        width: 25px;
    }

    .text {
        @media only screen and (max-width: 1023px) {
            font-size: 12px;
        }
    }
}
</style>
