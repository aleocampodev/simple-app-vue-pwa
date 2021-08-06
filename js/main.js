const app = Vue.createApp({
  data() {
    return {
      title: "contador App - Vue",
      count: 0,
    };
  },
  methods: {
    modCount(instruction = "add", limit = 1) {
      if (instruction === "dis") this.count -= limit;
      else this.count += limit;
    },

    capitalizeText(str) {
      const primerCaracter = str.charAt(0).toUpperCase();
      const restodeCaracteres = str.slice(1, str.length);
      return primerCaracter + restodeCaracteres;
    },
  },
  computed: {
    capitalize() {
      let [primerCaracter, ...restodeCaracteres] = this.title;
      return primerCaracter.toUpperCase() + restodeCaracteres.join("");
    },
  },
});
