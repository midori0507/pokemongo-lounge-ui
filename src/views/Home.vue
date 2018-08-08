<template>
  <div class="home">
    <Header></Header>
    <div class="home-container container">

    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {Footer, Header} from '@/components'
@Component({
  components: {
    Header,
    Footer,
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  &-container {
    flex: 1;
  }
}
</style>

