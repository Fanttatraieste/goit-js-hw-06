const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const gallery = document.querySelector(".gallery");

for (let i = 0; i < images.length; i ++) {
  const element = images[i];
  let item = document.createElement("li");
  let image = document.createElement("img");
  image.src = element.url;
  image.alt = element.alt;
  item.append(image);
  gallery.append(item);
}

gallery.style.display = "flex";
gallery.style.listStyleType = "none";
gallery.style.gap = "50px";

const imgs = document.getElementsByTagName("img");

for (let i = 0; i < imgs.length; i ++) {
  imgs[i].style.width = "250px";
  imgs[i].style.height = "250px";
  imgs[i].style.ObjectFit = "cover";
}

