const o=document.querySelector(".country-list"),n=fetch("https://restcountries.com/v3.1/name/sw").then((o=>o.json())).then((n=>{const e=n.map((o=>`<li><img src="${o.flags.svg}" alt="${o.name.common}" height="20px">${o.name.common}</li>`)).join("");o.innerHTML=e})).catch((o=>console.log(o)));console.log(n);
//# sourceMappingURL=index.d4093b80.js.map
