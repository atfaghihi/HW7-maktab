function calculateCircle(radiusCircle) {
    this.radius = radiusCircle;
    this.getArea = (radius) => {
        return Math.PI * (radius ** 2);
    };
    this.getPerimeter = (radius) => {
        return Math.PI * (radius * 2);
    };
}

const radiusAreaPerimeter = 5;
const radiusR = new calculateCircle(radiusAreaPerimeter);

console.log(radiusR.getArea(radiusAreaPerimeter));
console.log(radiusR.getPerimeter(radiusAreaPerimeter));