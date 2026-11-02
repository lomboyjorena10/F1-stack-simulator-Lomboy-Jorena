class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) return undefined;
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) return undefined;
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }
}

const stack = new Stack();

function displayStack(highlightTop = false) {
    const stackDisplay = document.getElementById("stack");
    stackDisplay.innerHTML = "";

    const values = stack.items.slice().reverse();

    values.forEach((value, index) => {
        const block = document.createElement("div");

        block.className = "row bg-primary push text-white border border-light";
        block.textContent = value;

        if (highlightTop && index === 0) {
            block.classList.add("border-warning", "border-3");
        }

        stackDisplay.appendChild(block);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("stackInput");
    const deleted = document.getElementById("deleted");

    document.getElementById("pushBtn").addEventListener("click", function () {
        const value = input.value.trim();

        if (value === "") {
            alert("Please enter a value!");
            return;
        }

        stack.push(value);
        input.value = "";
        deleted.textContent = "";
        displayStack();
    });

    document.getElementById("popBtn").addEventListener("click", function () {
        if (stack.isEmpty()) {
            alert("Stack is empty!");
            return;
        }

        deleted.textContent = stack.pop();
        displayStack();
    });

    document.getElementById("peekBtn").addEventListener("click", function () {
        if (stack.isEmpty()) {
            alert("Stack is empty!");
            return;
        }

        displayStack(true);
        alert("Top element: " + stack.peek());
    });

    document.getElementById("clearBtn").addEventListener("click", function () {
        stack.clear();
        deleted.textContent = "";
        displayStack();
    });
});
