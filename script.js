class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }
    enqueue(data) {

        let newNode = new Node(data);
        if (this.front === null) {
            this.front = newNode;
            this.rear = newNode;
        }
        else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }
    dequeue() {
        if (this.front === null) {
            return null;
        }

        let deletedValue = this.front.data;

        this.front = this.front.next;
        if (this.front === null) {
            this.rear = null;
        }

        return deletedValue;
    }
    search(data) {

        let current = this.front;

        while (current !== null) {

            if (current.data == data) {
                return true;
            }

            current = current.next;
        }

        return false;
    }
    isEmpty() {
        return this.front === null;
    }
    getNodes() {

        let nodes = [];
        let current = this.front;

        while (current !== null) {
            nodes[nodes.length] = current.data;
            current = current.next;
        }

        return nodes;
    }
}
let queue = new Queue();
function enqueue() {

    let input = document.getElementById("valueInput");
    let value = input.value;

    if (value === "") {
        showMessage("Please enter a value.");
        return;
    }

    queue.enqueue(value);

    input.value = "";

    showMessage("Value " + value + " inserted into the queue.");

    displayQueue();
}
function dequeue() {

    if (queue.isEmpty()) {
        showMessage("Queue Underflow: Queue is empty.");
        return;
    }

    let deletedValue = queue.dequeue();

    showMessage("Value " + deletedValue + " deleted from the queue.");

    displayQueue();
}
function searchValue() {

    let input = document.getElementById("valueInput");
    let value = input.value;

    if (value === "") {
        showMessage("Please enter a value to search.");
        return;
    }

    if (queue.search(value)) {
        showMessage("Value " + value + " found in the queue.");
    } 
    else {
        showMessage("Value " + value + " not found in the queue.");
    }
}
function displayQueue() {

    let display = document.getElementById("queueDisplay");

    display.innerHTML = "";

    if (queue.isEmpty()) {

        display.innerHTML = "Queue is empty";

    } 
    else {

        let current = queue.front;

        while (current !== null) {

            let nodeDiv = document.createElement("div");
            nodeDiv.className = "node";

            let valueBox = document.createElement("div");
            valueBox.className = "value-box";

            valueBox.innerText = current.data;

            nodeDiv.appendChild(valueBox);

            if (current.next !== null) {

                let arrow = document.createElement("span");

                arrow.className = "arrow";
                arrow.innerText = "→";

                nodeDiv.appendChild(arrow);
            }

            display.appendChild(nodeDiv);

            current = current.next;
        }

        let nullBox = document.createElement("span");
        nullBox.innerText = " → NULL";

        display.appendChild(nullBox);
    }

    updateFrontRear();
}
function updateFrontRear() {

    let frontValue = document.getElementById("frontValue");
    let rearValue = document.getElementById("rearValue");

    if (queue.isEmpty()) {

        frontValue.innerText = "NULL";
        rearValue.innerText = "NULL";

    } 
    else {

        frontValue.innerText = queue.front.data;
        rearValue.innerText = queue.rear.data;
    }
}
function showMessage(message) {

    document.getElementById("message").innerText = message;
}
displayQueue();