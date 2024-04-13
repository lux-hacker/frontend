function distance(z1, z2, x2, y2) {
    if (typeof z1 === "number" && typeof z2 === "number" && x2 !== undefined && y2 !== undefined) {
        return Math.sqrt((z1 - x2) * (z1 - x2) + (z2 - y2) * (z2 - y2));
    }
    // return Math.sqrt(Math.pow(((z1 as Point).x - (z2 as Point).x), 2) + Math.pow(((z1 as Point).y - (z2 as Point).y), 2));
    return distance(z1.x, z1.y, z2.x, z2.y);
}
