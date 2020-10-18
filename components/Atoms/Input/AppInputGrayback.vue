<template>
    <div class="input_gray_back_container">
        <input
            class="input_gray_back"
            v-model="localValue"
            :placeholder="example"
            v-on:keyup.enter="submit"
        />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "nuxt-property-decorator";
//component

@Component({})
export default class AppInputGrayBack extends Vue {
    @Prop() public value!: string;
    @Prop() public example?: string;
    @Emit()
    public submit() {}
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
.input_gray_back_container {
    .input_gray_back {
        width: 190px;
        background-color: $boundaryBlack;
        padding: 8px 15px;

        &::placeholder {
            color: white;
        }
    }
}
</style>
