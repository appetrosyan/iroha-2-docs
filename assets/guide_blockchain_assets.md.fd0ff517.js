import{_ as e,o as t,c as s,Q as a}from"./chunks/framework.c932f925.js";const i="/iroha-2-docs/assets/asset-diagram.bc8436d9.png",f=JSON.parse('{"title":"Assets","description":"","frontmatter":{},"headers":[],"relativePath":"guide/blockchain/assets.md","lastUpdated":1682419675000}'),n={name:"guide/blockchain/assets.md"},r=a('<h1 id="assets" tabindex="-1">Assets <a class="header-anchor" href="#assets" aria-label="Permalink to &quot;Assets&quot;">​</a></h1><p>Iroha has been built with few underlying assumptions about what the assets need to be.</p><p>The assets can be <strong>fungible</strong> (every £1 is exactly the same as every other £1) or <strong>non-fungible</strong> (a £1 bill signed by the Queen of Hearts is not the same as a £1 bill signed by the King of Spades).</p><p>The assets can also be <strong>mintable</strong> (you can make more of them) and <strong>non-mintable</strong> (you can only specify their initial quantity in the <a href="/iroha-2-docs/guide/configure/genesis.html">genesis block</a>).</p><h2 id="value-types" tabindex="-1">Value Types <a class="header-anchor" href="#value-types" aria-label="Permalink to &quot;Value Types&quot;">​</a></h2><p>Additionally, the assets have different underlying value types. Specifically, we have <code>AssetValueType.Quantity</code>, which is effectively an unsigned 32-bit integer, a <code>BigQuantity</code>, which is an unsigned 128-bit integer, and <code>Fixed</code>, which is a positive (though signed) 64-bit fixed-precision number with nine significant digits after the decimal point. All three types can be registered as either <strong>mintable</strong> or <strong>non-mintable</strong>.</p><p>There is also the <code>Store</code> asset type, which is used for storing key-values in object&#39;s metadata. We talk in detail about <code>Store</code> asset in the chapter related to <a href="./metadata.html">metadata</a>.</p><h2 id="asset-structure" tabindex="-1">Asset Structure <a class="header-anchor" href="#asset-structure" aria-label="Permalink to &quot;Asset Structure&quot;">​</a></h2><p><img src="'+i+'" alt="Untitled"></p><h2 id="instructions" tabindex="-1">Instructions <a class="header-anchor" href="#instructions" aria-label="Permalink to &quot;Instructions&quot;">​</a></h2><p>Assets can be <a href="./instructions.html#un-register">registered</a>, <a href="./instructions.html#mint-burn">minted or burned</a>, and transferred.</p><p>Refer to one of the language-specific guides to walk you through the process of registering and minting assets in a blockchain:</p><ul><li><a href="/iroha-2-docs/guide/bash.html#_5-registering-and-minting-assets">Bash</a></li><li><a href="/iroha-2-docs/guide/rust.html#_5-registering-and-minting-assets">Rust</a></li><li><a href="/iroha-2-docs/guide/kotlin-java.html#_5-registering-and-minting-assets">Kotlin/Java</a></li><li><a href="/iroha-2-docs/guide/python.html#_5-registering-and-minting-assets">Python</a></li><li><a href="/iroha-2-docs/guide/javascript.html#_5-registering-and-minting-assets">JavaScript/TypeScript</a></li></ul>',13),o=[r];function h(l,c,d,u,g,p){return t(),s("div",null,o)}const b=e(n,[["render",h]]);export{f as __pageData,b as default};
