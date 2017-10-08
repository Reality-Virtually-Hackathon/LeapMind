// Component to change to a sequential color on click.
let state = 0;
AFRAME.registerComponent('cursor-listener', {
  init: function () {
    var lastIndex = -1;
    console.log('I was clicked at');
    var COLORS = ['red', 'green', 'blue'];
    this.el.addEventListener('click', function (evt) {
        getTranslations(this, function (divReference, translationsJSON) {
          var textBox = document.createElement('a-plane');
          var x,y,z;
          x = evt.detail.intersection.point.x;
          y = evt.detail.intersection.point.y;
          z = evt.detail.intersection.point.z;

          var val = "" + x +" " + y + " " + z;
          textBox.setAttribute('width', 2);
          textBox.setAttribute('height', 0.5);
          textBox.setAttribute('position', val  );
          textBox.setAttribute('color', "black");
          textBox.setAttribute('opacity', 0.5);
          textBox.setAttribute('class', "temp");

          //depending on what key we are getting switch between a text object and an image texture...
          console.log("MY: ", translationsJSON);
          console.log("this id: ", divReference.id);
          if (translationsJSON[divReference.id]){
            //do something
              console.log("IM BOUT TO");
              if(translationsJSON[divReference.id]["eng"]) {
                var textplane = document.createElement('a-text');
                if(!state) {
                  textplane.setAttribute('value', translationsJSON[divReference.id]["arab_vern"]);
                  state = !state;
                } else {
                  textplane.setAttribute('value', translationsJSON[divReference.id]["eng"]);
                  state = !state;
                }
                textplane.setAttribute('size', 0.2)
                textBox.appendChild(textplane);
                document.querySelector("a-scene").appendChild(textBox);
                textBox.addEventListener('loaded', function () {
                });
              } else if (translationsJSON[divReference.id]["arabic_text"]){

                //get the pic. set it to the plane object...
              }
          }
        });
    });

    this.el.addEventListener('mouseenter', function (evt) {
      lastIndex = (lastIndex + 1) % COLORS.length;
      this.setAttribute('material', 'color', COLORS[lastIndex]);
      console.log('I was looked at: ', evt.detail.intersection.point);
    });

    this.el.addEventListener('mouseleave', function (evt) {
      var paras = document.getElementsByClassName('temp');

      while(paras[0]) {
          paras[0].parentNode.removeChild(paras[0]);
      }
    });
  }
});