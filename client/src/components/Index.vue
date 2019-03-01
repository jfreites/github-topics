<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
      <p><a href="/#/topics">Search Github topics</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Frontend Test'
    }
  }
}
</script>
