<template>
    <div>
        <div>{{ policyMast }}</div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "nuxt-property-decorator";
import { PolicyMast } from "iwashi_abr_1023/iwashiabr";

@Component({
    components: {}
})
export default class PlanListItem extends Vue {
    @Prop() public policyMast!: PolicyMast;
}
</script>
<style scoped lang="stylus"></style>
