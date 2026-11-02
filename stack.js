class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    // Add element to top of stack
    push(element) {
        this.items.push(element);
        this.count++;
        return element;
    }

    // Remove top element
    pop() {
        if (this.count === 0) {
            return undefined;
        }

        const deletedItem = this.items.pop();
        this.count--;

        return deletedItem;
    }

    // Check top element without removing
    peek() {
        if (this.count === 0) {
            return undefined;
        }

        return this.items[this.count - 1];
    }

    // Check if stack is empty
    isEmpty() {
        return this.count === 0;
    }

    // Get stack size
    size() {
        return this.count;
    }

    // Clear stack
    clear() {
        this.items = [];
        this.count = 0;
    }
}

const stack = new Stack();

// Display stack blocks
function displayStack(highlightTop = false) {
    $("#stack").empty();

    const values = stack.items.slice().reverse();

    values.forEach((value, index) => {
        const block = $("<div>")
            .addClass("row bg-primary push text-white border border-light")
            .text(value);

        if (highlightTop && index === 0) {
            block.addClass("border-warning border-3");
        }

        $("#stack").append(block);
    });
}

// Wait for page to load
$(document).ready(function() {

    // PUSH
    $("#pushBtn").click(function() {
        const value = $("#stackInput").val().trim();

        if (value === "") {
            alert("Please enter a value!");
            return;
        }

        stack.push(value);
        $("#stackInput").val("");

        $("#deleted").empty();
        displayStack();
    });

    // POP
    $("#popBtn").click(function() {
        if (stack.isEmpty()) {
            alert("Stack is empty!");
            return;
        }

        const deletedItem = stack.pop();

        $("#deleted")
            .empty()
            .text(deletedItem);

        displayStack();
    });

    // PEEK
    $("#peekBtn").click(function() {
        if (stack.isEmpty()) {
            alert("Stack is empty!");
            return;
        }

        alert("Top element: " + stack.peek());

        displayStack(true);
    });

    // CLEAR
    $("#clearBtn").click(function() {
        stack.clear();

        $("#deleted").empty();

        displayStack();
    });

});
