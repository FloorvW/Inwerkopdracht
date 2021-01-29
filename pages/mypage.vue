<template lang="pug">
    div
      h1 Hello World!
      p This is a page in nuxt!
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
  text-align: center;
}

</style>