<template lang="pug">
div
    h1 Messages:
    p(
        v-for="message in $store.state.messages" 
        :key="message.id") {{ message.msg }}
    nuxt-link(
        to="/message/add") 
        a.button--blue Go to add
    nuxt-link(
        to="/")
        a.button--blue Back to homepage
</template>

<style lang="scss" scoped>
div {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}

.button--blue{
    float: right;
    margin-top: 40px;
}

h1{
    margin-left: 10px;
}

p{
    margin: 10px;
}
</style>