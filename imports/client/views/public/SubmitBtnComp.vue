<template>
  <div class="button" @click="handleClick">
    <span class="label">{{label}}</span>
  </div>
</template>

<script>
  export default {
    // name: 'submitBtnComp',
    props: ['label'],
    methods: {
      handleClick() {
        this.$emit('click', this);
      }
    }
  };
</script>
