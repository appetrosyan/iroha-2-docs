import{_ as e,o,c as s,Q as t}from"./chunks/framework.c932f925.js";const m=JSON.parse('{"title":"Expressions, Conditionals, Logic","description":"","frontmatter":{},"headers":[],"relativePath":"guide/blockchain/expressions.md","lastUpdated":1682419675000}'),a={name:"guide/blockchain/expressions.md"},i=t('<h1 id="expressions-conditionals-logic" tabindex="-1">Expressions, Conditionals, Logic <a class="header-anchor" href="#expressions-conditionals-logic" aria-label="Permalink to &quot;Expressions, Conditionals, Logic&quot;">​</a></h1><p>All <a href="./instructions.html">Iroha Special Instructions</a> operate on expressions. Each expression has an <code>EvaluatesTo</code>, which is used in instruction execution. While you could specify the account name directly, you could also specify the account ID via some mathematical or string operation. You can check if an account is registered on the blockchain too.</p><p>Using expressions that implement <code>EvaluatesTo&lt;bool&gt;</code>, you can set up conditional logic and execute more sophisticated operations on-chain. For example, you can submit a <code>Mint</code> instruction only if a specific account is registered.</p><p>Recall that you can combine this with queries, and as such can program the blockchain to do some amazing stuff. This is what we refer to as <em>smart contracts</em>, the defining feature of the advanced usage of blockchain technology.</p>',4),n=[i];function c(r,l,d,h,p,u){return o(),s("div",null,n)}const f=e(a,[["render",c]]);export{m as __pageData,f as default};
