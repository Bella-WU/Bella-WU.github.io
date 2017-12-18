class Safety extends Rectangle {
    constructor(index, grid) {
        super(0, index * grid, width, grid);
        this.type = "SAFETY";
    }

    run() {
    	noStroke();
        fill(255);
        rect(this.x, this.y, this.width, this.height);
        image(imgTree, this.x, this.y, this.w, this.h);
    }
}