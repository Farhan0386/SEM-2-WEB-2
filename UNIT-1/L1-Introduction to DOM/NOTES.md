# HTML vs DOM (Web Development – 2)

## 1. HTML (HyperText Markup Language)

- HTML is a **markup language**
- Used to define the **structure** of a web page
- Written by the **developer**
- Stored as a **static file** (`.html`)
- Does **not change automatically**

### Role of HTML

- Defines elements like:
  - headings
  - paragraphs
  - buttons
  - images

👉 HTML answers: **What is on the page?**

---

## 2. DOM (Document Object Model)

- DOM is a **tree-like representation** of HTML
- Created by the **browser**
- Exists in **memory (RAM)**
- Made of **nodes** (elements, text, attributes)
- Can be **modified dynamically** using JavaScript

👉 DOM answers: **How can the page be accessed and changed?**

---

## 3. DOM Tree Structure

- The DOM is organized as a **hierarchical tree**
- Each HTML element becomes a **node**

### Basic DOM Tree

```

document
└── html
├── head
└── body

```

### Relationships

- `document` → root node  
- `html` → child of document  
- `head` and `body` → siblings  

---

## 4. HTML vs DOM (Comparison)

| Feature | HTML | DOM |
|------|------|-----|
| Type | Markup language | Programming interface |
| Created by | Developer | Browser |
| Nature | Static | Dynamic |
| Exists as | File | Tree in memory |
| JS can modify | ❌ No | ✅ Yes |

---

## 5. Important Exam Points

- Browser converts **HTML → DOM**
- JavaScript works with the **DOM, not directly with HTML**
- Changing content using JS changes the **DOM**, not the HTML file

---

## 6. One-Line Definitions (Exam Ready)

- **HTML:** A markup language used to structure web pages.
- **DOM:** A browser-created object model that represents HTML as a tree structure.

---

## 7. One-Line Difference

> HTML is the source code of a webpage, while DOM is the dynamic tree structure created by the browser that JavaScript manipulates.
```

---
