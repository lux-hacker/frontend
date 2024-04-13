interface Comparable<Type>{
    compareTo(other: Comparable<Type>): number;
}

class BinaryTree<Type extends Comparable<Type>> {
    private left: BinaryTree<Type> | null;
    private right: BinaryTree<Type> | null;
    private parent: BinaryTree<Type> | null;
    private data: Type;

    constructor(data: Type) {
        this.data = data;
        this.right = null;
        this.left = null;
        this.parent = null;
    }

    search(data: Type): Type | null{
        let answer: Type | null = null;
        let cur: BinaryTree<Type> | null = this;
        while (cur !== null && cur.data.compareTo(data) == 0){
            if (cur.data.compareTo(data) == -1) cur = cur.left;
            else cur = cur.right;
        }
        if (cur !== null) answer = cur.data;
        return answer;
    }

    push(data: Type): void {
        let cur: BinaryTree<Type> | null = this;
        let par: BinaryTree<Type> | null = cur.parent;
        while (cur !== null){
            par = cur;
            if (cur.data.compareTo(data) == -1) cur = cur.left;
            else cur = cur.right;
        }
        cur = new BinaryTree<Type>(data);
        cur.parent = par;
        if (par !== null) {
            if (par.data.compareTo(data) == -1) {
                par.left = cur;
            } else {
                par.right = cur;
            }
        }
    }

    delete(data: Type) {
        if (this.search(data) != null) return;
        let cur: BinaryTree<Type> | null = this;
        while (cur !== null && cur.data.compareTo(data) != 0){
            if (cur.data.compareTo(data) == -1) cur = cur.left;
            else cur = cur.right;
        }
        if (cur === null) return;
        if (cur.parent !== null) {
            if (cur.left === null && cur.right === null) {
                if (cur.parent.left === cur) cur.parent.left = null;
                else cur.parent.right = null;
            } else if (cur.left === null) {
                if (cur.parent.left == cur) cur.parent.left = cur.right;
                else cur.parent.right = cur.right;
            } else if (cur.right === null) {
                if (cur.parent.left == cur) cur.parent.left = cur.left;
                else cur.parent.right = cur.left;
            } else {
                let next: BinaryTree<Type> = this.nextElement(cur);
                let next_data: Type = next.data;
                this.delete(next_data);
                cur.data = next_data;
            }
        }
    }

    private minElement(root: BinaryTree<Type>): BinaryTree<Type> {
        let cur: BinaryTree<Type> | null = root;
        while (cur.left !== null) cur = cur.left;
        return cur;
    }

    private nextElement(root: BinaryTree<Type>): BinaryTree<Type> {
        if (root.right !== null) {
            return this.minElement(root.right)
        }
        let cur: BinaryTree<Type> | null = root;
        let cur_par: BinaryTree<Type> | null = cur.parent;
        while (cur_par !== null && cur_par.right === cur) {
            cur = cur_par;
            cur_par = cur.parent;
        }
        return cur;
    }
}

class NumberComp implements Comparable<number> {
    num: number = 0;
    constructor(num: number) {
        this.num = num;
    }
    compareTo(other: NumberComp): number {
        let a = this.num - other.num;
        return a < 0 ? -1 : a > 0 ? 1 : 0;
    }

}


let num1 = new NumberComp(10);
let num2 = new NumberComp(9);
let num3 = new NumberComp(11);
let num4 = new NumberComp(1);
let tree = new BinaryTree(num1);
tree.push(num2)
tree.push(num3)
tree.push(num4)
