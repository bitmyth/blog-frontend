<template>
    <div class="field">
        <label class="label">{{field}}</label>
        <div class="control has-icons-left has-icons-right">
            <input class="input" :type="type" :name="field" :class="computedClass(field)" :placeholder="`${field} input`"
                   v-model="form[field]">
        </div>
        <p class="help is-danger" v-if="form.errors.has(field)" v-text="form.errors.get(field)"></p>
    </div>
</template>
<script>
export default {
  props: ['field', 'form', 'type'],
  name: 'TextField',
  methods: {
    computedClass (field) {
      return {
        'is-danger': this.form.errors.has(field)
      }
    }
  }
}
</script>
