var Node = /** @class */ (function () {
    function Node(value, next) {
        this.next = null;
        this.value = value;
        this.next = next;
    }
    return Node;
}());
var SinglyLinkedList = /** @class */ (function () {
    function SinglyLinkedList() {
        this._head = null;
        this._tail = null;
        this._length = 0;
    }
    SinglyLinkedList.prototype.push = function (value) {
        var node = new Node(value);
        if (this._length <= 0) {
            this._head = node;
            this._tail = node;
            this._length += 1;
            return;
        }
        this._tail.next = node;
        this._tail = node;
        this._length += 1;
    };
    Object.defineProperty(SinglyLinkedList.prototype, "length", {
        get: function () {
            return this._length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SinglyLinkedList.prototype, "tail", {
        get: function () {
            return this._tail;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SinglyLinkedList.prototype, "head", {
        get: function () {
            return this._head;
        },
        enumerable: false,
        configurable: true
    });
    return SinglyLinkedList;
}());
var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push("Node1");
console.log('tails before insertion', singlyLinkedList.tail);
singlyLinkedList.push("Node2");
console.log('singlyLinkedList.length : ' + singlyLinkedList.length + ' ');
console.log('head', singlyLinkedList.head);
console.log('tails after insertion', singlyLinkedList.tail);
