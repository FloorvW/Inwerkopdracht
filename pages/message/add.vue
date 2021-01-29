<template lang="pug">
  div.input-border
    input.input-field(
      type="text" 
      v-model="message")
    button.button--blue.input-field(
      @click='submitMessage') Submit message
    div 
      nuxt-link(
        to="/message/read") 
        a.button--blue.button-right Go to read
     
</template>

<script>
export default {
    data(){
        return {
            message: '',
        }
    },
    methods:{
        submitMessage(){
           this.$store.commit('addMessage', this.message);
        }
    }
}
</script>

<style lang="scss" scoped>
div.input-border {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}

.button-right{
    float: right;
    margin-top: 40px;
}
</style>