<script setup lang="ts">
import {ref} from "vue";

const value = ref("")
</script>
<template>
    <main class="flex flex-col justify-center  gap-4 w-[300px] fixed bottom-[100px] right-[50px]">
      <div class="">Hello</div>
      <div class="">Hello, how are you?</div>
      <n-input
          v-model:value="value"
          type="textarea"
          placeholder="Basic Textarea"
      />
      <n-button type="primary"> Send </n-button>
    </main>

</template>

