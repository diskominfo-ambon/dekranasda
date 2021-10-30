<template>
  <div>
    <img :src="require('~@/assets/img/not-found.png')" alt="Not Found"/>
    <!-- eslint-disable-next-line no-irregular-whitespace -->
    <h1>404 • Sudah sampai mana?</h1>
    <p>
      Jangan kemana-mana lagi yaa, kita balik aja yuk.  <router-link to="/" class="text-primary">Balik</router-link>
    </p>
  </div>
</template>

<style lang="scss" scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 500px;
  }

  h1 {
    font-weight: 700;
    font-size: 1.5rem;
    margin: 0;
  }
  p {
    font-size: 1.2rem;
    margin: 0;
    margin-top: .5rem;
  }
}
</style>