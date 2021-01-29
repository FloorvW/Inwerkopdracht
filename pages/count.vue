<template lang="pug">
    div
        counter
        nuxt-link(
          to="/")
            a.button--blue Back to homepage
</template>

<style lang="scss" scoped>

a{
    display: flex;
    justify-content: center;
    text-decoration: none;
}

</style>