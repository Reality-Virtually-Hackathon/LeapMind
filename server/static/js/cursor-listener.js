// Component to change to a sequential color on click.
AFRAME.registerComponent('cursor-listener', {
  init: function () {
    var lastIndex = -1;
    console.log('I was clicked at');
    var COLORS = ['red', 'green', 'blue'];
    this.el.addEventListener('click', function (evt) {
      lastIndex = (lastIndex + 1) % COLORS.length;
      this.setAttribute('material', 'color', COLORS[lastIndex]);
      console.log('I was clicked at: ', evt.detail.intersection.point);
      var sphereEl = document.createElement('a-sphere');
      sphereEl.setAttribute('radius', 1);
      document.querySelector('a-scene').appendChild(sphereEl);
      sphereEl.addEventListener('loaded', function () {
        console.log('sphere attached');
      });
    });

    this.el.addEventListener('mouseenter', function (evt) {
      lastIndex = (lastIndex + 1) % COLORS.length;
      this.setAttribute('material', 'color', COLORS[lastIndex]);
      console.log('I was looked at: ', evt.detail.intersection.point);
    });

    this.el.addEventListener('mouseleave', function (evt) {
      lastIndex = (lastIndex + 1) % COLORS.length;
      this.setAttribute('material', 'color', COLORS[lastIndex]);
      console.log('I was left at: ', evt.detail.intersection.point);
      console.log("id: ", this.id);
      console.log("Hey: ", getTranslations());

    });
  }
});