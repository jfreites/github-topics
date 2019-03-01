import Api from '@/services/Api'

export default {
    fetchTopics (search = '', page = 1, page_size = 5) {
        return Api().get(`topics?search=${search}&page=${page}&page_size=${page_size}`)
    }
}