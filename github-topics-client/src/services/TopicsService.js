import Api from '@/services/Api'

export default {
    fetchTopics (search = '') {
        return Api().get(`topics?search=${search}`)
    }
}