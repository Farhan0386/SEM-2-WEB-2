# Lecture 2: DOM Traversal & Selection

**Course:** Web Development – II  
**Unit:** 1  

---

## 1. DOM Traversal

### Definition

DOM Traversal is the process of navigating through the DOM tree to access different nodes based on their relationships such as **parent**, **child**, and **sibling**.

### Key Points

- DOM is a **tree structure** created by the browser
- Traversal allows movement:
  - Up → Parent
  - Down → Child
  - Sideways → Sibling
- Element-based traversal avoids unwanted **text nodes**
- Used in **dynamic UI logic** and JavaScript frameworks

### DOM Tree Example

```text
document
 └── html
     ├── head
     └── body
         ├── h1
         └── h2
````

### Node Relationships

* **Parent:** Element that contains another element
* **Child:** Element inside another element
* **Sibling:** Elements having the same parent

---

## 2. Selecting Elements

### Meaning

Selecting elements means accessing specific parts of an HTML page using JavaScript so they can be **read, modified, or interacted with**.

JavaScript asks:

> Which part of the page do you want me to work with?

---

## 3. `getElementById()`

### Purpose

* Selects **one single element**
* Uses a **unique id**

### Syntax

```js
document.getElementById("idName");
```

### Important Points

* `id` must be **unique**
* Returns:

  * the element → if found
  * `null` → if not found
* Fastest and most direct method
* Loop is **not required**

### Example

```js
let heading = document.getElementById("intro");
heading.textContent = "Welcome to DOM";
```

---

## 4. `getElementsByClassName()`

### Purpose


* Selects **multiple elements**
* Uses a **class name**

### Syntax

```js
document.getElementsByClassName("className");
```

### Important Points

* Returns an **HTMLCollection**
* HTMLCollection is:

  * array-like
  * indexed (`[0]`, `[1]`, ...)
  * not a real array
* Loop is **required** to work with all elements
* Collection updates automatically when DOM changes

### Example

```js
let items = document.getElementsByClassName("item");

for (let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = "lightgray";
}
```

---

## 5. Comparison

| Feature     | getElementById() | getElementsByClassName() |
| ----------- | ---------------- | ------------------------ |
| Selects     | Single element   | Multiple elements        |
| Based on    | id               | class                    |
| Return type | Element          | HTMLCollection           |
| Loop needed | No               | Yes                      |
| Speed       | Faster           | Slightly slower          |

---

## 6. Important Exam Notes

* Browser converts **HTML → DOM**
* JavaScript interacts with the **DOM**, not directly with the HTML file
* Changes using JavaScript affect the **DOM in memory**
* `document` is the **root object** of the DOM

---

## 7. MCQ (Exam Practice)

**Q:** Which method is the most direct way to select a single HTML element with a unique ID?

* a) querySelector()
* b) getElementsByClassName()
* c) getElementById()
* d) querySelectorAll()

**Answer:** c) getElementById()

---

## 8. One-Line Summary

DOM Traversal helps navigate the DOM tree, and selection methods like `getElementById()` and `getElementsByClassName()` allow JavaScript to interact with webpage elements.

```

