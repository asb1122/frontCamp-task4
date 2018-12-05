import {ErrorHandler} from "./ErrorHandler.ts";
import {getNewsItems} from "./NewsSource";

const newsBar = document.getElementById('news-bar');

function getNewsSources(apiKey) {
    fetch("https://newsapi.org/v2/sources?apiKey=" + apiKey)
        .then(response => {
            response.json().then(data => {
                for (let source of data.sources) {
                    let sourcesLink = document.createElement('div');
                    let sourceId = source.id;
                    sourcesLink.setAttribute('id', sourceId);
                    sourcesLink.setAttribute('tabindex', '0');
                    sourcesLink.textContent = source.name;
                    sourcesLink.onclick = e => {
                        getNewsItems(sourceId, apiKey);
                    }
                    newsBar.appendChild(sourcesLink);
                }
            });
        })
        .catch(err => {
            ErrorHandler.instance(err).handle("Please reload page");
        });
}

export {getNewsSources}
