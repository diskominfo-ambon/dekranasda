export default {
  computed: {
    endpoint() {
      return process.env.VUE_APP_ENDPOINT;
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