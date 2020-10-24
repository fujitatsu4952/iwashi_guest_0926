<template>
    <div>
        <ValidationProvider :name="name" :rules="rule">
            <div slot-scope="{ errors }">
                <textarea
                    v-model="localValue"
                    :placeholder="example"
                ></textarea>
                <p>{{ errors[0] }}</p>
            </div>
        </ValidationProvider>
    </div>
</template>

<script lang="ts">
// import { AsyncErrorHandle } from '@/abr/decorator';
import { Component, Vue, Emit, Prop } from "nuxt-property-decorator";

@Component({})
export default class AppInputTextarea extends Vue {
    @Prop() public value!: string;
    @Prop() public name!: string;
    @Prop() public rule!: string;
    @Prop() public example?: string;

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
