<template lang="pug">
  div
    h1 Counter: {{ count }}
    button.button--blue(
      @click="addNumber")
      strong Add 1
</template>

<script>
export default {
    data(){
        return{
            count: 0,
        }
    },
    methods:{
        addNumber(){
            this.count += 1;
        }
    }
}
</script>

<style lang="scss" scoped>
div{
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  width: 25%;
  border: 3px solid lightblue;
  padding: 10px;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

h1{
  margin-bottom: 2%;
  color: rgb(68, 150, 218);
}

button{
  font-size: 20px;
  background-color: white;
}
</style>

