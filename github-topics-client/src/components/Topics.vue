<template>
    <div class="section">
        <h2 class="is-size-4">Latest topics from <em>Github</em></h2>
        <div class="container">

          <div class="field has-addons">
            <div class="control is-expanded">
              <input v-model="search" type="text" class="input" placeholder="search by topic...">
            </div>
            <div class="control">
              <a class="button is-dark" @click="performSearch()">
                Search
              </a>
            </div>
          </div>

          <div v-if="loading">
            <p>Loading</p>
          </div>
          <div v-else>
            <div class="box" v-for="topic in topics">
              <h3>{{ topic.name }}</h3>
              <p>{{ topic.short_description || '(No short description)' }}</p>
              <div class="field is-grouped is-grouped-centered">
                <div class="control">
                  <button class="button is-dark" @click="seeDescription(topic.name)">read more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import TopicsService from '@/services/TopicsService'
export default {
  name: 'topics',
  data () {
    return {
      loading: false,
      search: '',
      topics: []
    }
  },
  methods: {
    async performSearch () {
      this.loading = true
      const response = await TopicsService.fetchTopics(this.search)
      this.loading = false
      this.topics = response.data.items
    }
  }
}
</script>

<style scoped>
h3 {
  font-size: 25px;
  color: #ecb931;
}
</style>
