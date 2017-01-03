<template>
  <div>
    <label fv-if="label">{{ label }}</label>
    <input
      ref="input"
      v-bind:value="value"
      v-on:input="updateValue($event.target.value)"
      v-on:focus="selectAll"
      v-on:blur="formatValue" />
  </div>
</template>

<script>
  export default {
    name: 'text-input',
    props: {
      value: {
        type: String,
        default: ''
      },
      label: {
        type: String,
        default: ''
      }
    },

    mounted: function () {
      this.formatValue()
    },

    methods: {
      updateValue: function (value) {
        var formattedValue = value.trim();
        this.$emit('input', formattedValue);
      },
      formatValue: function () {
        this.$refs.input.value = this.value;
      },
      selectAll: function (event) {
        // Workaround for Safari bug
        // http://stackoverflow.com/questions/1269722/selecting-text-on-focus-using-jquery-not-working-in-safari-and-chrome
        setTimeout(function () {
        	event.target.select()
        }, 0)
      }
    }
  };
</script>

<style scoped>

</style>
