<template>
  <div v-show="isVisible">
    <label v-if="label" v-bind:class="cssChkbInputSingleLabel">
      {{ label }}
    </label>

    <input type="checkbox"
      v-bind:class="cssChkbInputSingle"
      v-bind:value="ckbs"
      v-bind:disabled="isDisabled"
      v-on:click="onCheckboxInputChanged"
      />
  </div>
</template>

<script>
  export default {
    name: 'checkbox-input-single',
    props: {
      ckbs: {
        type: Boolean,
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
      checkboxValue: '',
      cssChkbInputSingle: 'chkb-input-single',
      cssChkbInputSingleLabel: 'chkb-input-single-label'
    }),

    methods: {
      onCheckboxInputChanged: function (event) {
        this.checkboxValue = event.target.checked;
        console.log('checkbox value: ', event.target.checked);
        this.$emit('onCheckboxInputChanged', this.checkboxValue);
      }
    },

    mounted: function () {
    },

    computed: {
    },
  };
</script>

<style scoped>
  .chkb-input-single {

  }
  .chkb-input-single-label {

  }
</style>
