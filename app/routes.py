from flask import request, jsonify, render_template
from app import app
from app.kruskal import kruskal_mst

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate_mst', methods=['POST'])
def calculate_mst():
    data = request.json
    graph = data['graph']
    
    mst = kruskal_mst(graph)
    total_cost = sum(edge[2] for edge in mst)
    
    return jsonify({
        'mst': mst,
        'total_cost': total_cost
    })
