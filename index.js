import{a as d,S as m,i as a}from"./assets/vendor-B4VkUtbg.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const f="57978423-e1008c624701cdcff1b93f2bb",p="https://pixabay.com/api/";function g(o){const r={key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(p,{params:r}).then(i=>i.data)}const l=document.querySelector(".loader"),u=document.querySelector(".gallery"),y=({webformatURL:o,largeImageURL:r,tags:i,likes:n,views:e,comments:t,downloads:s})=>`<li class="gallery-item">
      <div class="gallery-img">
        <a class="gallery-link" href="${r}">
          <img class="gallery-image"
               src="${o}"
               alt="${i}" />
        </a>
      </div>
      <div class="gallery-img-info">
        <div>
          <b>Likes</b>
          <span>${n}</span>
        </div>
        <div>
          <b>Views</b>
          <span>${e}</span>
        </div>
        <div>
          <b>Comments</b>
          <span>${t}</span>
        </div>
        <div>
          <b>Downloads</b>
          <span>${s}</span>
        </div>
      </div>
    </li>`,h=new m(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});function b(o){const r=o.map(y).join("");u.insertAdjacentHTML("beforeend",r),h.refresh()}function v(){u.innerHTML=""}function L(){l.classList.add("is-visible")}function S(){l.classList.remove("is-visible")}const c=document.querySelector(".form");c.addEventListener("submit",P);function P(o){o.preventDefault();const r=c.elements["search-text"].value.trim();if(r.length===0){a.error({title:"Error",message:"Query can not be empty!",position:"center"});return}v(),L(),g(r).then(i=>{if(i.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"center"});return}b(i.hits)}).catch(i=>{a.error({message:`Something went wrong: ${i.message}`,position:"topRight"})}).finally(()=>{S(),c.reset()})}
//# sourceMappingURL=index.js.map
