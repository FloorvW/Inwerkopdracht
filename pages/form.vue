<template lang="pug">
  div
    h1 Form
    form(ref="form" @submit.prevent="submitForm")
      input.input-field(
        type="text" 
        placeholder="name" 
        name="name")
      input.input-field(
        type="text" 
        placeholder="lastName" 
        name="lastName")
      input.input-field(
        type="text"  
        placeholder="age" 
        name="age")
      input.button--blue(
        type="submit")

    div.data 
      p(
        v-for="data in $store.state.storedFormData" 
        :key="data.id")
        strong {{ data.echo.name }} {{ data.echo.lastName }}
      p(
        v-for="data in $store.state.storedFormData" 
        :key="data.id")
        strong {{ data.echo.age }}
    nuxt-link(
      to="/")
      a.button--blue Back to homepage
</template>

<script>
export default {
  data() {
    return {
      name: "",
      lastName: "",
      age: "",
    };
  },

  methods:{
    submitForm(){
      var vm = this,
          formData= new FormData(vm.$refs.form)
      let tempJsonObject = {};
      
      for (const [key, value]  of formData.entries()) {
        tempJsonObject[key] = value;
      }
      let jsonObject = {}
      jsonObject['echo']=tempJsonObject
      console.log(jsonObject)
      this.$store.dispatch("echo", jsonObject)
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}

.data{
    margin-top: 20px;
}

.button--blue{
  margin-left: 5px;
  
}

form{
    margin-top: 20px;
}

</style>