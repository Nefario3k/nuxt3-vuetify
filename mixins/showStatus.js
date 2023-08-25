export default {
    data() {
        return {
            permanent: false,
            reloadData: false,
            tableLoader: false,
            searchContents: false,
            loading: false,
        }
    },
    methods: {
        showError(res) {
            this.$showToast(
                {
                    absolute: false,
                    border: false,
                    svg: true,
                    header: "An Error Occured",
                    subtext: res ? res : "It seems an error occured from the server",
                    subtextColor: "#fff",
                    svgStroke: "var(--danger-color)",
                    svgType: "danger",
                    svgColor: "#fff",
                    color: "var(--danger-color)",
                    right: 14,
                    top: 77,
                }
            )
            this.permanent = false;
            this.tableLoader = false;
            this.loading = false;
            this.reloadData = false;
            this.searchContents = false;
            this.$loadingAnimation().finish();
        },
        showAuthError(res) {
            this.$showToast(
                {
                    absolute: false,
                    border: false,
                    svg: true,
                    header: "An Error Occured",
                    subtext: res ? res : "It seems an error occured from the server",
                    subtextColor: "#fff",
                    svgColor: "#fff",
                    svgStroke: "var(--danger-color)",
                    svgType: "danger",
                    color: "var(--danger-color)",
                    right: 21,
                    top: 21,
                }
            )
            this.loading = false;
            this.$loadingAnimation().finish();
        },
        showSuccess(res) {
            this.$showToast(
                {
                    header: "Success!",
                    svg: true,
                    subtext: res ? res : "Action carried out successfully",
                    svgStroke: "var(--green)",
                    svgType: "check",
                    color: "var(--green)",
                    right: 14,
                    top: 77,
                }
            )
            this.$loadingAnimation().finish();
        },
        showAuthSuccess(res) {
            this.$showToast(
                {
                    header: res ? res : "Success!",
                    subtext: false,
                    svg: true,
                    svgStroke: "var(--label-third-color)",
                    svgColor: "#FFD15D",
                    svgType: "check",
                    color: "var(--green)",
                    right: 21,
                    top: 21,
                }
            )
            this.$loadingAnimation().finish();
        },
        showAuthStatus(val) {
            this.$showToast(
                val
            )
            this.loading = false
            this.$loadingAnimation().finish();
        },
        showTableLoader() {
            this.tableLoader = !this.tableLoader;
        },
    }
}