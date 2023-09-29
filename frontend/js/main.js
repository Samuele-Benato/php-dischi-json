const { createApp } = Vue;

createApp({
  data() {
    return {
      axios,
      dischi: [],
    };
  },

  mounted() {
    axios
      .get("http://localhost/php-dischi-json/backend/store.php")
      .then((response) => {
        this.dischi = response.data;
      });
  },
}).mount("#app");
