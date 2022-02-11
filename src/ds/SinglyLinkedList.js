"use strict";
exports.__esModule = true;
exports.SinglyLinkedList = void 0;
var Node = /** @class */ (function () {
    function Node(value, next) {
        this.value = value;
        this.next = null;
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
        }
        else {
            this._tail.next = node;
            this._tail = node;
        }
        this._length += 1;
        return this;
    };
    SinglyLinkedList.prototype.pop = function () {
        var previousNode = null;
        var currentNode = this._head;
        while (currentNode.next) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = null;
        this._tail = previousNode;
        this._length -= 1;
        return currentNode;
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
exports.SinglyLinkedList = SinglyLinkedList;
