import{a as d,S as m,i as a}from"./assets/vendor-B4VkUtbg.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const f="57978423-e1008c624701cdcff1b93f2bb",p="https://pixabay.com/api/";function y(n){const t={key:f,q:n,orientation:"horizontal",safesearch:!0};return d.get(p,{params:t}).then(o=>o.data)}const c=document.querySelector(".loader"),u=document.querySelector(".gallery"),g=({webformatURL:n,largeImageURL:t,tags:o,likes:i,views:e,comments:r,downloads:s})=>`<li class="gallery-item">
      <div class="gallery-img">
        <a class="gallery-link" href="${t}">
          <img class="gallery-image"
               src="${n}"
               alt="${o}" />
        </a>
      </div>
      <div class="gallery-img-info">
        <div>
          <b>Likes</b>
          <span>${i}</span>
        </div>
        <div>
          <b>Views</b>
          <span>${e}</span>
        </div>
        <div>
          <b>Comments</b>
          <span>${r}</span>
        </div>
        <div>
          <b>Downloads</b>
          <span>${s}</span>
        </div>
      </div>
    </li>`,h=new m(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});function b(n){const t=n.map(g).join("");console.log(t),u.insertAdjacentHTML("beforeend",t),h.refresh()}function v(){u.innerHTML=""}function L(){c.style.display="block"}function S(){c.style.display="none"}const l=document.querySelector(".form");l.addEventListener("submit",P);function P(n){n.preventDefault();const t=l.elements["search-text"].value.trim();if(t.length===0){a.error({title:"Error",message:"Query can not be empty!",position:"center"});return}v(),L(),y(t).then(o=>{if(o.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"center"});return}b(o.hits)}).catch(o=>{a.error({message:`Something went wrong: ${o.message}`,position:"topRight"})}).finally(()=>{S(),l.reset()})}
//# sourceMappingURL=index.js.map
