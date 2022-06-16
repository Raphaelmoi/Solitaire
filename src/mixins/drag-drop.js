export const dragDropMixin = {
  data: function () {
    return {
      moved_item: {
        origin: null,
        destination: null,
        item: null,
      },
    };
  },
  created: () => {
    console.log('dragDropMixin --');
  },
  methods: {
    drag(value, origin) {
      this.moved_item.item = value;
      this.moved_item.origin = origin;

      console.log('drag start');
      console.log(this.moved_item);
      // ev.dataTransfer.setData('text', ev.target.id);
    },

    drop(destination) {
      // ev.preventDefault();
      // var data = ev.dataTransfer.getData('text');
      // ev.target.appendChild(document.getElementById(data));
      console.log('__ drop __');
      console.log(this.moved_item);
      // destination.push(this.moved_item.origin.pop());
      console.log(destination);
      // doit permettre mvt de l'array de depart vers celle de  destination +  l'objet concerné
      //  n'importe quelle carte peut aller sur une pile vide
      // sur une pile non vide doit etre de couleur differentes de la dernière carte + une valeur en dessous ex pour qPique -> autoriser Vcoeur

      // si 1ere carte de la pile non visible ----> permettre rotation au click ou controle automatique
    },

    allowDrop(ev) {
      ev.preventDefault();
      console.log('drop Allowed');
    },
  },
};
