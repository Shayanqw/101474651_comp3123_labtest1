# 📘 COMP3123 – Lab Test 1  
**Name**: Shayan Pourahmad  
**Student ID**: 101474651  
**Course**: Full Stack Development with JavaScript (ES6 + Node.js)  
**Lab Test**: 1  

---

## 📂 Project Structure  
```
101474651_comp3123_labtest1/
│
├── question1/
│ └── index.js # ES6 function with Promises & array filtering
│
├── question2/
│ └── index.js # Promise chaining with resolve, reject, .then(), .catch(), .finally()
│
└── question3/
├── add.js # Creates Logs directory and generates 10 log files
└── remove.js # Deletes log files and removes Logs directory
```

## 🚀 How to Run  

### **1. Clone Repository**
```
git clone https://github.com/Shayanqw/101474651_comp3123_labtest1.git
cd 101474651_comp3123_labtest1
```
2. Run Question 1
Filters only string values from a mixed array and converts them to lowercase.

```
cd question1
node index.js
```
✅ Sample Output
```
Result: [ 'pizza', 'wings', 'pineapple', 'hello', 'world' ]
```
3. Run Question 2
Demonstrates Promise resolution, rejection, chaining and final cleanup.
```

cd ../question2
node index.js
```
✅ Sample Output

```
         resolvedPromise: success after 500ms

         resolvedPromise finished

         rejectedPromise: failure after 500ms

         rejectedPromise finished

         sequence done
```
4. Run Question 3
Uses Node.js fs & path modules to create and remove log files.

Create logs

```
cd ../question3
node add.js
```
✅ Sample Output

```

Created file → log0.txt
Created file → log1.txt
Created file → log2.txt
...
Created file → log9.txt

============================
✅ All log files created.
============================

     All log files created.
```
Remove logs
```
node remove.js
```
✅ Sample Output
```
🗑️   Deleted → log0.txt
🗑️   Deleted → log1.txt
...
🗑️   Deleted → log9.txt

============================
✅ Logs directory removed.
============================
```
🛠️ Tech Stack
JavaScript (ES6)
```
Node.js

fs (File System module)

path (Path module)
```
📑 Notes
```
Followed ES6 standards (const, arrow functions, Promises).

Each question is organized into a separate folder as per professor’s instructions.

Clean and modular structure to avoid namespace pollution.
