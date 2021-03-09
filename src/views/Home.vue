<template>
  <div class="home">
      <Header/>
      <Avatar/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Avatar from '@/components/Avatar.vue'
export default {
  name: 'Home',
  components: {
    Header,
    Avatar
  }
}
</script>
