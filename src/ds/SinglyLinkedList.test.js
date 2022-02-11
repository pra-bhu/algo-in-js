"use strict";
exports.__esModule = true;
var SinglyLinkedList_1 = require("./SinglyLinkedList");
describe('creates a Singly Linked list', function () {
    test('should return a singly linked list object', function () {
        var singlyLinkedList = new SinglyLinkedList_1.SinglyLinkedList();
        expect(singlyLinkedList).toHaveProperty('_head');
        expect(singlyLinkedList).toHaveProperty('_tail');
        expect(singlyLinkedList).toHaveProperty('_length');
    });
    test('should return a singly linked list with length = 0', function () {
        var singlyLinkedList = new SinglyLinkedList_1.SinglyLinkedList();
        expect(singlyLinkedList.length).toBe(0);
    });
});
