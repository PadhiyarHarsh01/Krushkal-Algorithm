function addEdge() {
    const node1 = document.getElementById("node1").value;
    const node2 = document.getElementById("node2").value;
    const cost = document.getElementById("cost").value;

    if (!node1 || !node2 || !cost) {
        alert("Please enter both cities and the cost.");
        return;
    }

    fetch("/add_edge", {
        method: "POST",
        body: JSON.stringify({ u: node1, v: node2, cost: cost }),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        displayGraphEdges();
    })
    .catch(error => console.error("Error:", error));
}

function displayGraphEdges() {
    fetch("/get_graph")
    .then(response => response.json())
    .then(data => {
        const edgesList = document.getElementById("edges-list");
        edgesList.innerHTML = "";

        Object.keys(data.graph).forEach(node => {
            Object.keys(data.graph[node]).forEach(adj => {
                if (node < adj) { // Avoid duplicate edges
                    edgesList.innerHTML += `<div class="edge">${node} - ${adj}: ${data.graph[node][adj]}</div>`;
                }
            });
        });
    })
    .catch(error => console.error("Error:", error));
}

function calculateMST() {
    fetch("/calculate_mst")
    .then(response => response.json())
    .then(data => {
        const mstElement = document.getElementById("mst");
        const totalCostElement = document.getElementById("total-cost");

        mstElement.innerHTML = "<h3>Minimum Spanning Tree:</h3>";
        data.mst.forEach(edge => {
            mstElement.innerHTML += `<div class="edge">${edge[0]} - ${edge[1]}: ${edge[2]}</div>`;
        });

        totalCostElement.innerHTML = `<h3>Total Cost: ${data.total_cost}</h3>`;
    })
    .catch(error => console.error("Error:", error));
}

function resetGraph() {
    fetch("/reset", { method: "POST" })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        document.getElementById("mst").innerHTML = "";
        document.getElementById("total-cost").innerHTML = "";
        document.getElementById("edges-list").innerHTML = "";
    })
    .catch(error => console.error("Error:", error));
}

// Load graph edges on page load
window.onload = displayGraphEdges;
