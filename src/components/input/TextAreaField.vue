<template>
    <div class="field">
        <label class="label">{{field}}</label>
        <div class="control has-icons-left has-icons-right">
            <textarea class="textarea" :name="field" :class="computedClass(field)" v-model="form[field]">
            </textarea>
        </div>
        <p class="help is-danger" v-if="form.errors.has(field)" v-text="form.errors.get(field)"></p>
    </div>
</template>
<script>
export default {
  props: ['field', 'form'],
  name: 'TextAreaField',
  methods: {
    computedClass (field) {
      return {
        'is-danger': this.form.errors.has(field)
      }
    }
  }
}
</script>
