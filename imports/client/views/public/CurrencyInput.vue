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
    name: 'currency-input',
    props: {
      value: {
        type: Number,
        default: 0
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
        // consider using accounting.js here
        var result = currencyValidator.parse(value, this.value)
        if (result.warning) {
          this.$refs.input.value = result.value
        }
        this.$emit('input', result.value)
      },
      formatValue: function () {
        this.$refs.input.value = currencyValidator.format(this.value)
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

  var currencyValidator = {
    format: function (number) {
      return (Math.trunc(number * 100) / 100).toFixed(2)
    },
    parse: function (newString, oldNumber) {
      var CleanParse = function (value) {
        return { value: value }
      }
      var CurrencyWarning = function (warning, value) {
        return {
          warning: warning,
          value: value,
          attempt: newString
        }
      }
      var NotAValidDollarAmountWarning = function (value) {
        return new CurrencyWarning(newString + ' is not a valid dollar amount', value)
      }
      var AutomaticConversionWarning = function (value) {
        return new CurrencyWarning(newString + ' was automatically converted to ' + value, value)
      }

      var newNumber = Number(newString)
      var indexOfDot = newString.indexOf('.')
      var indexOfE = newString.indexOf('e')

      if (isNaN(newNumber)) {
        if (
          indexOfDot === -1 &&
          indexOfE > 0 &&
          indexOfE === newString.length - 1 &&
          Number(newString.slice(0, indexOfE)) !== 0
        ) {
          return new CleanParse(oldNumber)
        } else {
          return new NotAValidDollarAmountWarning(oldNumber)
        }
      }

      var newCurrencyString = currencyValidator.format(newNumber)
      var newCurrencyNumber = Number(newCurrencyString)

      if (newCurrencyNumber === newNumber) {
        if (indexOfE !== -1 && indexOfE === newString.length - 2) {
          return new AutomaticConversionWarning(newNumber)
        } else {
          return new CleanParse(newNumber)
        }
      } else {
        return new NotAValidDollarAmountWarning(
          newNumber > newCurrencyNumber
            ? newCurrencyNumber
            : oldNumber
        )
      }
    }
  }
</script>

<style scoped>

</style>
