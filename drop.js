class Drop {
  constructor(quanity = 10, borderColor = "red") {
    this.quanity = quanity;
    this.borderColor = borderColor;
    this.arr = [];
    this.fillArr();
  }

  fillArr() {
    const winH = window.innerHeight; //windowHeight
    const winW = window.innerWidth; //windowWidth
    for (let i = 0; i < this.quanity; i++) {
      let x, y;
      x = Math.floor(Math.random() * winW);
      y = Math.floor(Math.random() * winH);
      this.arr.push([x, y]);
    }
    this.show();
  }

  show() {
    for (let i = 0; i < this.arr.length; i++) {
      const el = document.createElement("div");
      el.classList.add("element");
      el.style.borderColor = this.borderColor;
      el.style.left = this.arr[i][0].toString() + "px";
      el.style.top = this.arr[i][1].toString() + "px";
      document.body.appendChild(el);
    }
  }

  removeElements() {
    this.arr = [];
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  }

  removeAndAdd = setInterval(() => {
    this.removeElements();
    this.fillArr();
    this.show();
  }, 200);
}

export default Drop;
