## Create Readme
### 6. Answer the following questions clearly:

#### **1. What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`?**

-   `getElementById("idName")` â†’ Finds **one element** by its **ID**
    (IDs are unique).
-   `getElementsByClassName("className")` â†’ Finds **many elements** with
    the same class. Returns an **HTMLCollection** (like an array).
-   `querySelector("selector")` â†’ Finds the **first element** that
    matches a CSS selector (like `#id`, `.class`, `div`).
-   `querySelectorAll("selector")` â†’ Finds **all matching elements** and
    returns a **NodeList**.

------------------------------------------------------------------------

#### **2. How do you create and insert a new element into the DOM?**

Steps: 1. Use `document.createElement("tagName")` â†’ to create an
element. 2. Add text with `element.textContent = "Hello"`. 3. Add it to
the page using `parent.appendChild(element)`.

Example:

``` js
const newDiv = document.createElement("div");
newDiv.textContent = "I am new here";
document.body.appendChild(newDiv);
```

------------------------------------------------------------------------

#### **3. What is Event Bubbling and how does it work?**

-   Event bubbling means **when you click on a child element, the event
    goes up to its parent, then grandparent, and so on**.
-   Example: Clicking a button inside a div â†’ first button event runs,
    then the div event runs.

------------------------------------------------------------------------

#### **4. What is Event Delegation in JavaScript? Why is it useful?**

-   Event Delegation means **adding an event to a parent element, and
    using it for its child elements**.
-   Why useful?\
    âœ… We don't need to add the same event to every child.\
    âœ… Saves memory and works for new elements added later.

Example:

``` js
document.getElementById("parent").addEventListener("click", function(e) {
  if(e.target.tagName === "BUTTON") {
    console.log("Button clicked!");
  }
});
```

------------------------------------------------------------------------

#### **5. What is the difference between `preventDefault()` and `stopPropagation()` methods?**

-   `preventDefault()` â†’ Stops the **default action** (like form submit,
    link open).
-   `stopPropagation()` â†’ Stops the **event from going up (bubbling) or
    down (capturing)**.

Example:

``` js
e.preventDefault(); // Stop link from opening
e.stopPropagation(); // Stop event from reaching parent
