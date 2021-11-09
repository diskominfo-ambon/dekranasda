export default {
  filters: {
    limit(str, end) {
      if (str.length > end) {
        return str.substr(0, end) + '....';
      }
    
      return str;
    }
  }
}