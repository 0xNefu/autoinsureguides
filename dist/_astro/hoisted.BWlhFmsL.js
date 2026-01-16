import"./hoisted.D61SV-fv.js";import"./hoisted.D5eZXOcu.js";import"./hoisted.DcfxImOU.js";import"./hoisted.CkVNFFtj.js";import"./hoisted.Cen6Wm2O.js";window.dataLayer=window.dataLayer||[];function i(){dataLayer.push(arguments)}i("js",new Date);i("config","G-W77T47Y58P");window.dataLayer=window.dataLayer||[];function c(){dataLayer.push(arguments)}c("js",new Date);c("config","G-W77T47Y58P");document.addEventListener("DOMContentLoaded",()=>{const a=document.getElementById("search-input"),n=document.getElementById("search-results"),o=document.getElementById("search-container");if(!a||!n||!o){console.error("Search elements not found");return}let s=[];try{s=JSON.parse(window.searchIndex||"[]")}catch(e){console.error("Failed to parse search index:",e)}s.length===0&&console.warn("Search index is empty");function l(e){if(!e||e.length<2)return[];const r=e.toLowerCase().trim();return s.filter(t=>t?t.title?.toLowerCase().includes(r)||t.description?.toLowerCase().includes(r)||t.content?.toLowerCase().includes(r):!1)}function d(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function u(e){if(e.length===0){n.innerHTML=`
          <div class="p-6 text-center text-gray-500 dark:text-gray-400">
            No results found. Try different keywords.
          </div>
        `,n.classList.remove("hidden");return}let r=`
        <div class="p-3 text-sm text-gray-600 dark:text-gray-400 border-b dark:border-gray-700">
          Found ${e.length} ${e.length===1?"result":"results"}
        </div>
      `;e.slice(0,10).forEach(t=>{r+=`
          <a href="${d(t.url||"/")}" class="block p-4 border-b last:border-b-0 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <h3 class="font-medium text-gray-900 dark:text-white">
              ${d(t.title||"Untitled")}
            </h3>
            ${t.description?`
              <p class="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                ${d(t.description.substring(0,160))}${t.description.length>160?"...":""}
              </p>
            `:""}
          </a>
        `}),e.length>10&&(r+=`
          <div class="p-3 text-center text-sm text-gray-500 dark:text-gray-400">
            ... and ${e.length-10} more
          </div>
        `),n.innerHTML=r,n.classList.remove("hidden")}const g=((e,r)=>{let t;return(...h)=>{clearTimeout(t),t=setTimeout(()=>e(...h),r)}})(()=>{const e=a.value.trim();if(!e){n.classList.add("hidden");return}if(e.length<2){n.innerHTML='<div class="p-6 text-center text-gray-500 dark:text-gray-400">Type at least 2 characters...</div>',n.classList.remove("hidden");return}const r=l(e);u(r)},280);a.addEventListener("input",g),a.addEventListener("keydown",e=>{e.key==="Escape"&&(n.classList.add("hidden"),a.blur())}),document.addEventListener("click",e=>{o.contains(e.target)||n.classList.add("hidden")})});
