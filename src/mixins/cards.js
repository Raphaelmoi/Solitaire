export const cardsMixin = {
  data: function () {
    return {
      family: [
        { id: 1, name: 'coeur', col: 'red' },
        { id: 2, name: 'carreau', col: 'red' },
        { id: 3, name: 'pique', col: 'black' },
        { id: 4, name: 'trefle', col: 'black' },
      ],
      cards: [
        {
          id: 1,
          name: 'As',
          img: '',
          visible: false,
        },
        {
          id: 2,
          name: '2',
          img: '',
          visible: false,
        },
        {
          id: 3,
          name: '3',
          img: '',
          visible: false,
        },
        {
          id: 4,
          name: '4',
          img: '',
          visible: false,
        },
        {
          id: 5,
          name: '5',
          img: '',
          visible: false,
        },
        {
          id: 6,
          name: '6',
          img: '',
          visible: false,
        },
        {
          id: 7,
          name: '7',
          img: '',
          visible: false,
        },
        {
          id: 8,
          name: '8',
          img: '',
          visible: false,
        },
        {
          id: 9,
          name: '9',
          img: '',
          visible: false,
        },
        {
          id: 10,
          name: '10',
          img: '',
          visible: false,
        },
        {
          id: 11,
          name: 'Valet',
          img: '',
          visible: false,
        },
        {
          id: 12,
          name: 'Dame',
          img: '',
          visible: false,
        },
        {
          id: 13,
          name: 'Roi',
          img: '',
          visible: false,
        },
      ],
    };
  },

  methods: {
    hideCard() {},
    set52CardsGame() {
      let fg = [];
      this.family.forEach((el) => {
        this.cards.forEach((x) => {
          const t = JSON.parse(JSON.stringify(x));
          t.col = el.col;
          t.fam = el.name;
          t.fam_id = el.id;
          fg.push(t);
        });
      });
      return fg;
    },

    shuffleCards(array) {
      let currentIndex = array.length,
        randomIndex;
      // While there remain elements to shuffle.
      while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array;
    },
  },
};
