<template>
    <div>
        <ValidationProvider :name="name" :rules="rule" :vid="vid">
            <div slot-scope="{ errors }">
                <input
                    class="input"
                    v-model="localValue"
                    :placeholder="example"
                    :name="name"
                    :type="type ? type : 'text'"
                    :class="errors[0] ? 'validation_err' : ''"
                    autocomplete="on"
                    :min="min"
                    :max="max"
                    v-on:keyup.enter="submit"
                />
                <div>
                    <p class="error_text" v-if="errors[0]">{{ errors[0] }}</p>
                    <p v-else>&nbsp;</p>
                </div>
            </div>
        </ValidationProvider>
    </div>
</template>

<script lang="ts">
// import { AsyncErrorHandle } from '@/abr/decorator';
import { Component, Vue, Emit, Prop } from "nuxt-property-decorator";

@Component({})
export default class validateEmail extends Vue {
    @Prop() public value!: string;
    @Prop() public name!: string;
    @Prop() public rule!: string;
    @Prop() public example?: string;
    @Prop() public type?: string;
    @Prop() public vid?: string;
    @Prop() public min?: string;
    @Prop() public max?: string;
    @Prop() public autocomplete?: string;
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

.input {
    width: 100%;
    background-color: $boundaryBlack;
    padding: 8px 2%;
    border-radius: 0;
}

.error_text {
    color: #eb6877;
    font-size: 10px;
    word-break: break-all;
}
</style>
