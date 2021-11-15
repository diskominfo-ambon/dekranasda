export default {
  computed: {
    endpoint() {
      return process.env.VUE_APP_ENDPOINT;
    }
  },
  methods: {
    increasePageView(url) {
      return fetch(process.env.VUE_APP_ENDPOINT_API + url, {
        method: 'POST'
      })
        .then(res => res.json());
    }
  },
  filters: {
    limit(str, end) {
      if (str.length > end) {
        return str.substr(0, end) + '....';
      }
    
      return str;
    }
  }
}