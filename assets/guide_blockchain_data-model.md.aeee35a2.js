import{_ as a,o as s,c as n,Q as e}from"./chunks/framework.c932f925.js";const t="/iroha-2-docs/assets/domains-example.72959ff8.png",i="/iroha-2-docs/assets/domain-account-asset-diagram.8da7adc0.png",b=JSON.parse('{"title":"Data Model","description":"","frontmatter":{},"headers":[],"relativePath":"guide/blockchain/data-model.md","lastUpdated":1682419675000}'),o={name:"guide/blockchain/data-model.md"},r=e(`<h1 id="data-model" tabindex="-1">Data Model <a class="header-anchor" href="#data-model" aria-label="Permalink to &quot;Data Model&quot;">​</a></h1><p>In language-specific guides we already walked you through registering domains, accounts, and assets. Here we merely wish to illustrate the relationship between various objects in the blockchain.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#adbac7;"></span></span>
<span class="line"><span style="color:#adbac7;">   +-----------------------------------------------+</span></span>
<span class="line"><span style="color:#adbac7;">   |                                               |</span></span>
<span class="line"><span style="color:#adbac7;">   |     +-----------------+                       |</span></span>
<span class="line"><span style="color:#adbac7;">   |     |Domain           |                       |</span></span>
<span class="line"><span style="color:#adbac7;">   |     +--------------+  |                       |</span></span>
<span class="line"><span style="color:#adbac7;">   |     ||Asset        |  |                       |</span></span>
<span class="line"><span style="color:#adbac7;">+--+--+  ||Definition(s)|  |                       |</span></span>
<span class="line"><span style="color:#adbac7;">|World|  +--------------+  |                       |</span></span>
<span class="line"><span style="color:#adbac7;">+--+--+  |                 |                       |</span></span>
<span class="line"><span style="color:#adbac7;">   |     +------------+    |                       |</span></span>
<span class="line"><span style="color:#adbac7;">   |     ||Account(s)||    | has   +-----------+   |</span></span>
<span class="line"><span style="color:#adbac7;">   |     |-------------------------&gt;Signatories|   |</span></span>
<span class="line"><span style="color:#adbac7;">   |     +-----------------+       +-----------+   |</span></span>
<span class="line"><span style="color:#adbac7;">   |                       |                       |</span></span>
<span class="line"><span style="color:#adbac7;">   |                       |  has  +--------+      |</span></span>
<span class="line"><span style="color:#adbac7;">   |                       +-------&gt;Asset(s)|      |</span></span>
<span class="line"><span style="color:#adbac7;">   |                               +--------+      |</span></span>
<span class="line"><span style="color:#adbac7;">   +-----------------------------------------------+</span></span>
<span class="line"><span style="color:#adbac7;"></span></span>
<span class="line"><span style="color:#adbac7;"></span></span></code></pre></div><p>The following example shows the relationship between domains, accounts, and assets.</p><p><img src="`+t+'" alt="Untitled"></p><details class="details custom-block"><summary>Language-specific guidance on registering these objects</summary><table><thead><tr><th>Language</th><th>Guide</th></tr></thead><tbody><tr><td>Bash</td><td>Register a <a href="/iroha-2-docs/guide/bash.html#_3-registering-a-domain">domain</a>, an <a href="/iroha-2-docs/guide/bash.html#_4-registering-an-account">account</a>, an <a href="/iroha-2-docs/guide/bash.html#_5-registering-and-minting-assets">asset</a></td></tr><tr><td>Rust</td><td>Register a <a href="/iroha-2-docs/guide/rust.html#_3-registering-a-domain">domain</a>, an <a href="/iroha-2-docs/guide/rust.html#_4-registering-an-account">account</a>, an <a href="/iroha-2-docs/guide/rust.html#_5-registering-and-minting-assets">asset</a></td></tr><tr><td>Kotlin/Java</td><td>Register a <a href="/iroha-2-docs/guide/kotlin-java.html#_3-registering-a-domain">domain</a>, an <a href="/iroha-2-docs/guide/kotlin-java.html#_4-registering-an-account">account</a>, an <a href="/iroha-2-docs/guide/kotlin-java.html#_5-registering-and-minting-assets">asset</a></td></tr><tr><td>Python</td><td>Register a <a href="/iroha-2-docs/guide/python.html#_3-registering-a-domain">domain</a>, an <a href="/iroha-2-docs/guide/python.html#_4-registering-an-account">account</a>, an <a href="/iroha-2-docs/guide/python.html#_5-registering-and-minting-assets">asset</a></td></tr><tr><td>JavaScript/TypeScript</td><td>Register a <a href="/iroha-2-docs/guide/javascript.html#_3-registering-a-domain">domain</a>, an <a href="/iroha-2-docs/guide/javascript.html#_4-registering-an-account">account</a>, an <a href="/iroha-2-docs/guide/javascript.html#_5-registering-and-minting-assets">asset</a></td></tr></tbody></table></details><p>The diagram below provides a more detailed illustration of the relationship between domains, accounts, and assets in the blockchain. You can learn more about <a href="./permissions.html">permissions and roles</a> and <a href="./metadata.html">metadata</a> in the corresponding sections. The asset structure is illustrated in a <a href="./assets.html">dedicated chapter</a>.</p><p><img src="'+i+'" alt="Untitled"></p>',8),c=[r];function l(d,p,h,g,m,u){return s(),n("div",null,c)}const y=a(o,[["render",l]]);export{b as __pageData,y as default};