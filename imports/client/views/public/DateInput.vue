<template>
  <div v-show="isVisible">
    <label v-if="label" v-bind:class="cssTextInputLabel">
      {{ label }}
    </label>

    <input type="text"
      v-mask="'##/##/####'"
      placeholder="mm/dd/yyyy"
      v-bind:class="cssTextInput"
      v-bind:value="value"
      v-on:input="onInputChange"
      v-bind:disabled="isDisabled">
    </input>

    <h4>{{ errorMessage }}</h4>
  </div>
</template>

<script>
  export default {
    name: 'date-input',
    props: {
      value: {
        type: String,
        default: ''
      },
      label: {
        type: String,
        default: ''
      },
      isVisible: {
        type: Boolean,
        default: true
      },
      isDisabled: {
        type: Boolean,
        default: false
      }
    },
    data: () => ({
      inputValue: '',
      errorMessage: '',
      cssTextInputLabel: 'cssTextInputLabel',
      cssTextInput: 'cssTextInput'
    }),
    methods: {
      onInputChange: function (event) { // called whenever we change/type-into the input
        this.inputValue = event.target.value;
        console.log('input value: ', this.inputValue);
        this.$emit('onInputChange', this.inputValue);
      }
    }
  }
</script>

<style scoped>
  .cssTextInput {
    border: 4px solid #5a6673;
    height: 38px;
    width: 100%;
    margin: 5px;
    padding: 6px 10px;
    background-color: #fff;
    box-shadow: none;
    box-sizing: border-box;
    line-height: normal;
    font-size: 16px;
    font-weight: 500;
    font-family: "Avenir Next", "Helvetica Neue", Helvetica, Arial;
  }
  .cssTextInputLabel {
    font-family: "Avenir Next", "Helvetica Neue", Helvetica, Arial;
    display: block;
    width: 100%;
    margin: 0px 0px 0px 10px;
    align-items: center;
    justify-content: flex-start;
    font-size: 14px;
    line-height: 1.3;
    color: #3e3c42;
    max-width: 100%;
    font-weight: bold;
  }
</style>
