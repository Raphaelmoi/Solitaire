<template>
  <div class="card" draggable="true" @dragstart="drag(value, origin)">
    <div :style="'border : 2px solid ' + value.col">
      <div>
        {{ value.name }}
        <br />
        {{ value.fam }}
      </div>
    </div>
  </div>
</template>
<script>
// import { dragDropMixin } from './../mixins/drag-drop';

export default {
  name: 'card',
  props: {
    value: Object,
    origin: Object,
  },
  // mixins: [dragDropMixin],

  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  width: 80px;
  height: 120px;
  /* background: #ccc; */
  background: url('https://www.avecpassion.fr/27673-thickbox_default/papier-tassotti-motifs-liberty-carte-a-jouer.jpg')
    no-repeat;
  background-size: cover;
  border-radius: 1em;
  margin: 0.5em;
}
.card > div {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #eee;
  z-index: 1;
}
</style>
