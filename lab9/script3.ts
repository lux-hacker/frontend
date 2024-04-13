type Point = { x: number, y: number }

function distance(p1: Point, p2: Point): number
function distance(x1: number, y1: number, x2: number, y2: number): number
function distance(z1: number | Point, z2: number | Point, x2?: number, y2?: number): number {
    if (typeof z1 === "number" && typeof z2 === "number" && x2 !== undefined && y2 !== undefined) {
        return Math.sqrt((z1 - x2) * (z1 - x2) + (z2 - y2) * (z2 - y2));
    }
    // return Math.sqrt(Math.pow(((z1 as Point).x - (z2 as Point).x), 2) + Math.pow(((z1 as Point).y - (z2 as Point).y), 2));
    return distance((z1 as Point).x, (z1 as Point).y, (z2 as Point).x, (z2 as Point).y);
}


