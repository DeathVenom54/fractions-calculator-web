<template xmlns="http://www.w3.org/1999/html">
<div class="frac-input">
  <input type="number" @input="onType" v-model="numerator" class="input numerator" placeholder="numerator" ref="element">
  <hr>
  <input type="number" @input="onType" v-model="denominator" class="input denominator" placeholder="denominator" ref="element">
  <span class="error" v-if="error">{{error}}</span>
</div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {Fraction} from "../Fraction";

const emit = defineEmits(['fraction'])
emit('fraction', new Fraction(0,1))

const numerator = ref<number>(1)
const denominator = ref<number>(2)

const error = ref<string | undefined>()
const element = ref(null)

const onType = () => {
  emit('fraction', new Fraction(numerator.value || 0, denominator.value || 1))
}
</script>

<style lang="scss">
.frac-input {
  display: inline-flex;
  flex-direction: column;

  .error {
    color: darkred;
  }
}
</style>