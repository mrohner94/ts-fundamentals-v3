(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7],{4887:function(e,t){"use strict";t.i=void 0;var n=function(){var e=document.getElementById("twoslash-mouse-hover-info");e&&(e.style.display="none")},l=function e(t){return"pre"===t.nodeName.toLowerCase()?t.getBoundingClientRect():e(t.parentElement)},a=function(e){var t=e.target;if("DATA-LSP"!==t.nodeName)return n();var a,r,i,o,s=t.getAttribute("lsp"),c=(a=t,r=document.body.getBoundingClientRect(),{top:(i=a.getBoundingClientRect()).top-r.top,left:i.left-r.left}),m=((o=document.getElementById("twoslash-mouse-hover-info"))||((o=document.createElement("div")).style.position="absolute",o.id="twoslash-mouse-hover-info",document.body.appendChild(o)),o),d=document.createElement("textarea");d.innerHTML=s,m.textContent=d.value;m.style.display="block",m.style.top=c.top+20+"px",m.style.left=c.left+"px";var u=l(t),E=c.left-u.x;m.style.maxWidth=u.width-E+"px"};t.i=function(){var e=document.querySelectorAll(".shiki.lsp .code-container code");return e.forEach((function(e){e.addEventListener("mouseover",a),e.addEventListener("mouseout",n)})),function(){e.forEach((function(e){e.removeEventListener("mouseover",a),e.removeEventListener("mouseout",n)}))}}},2466:function(e,t,n){"use strict";var l=n(2784),a=n(8447),r=n(6376);t.Z=function(e){var t,n=e.location,i=e.title,o=e.children;return t="/"===n.pathname?l.createElement("h1",{style:Object.assign({},(0,r.bA)(1.5),{marginBottom:(0,r.qZ)(1.5),marginTop:0})},l.createElement(a.Link,{style:{boxShadow:"none",color:"inherit"},to:"/"},i)):l.createElement("h3",{style:{marginTop:0}},l.createElement(a.Link,{style:{boxShadow:"none",color:"inherit"},to:"/"},i)),l.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:(0,r.qZ)(24),padding:(0,r.qZ)(1.5)+" "+(0,r.qZ)(3/4)}},l.createElement("header",null,t),l.createElement("main",null,o),l.createElement("footer",null,"© ",(new Date).getFullYear()," All Rights Reserved"))}},3958:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var l=n(2784),a=n(8447),r=n(745),i=n(2466),o=function(e){var t="https://github.com/mike-north/ts-fundamentals-v3/edit/main/packages/website/content/blog/"+e.chapter.replace("/course","").substr(1)+"index.md";return l.createElement("a",{href:t,target:"_blank"},l.createElement("div",{className:"edit-on-github-link"},l.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg==",alt:"GitHub"}),"Edit on GitHub"))},s=n(8977),c=n(6376),m=n(4887);var d=function(e){var t=e.data,n=e.pageContext,d=e.location,u=t.markdownRemark,E=t.site.siteMetadata.title,p=n.previous,g=n.next;(0,l.useEffect)(m.i,[]);var A,f=(A=u.html)&&A.replace(/<a href='https:\/\/www.typescriptlang/g,"<a class='try-code-link' target=\"_blank\" href='https://www.typescriptlang");console.log(u);var b=t.site.siteMetadata.courses.find((function(e){return e.id===u.frontmatter.course}));if(!b)throw new Error("Undefined course: "+u.frontmatter.course);var h=!!u.tableOfContents&&""!==u.tableOfContents.trim()?l.createElement("div",{className:"post-toc"},l.createElement("div",{className:"post-toc__title"},"Table of Contents"),l.createElement("section",{className:"post-toc__content",dangerouslySetInnerHTML:{__html:u.tableOfContents}})):"";return l.createElement(i.Z,{location:d,title:E},l.createElement(s.Z,{title:u.frontmatter.title,description:u.frontmatter.description||u.excerpt}),l.createElement("article",{className:"blog-post"},l.createElement("header",null,l.createElement(a.Link,{style:{marginTop:(0,c.qZ)(1),marginBottom:0},to:"/course/"+b.id,rel:"next",className:"course-title-link"},l.createElement("span",{className:"course-title"},b.title)),l.createElement(o,{chapter:u.fields.slug}),l.createElement("h1",{className:"post-title"},u.frontmatter.title),l.createElement("p",{style:Object.assign({},(0,c.bA)(-.2),{display:"block",marginBottom:(0,c.qZ)(1)})},u.frontmatter.date)),l.createElement("nav",null,l.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},l.createElement("li",null,p&&p.fields&&l.createElement(a.Link,{to:p.fields.slug,rel:"prev"},"← ",p.frontmatter.title)),l.createElement("li",null,g&&g.fields&&l.createElement(a.Link,{to:g.fields.slug,rel:"next"},g.frontmatter.title," →")))),h,l.createElement("section",{className:"post-body",dangerouslySetInnerHTML:{__html:f}}),l.createElement("hr",{style:{marginBottom:(0,c.qZ)(1)}}),l.createElement("nav",null,l.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},l.createElement("li",null,p&&p.fields&&l.createElement(a.Link,{to:p.fields.slug,rel:"prev"},"← ",p.frontmatter.title)),l.createElement("li",null,g&&g.fields&&l.createElement(a.Link,{to:g.fields.slug,rel:"next"},g.frontmatter.title," →")))),l.createElement("hr",{style:{marginBottom:(0,c.qZ)(1)}}),l.createElement("footer",null,l.createElement(r.Z,null))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-317b21de21f246687b22.js.map