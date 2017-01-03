<template>
  <div>
    <label for="">{{label}}</label>
    <input ref="input" type="date" v-bind:value="value" v-on:input="updateValue($event.target.value)" />
  </div>
</template>

<script>
  export default {
    // name: 'dateComp',
    props: ['label', 'value'],
    methods: {
      updateValue: function (value) {
        var formattedValue = value.trim();
        // remove whitespace on either slide
          // .trim()

        // Emit the number value through the input event
        this.$emit('input', formattedValue);
      }
    }
  };
</script>

<style scoped>

</style>
