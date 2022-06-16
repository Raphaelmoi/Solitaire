<template>
  <a href="/">Accueil</a>

  <span>{{ cards_on_game.length }}</span>

  <div class="cardsStack">
    <card v-for="i in cards_on_game" :key="i" :value="i" />
    <div
      class="backwardCard card"
      @click="popCard"
      v-if="cards_on_game.length"
    ></div>

    <div v-else @click="resetInitialStack()">recommencer</div>
  </div>

  <div class="cardsStack visibleStack">
    <card v-for="i in visible_stack" :key="i" :value="i" />
  </div>

  <div class="board">
    <div
      v-for="(i, index) in columns_board"
      :key="index"
      class="boardColumn"
      @drop="drop(i)"
      @dragover="allowDrop"
    >
      <card
        v-for="(j, jndex) in i"
        :key="j"
        :value="j"
        :style="`top:${jndex * 10}px`"
        :origin="i"
      />
    </div>
  </div>

  <div class="grid"></div>
</template>
<script>
import card from './../components/card.vue';
import { cardsMixin } from './../mixins/cards';
// import { dragDropMixin } from './../mixins/drag-drop';

export default {
  components: {
    card,
  },
  mixins: [cardsMixin],
  data() {
    return {
      cards_on_game: [],
      visible_stack: [],
      columns_board: Array(7),
      // columns_board: Array(7).fill([]),
    };
  },
  created() {
    this.cards_on_game = this.set52CardsGame();
    this.hideCard(this.cards_on_game);
    this.shuffleCards(this.cards_on_game);

    this.buildSolitaire();
  },

  methods: {
    popCard() {
      this.visible_stack.push(this.cards_on_game.pop());
    },
    popCard2(origin, destination) {
      destination.push(origin.pop());
    },
    resetInitialStack() {
      this.cards_on_game = [...this.visible_stack];
      this.visible_stack = [];
    },

    buildSolitaire() {
      let cardPerCol = 1;
      for (let i = 0; i < this.columns_board.length; i++) {
        this.columns_board[i] = [];
        for (let j = 0; j < cardPerCol; j++) {
          this.columns_board[i].push(this.cards_on_game.pop());
        }
        cardPerCol++;
        this.columns_board[i][this.columns_board[i].length - 1].visible = true;
      }
    },
  },
};
</script>

<style>
.grid {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.cardsStack {
  position: relative;
  width: 150px;
  height: 150px;
  background: teal;
  perspective: 1000px;
}
.cardsStack > * {
  position: absolute;
  top: 0;
}
.backwardCard {
  position: absolute;
  z-index: 3;
  border: 2px #ccc solid;
}
.cardsStack.visibleStack {
  background: pink;
}
.board {
  background: lightblue;
  display: flex;
  height: 200px;
  width: 100%;
}
.boardColumn {
  width: 100px;
  height: 120px;
  background: white;
  position: relative;
  margin: 0.5em;
}
.boardColumn > * {
  position: absolute;
  /* top: 0; */
  left: 0;
}
</style>
