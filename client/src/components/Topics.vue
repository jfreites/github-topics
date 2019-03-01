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
            <p>Loading...</p>
          </div>
          <div v-else>
            <div class="box" v-for="topic in topics">
              <h3>{{ topic.name }}</h3>
              <p class="description">{{ topic.description || '(No description)' }}</p>
            </div>

            <div class="box" v-if="paginate">
              <nav class="pagination" role="navigation" aria-label="pagination">
                <a class="pagination-previous" @click="prevPage()" :disabled="disabledPrev">Previous</a>
                <a class="pagination-next" @click="nextPage()">Next page</a>
              </nav>
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
      topics: [],
      currentPage: 1
    }
  },
  computed: {
    paginate () {
      return this.topics.length > 0 || false
    },
    disabledPrev () {
      return this.currentPage == 1 || false
    }
  },
  methods: {
    async performSearch (page = 1) {
      this.loading = true
      const response = await TopicsService.fetchTopics(this.search, page)
      this.loading = false
      this.topics = response.data.items
      this.links = response.data.links
    },
    nextPage () {
      this.currentPage = this.links.next.page
      this.performSearch(this.currentPage)
    },
    prevPage () {
      this.currentPage = this.links.prev.page
      this.performSearch(this.currentPage)
    }
  }
}
</script>

<style scoped>
h3 {
  font-size: 25px;
  color: #ecb931;
}
.description {
  text-align: justify;
}
</style>
