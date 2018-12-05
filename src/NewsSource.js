'use strict';

import {ErrorHandler} from "./ErrorHandler.ts";
import {sendRequest} from "./RequestFactory";

function getNewsItems(sourceId, apiKey){
        sendRequest("https://newsapi.org/v2/top-headlines?sources=" + sourceId + "&apiKey=" + apiKey, "GET", null)
            .then(response =>  {
                response.json().then(data =>  {
                    const newsList = document.getElementsByClassName("news-item");
                    const NEWS_CONTAINER = document.getElementById('news-wrapp');
                    for(let i = newsList.length - 1; 0 <= i; i--){
                        if(newsList[i] && newsList[i].parentElement){ƒ
                            newsList[i].parentElement.removeChild(newsList[i]);
                        }
                    }

                    for(let news of data.articles) {
                        let newsItem = document.createElement("div");
                        let newsTitle = document.createElement("h3");
                        let author = document.createElement("p");
                        let newsContant = document.createElement("div");
                        let goToButton = document.createElement("a");
                        let urlLink = news.url;

                        newsItem.setAttribute('id', 'news-item');
                        newsItem.classList.add('news-item');
                        author.classList.add('news-author');
                        newsContant.classList.add('news-content');
                        goToButton.setAttribute('href', urlLink);
                        goToButton.setAttribute('target', 'blank');
                        goToButton.classList.add('to-news-button');

                        newsTitle.textContent = news.title;
                        newsContant.textContent = news.description;
                        newsItem.style.backgroundImage = "url(" + news.urlToImage + ")";
                        author.textContent = news.author;
                        goToButton.textContent = "Read more...";

                        newsItem.appendChild(newsTitle);
                        newsItem.appendChild(author);
                        newsItem.appendChild(newsContant);
                        newsContant.appendChild(goToButton);
                        NEWS_CONTAINER.appendChild(newsItem);
                    }
                });
            })
            .catch(err =>  {
                ErrorHandler.instance(err).handle("Please reload page");
            });
}

export {getNewsItems}

