<template>
<div class="calculator">
  <FractionInput @fraction="onFraction1" />
  <FractionInput @fraction="onFraction2" />
</div>
</template>

<script setup lang="ts">
import FractionInput from "./FractionInput.vue";
import {Fraction} from "../Fraction";
import {ref} from "vue";

const frac1 = ref<Fraction>(new Fraction(0, 1))
const frac2 = ref<Fraction>(new Fraction(0, 1))

const onFraction1 = (fraction: Fraction) => {
  frac1.value = fraction
}
const onFraction2 = (fraction: Fraction) => {
  frac2.value = fraction
}
</script>

<style lang="scss">

</style>