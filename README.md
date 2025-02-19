# Optimal Road Construction Project 🚧🚀

This project demonstrates **Kruskal's Algorithm** to find the **Minimum Spanning Tree (MST)** for optimal road construction between cities. Users can dynamically add edges, visualize the graph, and compute the MST using a **Flask-based backend**.

---

## 📌 Features

- ✅ **Dynamic Graph Input** – Users can enter roads (edges) between cities.
- ✅ **Live Graph Display** – Added edges appear instantly on the UI.
- ✅ **MST Calculation** – Uses Kruskal's Algorithm to compute the optimal road network.
- ✅ **Flask API** – The backend calculates the MST and returns results in JSON format.
- ✅ **Interactive UI** – Modern, clean design with animations and smooth transitions.

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Flask (Python)
- **Algorithm**: Kruskal's Algorithm for MST

---

## 📂 Project Structure

```plaintext
Optimal-Road-Construction/
│── app/
│   ├── static/
│   │   ├── css/
│   │   │   ├── style.css  # UI Styling
│   ├── templates/
│   │   ├── index.html  # Main Web Page
│   ├── __init__.py  # Flask App Initialization
│   ├── routes.py  # Flask Routes
│   ├── kruskal.py  # Kruskal's Algorithm Implementation
│── run.py  # Main Entry Point
│── README.md  # Project Documentation
```

---

## 🚀 Installation & Setup

### 🔹 Step 1: Clone the Repository
```bash
git clone https://github.com/PadhiyarHarsh01/Krushkal-Algorithm.git
cd Optimal-Road-Construction
```

### 🔹 Step 2: Set Up Virtual Environment
```bash
python -m venv venv
source venv/Scripts/activate  # On Windows use: venv\Scripts\activate
```

### 🔹 Step 3: Install Dependencies
```bash
pip install -r requirements.txt
```

### 🔹 Step 4: Run the Application
```bash
python run.py
```

---

## 🖥️ Usage

1. Open your browser and navigate to `http://localhost:5000`
2. Enter cities and the roads between them with their respective costs
3. Click "Add Edge" to visualize the connection
4. Click "Calculate MST" to see the optimal road network
5. The results will be displayed both visually and in text format


---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
