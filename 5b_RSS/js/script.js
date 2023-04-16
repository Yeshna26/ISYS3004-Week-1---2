function addRSStoDom(data) {
  // Create the 'outer' container to hold everything
  let itemsContainer = document.createElement('DIV');
  for (let i = 0, t = data.items.length; i < t; ++i) {
    let item = data.items[i];  // get the item
    // create a element to contain, title, link, description
    let itemContainer = document.createElement('DIV');

    // create and update the link element
    let itemLinkElement = document.createElement('A');
    itemLinkElement.setAttribute('href', item.link);
    itemLinkElement.innerText = item.title;

    // create and update the title (use link as title, so title is clickable)
    let itemTitleElement = document.createElement('H2');
    itemTitleElement.appendChild(itemLinkElement);

    // create and update the description.
    // TODO: make sure the content is XSS safe before using innerHTML
    let itemDescriptionElement = document.createElement('P');
    itemDescriptionElement.innerHTML = item.description;

    // elements have been updated, lets add each to the inner container
    itemContainer.appendChild(itemTitleElement);
    itemContainer.appendChild(itemDescriptionElement);

    // lets add the inner container to outer container
    itemsContainer.appendChild(itemContainer);
  }
  let titleElement = document.createElement('H1');
  titleElement.innerText = data.feed.title;
  content.appendChild(titleElement);
  content.appendChild(itemsContainer);
}

var content = document.getElementsByTagName('content')[0];

var xhr = new XMLHttpRequest();
xhr.onload = function () {
  // Process our return data
  if (xhr.status >= 200 && xhr.status < 300) {
    json = JSON.parse(xhr.responseText)
    console.log(json)
    addRSStoDom(json)
  } else {
    // What do when the request fails
    console.log('The request failed!');
    content.innerHTML = "The request for a RSS feed failed, please check your URL";
  }
}

let addFeedButton = document.getElementById("add-feed");
let newRSSInput = document.getElementById("rss-input");

// Every time we add a task, save the task to local storage
function onAddRSSClicked(event) {
  let URL = newRSSInput.value;
  newRSSInput.value = "";
  // The following will be explained in class
  xhr.open('GET', 'https://api.rss2json.com/v1/api.json?rss_url=' + URL);
  xhr.send();
}

addFeedButton.addEventListener('click', onAddRSSClicked);



/* xhr.open('GET', 'https://api.rss2json.com/v1/api.json?rss_url=http://feeds.bbci.co.uk/news/england/london/rss.xml');
xhr.send();*/



