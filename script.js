AFRAME.registerComponent ("color-toggle", {
  init : function () {
    // Event Listners
    let el = this.el;
    this.toggleColor = function () {
      el.setAttribute ("color","red");
      el.setAttribute("radius","1");
    }
    this.el.addEventListener ("click", this.toggleColor);
  },
  remove:function () {
    this.el.removeEventListener ("click", this.toggleColor);

  }
})