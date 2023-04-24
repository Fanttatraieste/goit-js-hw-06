const categories = document.getElementById("categories");

const categoriesItems = categories.getElementsByClassName("item");

console.log("Number of categories: " + categoriesItems.length);
console.log("");

for (let i = 0; i < categoriesItems.length; i++) {
    const element = categoriesItems[i];
    const title = element.getElementsByTagName("h2")[0].textContent;
    console.log("Category : " + title);
    const items = element.getElementsByTagName("li");
    console.log("Elements : " + items.length);
    console.log("");
}