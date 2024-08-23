import{a as y,S as L,i as n}from"./assets/vendor-d93b82f1.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&c(p)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();const w="45488193-7ca777789e7fbcf45aeeb8195";y.defaults.baseURL="https://pixabay.com/api/";const h=async(t,e)=>{const i={params:{page:e,key:w,q:t,image_type:"photo",safesearch:!0,orientation:"horizontal",per_page:15}};return await y.get("",i)},g=t=>`<li class="gallery-card">
            <a href="${t.largeImageURL}" class="gallery-link">
              <img class="image-normal" src="${t.webformatURL}" alt="${t.tags}"/>
              <ul class="image-text">
                <li class="image-text-item">
                  <p class="key key-likes">Likes</p>
                  <p class="value value-likes">${t.likes}</p>
                </li>
                <li class="image-text-item">
                  <p class="key key-views">Viwes</p>
                  <p class="value value-views">${t.views}</p>
                </li>
                <li class="image-text-item">
                  <p class="key key-comments">Comments</p>
                  <p class="value value-comments">${t.comments}</p>
                </li>
                <li class="image-text-item">
                  <p class="key key-downloads">Downloads</p>
                  <p class="value value-downloads">${t.downloads}</p>
                </li>
              </ul>
            </a>
          </li>`,d=document.querySelector(".js-search-form"),m=document.querySelector(".js-gallery"),o=document.querySelector(".preloader-wrap"),l=document.querySelector(".js-load-more-btn");let f="",a=1,u=1,v=0;const b=new L(".js-gallery a",{captionsData:"alt",captionDelay:150}),k=async t=>{try{l.classList.add("is-visible"),o.classList.remove("is-visible"),t.preventDefault(),a=1,f=d.elements.user_query.value;const e=await h(f,a);if(u=e.data.totalHits/15,m.innerHTML="",d.reset(),e.data.hits.length===0){o.classList.add("is-visible"),n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",maxWidth:"432px",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%"});return}const i=e.data.hits.map(c=>g(c)).join("");m.innerHTML=i,v=document.querySelector(".gallery-card").getBoundingClientRect()}catch(e){n.error({title:`${e}`,position:"center",backgroundColor:"#ef4040"}),d.reset(),o.classList.add("is-visible");return}o.classList.add("is-visible"),l.classList.remove("is-visible"),b.refresh(),a+=1,Math.ceil(u)<a&&(n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),l.classList.add("is-visible"))},x=async t=>{try{o.classList.remove("is-visible");const e=await h(f,a);if(Math.ceil(u)>=a){const i=e.data.hits.map(c=>g(c)).join("");m.insertAdjacentHTML("beforeend",i),window.scrollBy({top:v.height*2,behavior:"smooth"})}l.classList.add("is-visible"),b.refresh(),o.classList.add("is-visible"),l.classList.remove("is-visible"),a+=1,Math.ceil(u)<a&&(n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),l.classList.add("is-visible"))}catch(e){n.error({title:`${e}`,position:"center",backgroundColor:"#ef4040"}),o.classList.add("is-visible")}};d.addEventListener("submit",k);l.addEventListener("click",x);
//# sourceMappingURL=commonHelpers.js.map
