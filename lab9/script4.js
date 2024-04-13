var BinaryTree = /** @class */ (function () {
    function BinaryTree(data) {
        this.data = data;
        this.right = null;
        this.left = null;
        this.parent = null;
    }
    BinaryTree.prototype.search = function (data) {
        var answer = null;
        var cur = this;
        while (cur !== null && cur.data.compareTo(data) == 0) {
            if (cur.data.compareTo(data) == -1)
                cur = cur.left;
            else
                cur = cur.right;
        }
        if (cur !== null)
            answer = cur.data;
        return answer;
    };
    BinaryTree.prototype.push = function (data) {
        var cur = this;
        var par = cur.parent;
        while (cur !== null) {
            par = cur;
            if (cur.data.compareTo(data) == -1)
                cur = cur.left;
            else
                cur = cur.right;
        }
        cur = new BinaryTree(data);
        cur.parent = par;
        if (par !== null) {
            if (par.data.compareTo(data) == -1) {
                par.left = cur;
            }
            else {
                par.right = cur;
            }
        }
    };
    BinaryTree.prototype.delete = function (data) {
        if (this.search(data) != null)
            return;
        var cur = this;
        while (cur !== null && cur.data.compareTo(data) != 0) {
            if (cur.data.compareTo(data) == -1)
                cur = cur.left;
            else
                cur = cur.right;
        }
        if (cur === null)
            return;
        if (cur.parent !== null) {
            if (cur.left === null && cur.right === null) {
                if (cur.parent.left === cur)
                    cur.parent.left = null;
                else
                    cur.parent.right = null;
            }
            else if (cur.left === null) {
                if (cur.parent.left == cur)
                    cur.parent.left = cur.right;
                else
                    cur.parent.right = cur.right;
            }
            else if (cur.right === null) {
                if (cur.parent.left == cur)
                    cur.parent.left = cur.left;
                else
                    cur.parent.right = cur.left;
            }
            else {
                var next = this.nextElement(cur);
                var next_data = next.data;
                this.delete(next_data);
                cur.data = next_data;
            }
        }
    };
    BinaryTree.prototype.minElement = function (root) {
        var cur = root;
        while (cur.left !== null)
            cur = cur.left;
        return cur;
    };
    BinaryTree.prototype.nextElement = function (root) {
        if (root.right !== null) {
            return this.minElement(root.right);
        }
        var cur = root;
        var cur_par = cur.parent;
        while (cur_par !== null && cur_par.right === cur) {
            cur = cur_par;
            cur_par = cur.parent;
        }
        return cur;
    };
    return BinaryTree;
}());
var NumberComp = /** @class */ (function () {
    function NumberComp(num) {
        this.num = 0;
        this.num = num;
    }
    NumberComp.prototype.compareTo = function (other) {
        var a = this.num - other.num;
        return a < 0 ? -1 : a > 0 ? 1 : 0;
    };
    return NumberComp;
}());
var num1 = new NumberComp(10);
var num2 = new NumberComp(9);
var num3 = new NumberComp(11);
var num4 = new NumberComp(1);
var tree = new BinaryTree(num1);
tree.push(num2);
tree.push(num3);
tree.push(num4);
