export default {
    methods: {
        async fetchAdmin() {
            await this.$axios.get('admin').then(res => {
                this.$auth.setUser(res.data.data)
            })
        }
    }
}