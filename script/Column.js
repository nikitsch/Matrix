// const SYMBOLS = "シチゴゾドボニヒミリヰギジヂビピウゥッンクスツヌフムユュルグズブヱゲトホモラワガヨョロヲアァヅプエェケセテネヘメレカサタナハマゼデベペオォコソヤャザダバパイィキポヴ";
const SYMBOLS = "01";

export class Column {
  constructor(x, fontSize, canvasHeight, context) {
    this.x = x;
    this.y = 0;
    this.fontSize = fontSize;
    this.canvasHeight = canvasHeight;
    this.context = context;
  }

  darwSymbol() {
    if (this.y === 0 && Math.random() < 0.9) {
      return;
    };

    const characterIndex = Math.floor(Math.random() * SYMBOLS.length);
    const symbol = SYMBOLS[characterIndex];

    this.context.fillText(symbol, this.x, this.y);

    if (this.y > this.canvasHeight) {
      this.y = 0;
    } else {
      this.y += this.fontSize;
    }
  }
}