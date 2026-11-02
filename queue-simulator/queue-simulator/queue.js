class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) return undefined;
        return this.items.shift();
    }

    peek() {
        if (this.isEmpty()) return undefined;
        return this.items[0];
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

const queue = new Queue();

function displayQueue(highlightFront = false) {
    const queueDisplay = document.getElementById("queue");
    queueDisplay.innerHTML = "";

    queue.items.forEach((value, index) => {
        const block = document.createElement("div");

        block.className = "bg-primary text-white border border-light p-3";
        block.textContent = value;

        if (highlightFront && index === 0) {
            block.classList.add("border-warning", "border-3");
        }

        queueDisplay.appendChild(block);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("queueInput");
    const deleted = document.getElementById("deleted");

    document.getElementById("enqueueBtn").addEventListener("click", function () {
        const value = input.value.trim();

        if (value === "") {
            alert("Please enter a value!");
            return;
        }

        queue.enqueue(value);
        input.value = "";
        deleted.textContent = "";
        displayQueue();
    });

    document.getElementById("dequeueBtn").addEventListener("click", function () {
        if (queue.isEmpty()) {
            alert("Queue is empty!");
            return;
        }

        deleted.textContent = queue.dequeue();
        displayQueue();
    });

    document.getElementById("peekBtn").addEventListener("click", function () {
        if (queue.isEmpty()) {
            alert("Queue is empty!");
            return;
        }

        displayQueue(true);
        alert("Front element: " + queue.peek());
    });

    document.getElementById("clearBtn").addEventListener("click", function () {
        queue.clear();
        deleted.textContent = "";
        displayQueue();
    });
});
