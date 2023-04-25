import{_ as s,o as e,c as n,Q as a}from"./chunks/framework.c932f925.js";const m=JSON.parse('{"title":"Code Snippets","description":"","frontmatter":{},"headers":[],"relativePath":"documenting/snippets.md","lastUpdated":1682419675000}'),p={name:"documenting/snippets.md"},l=a(`<h1 id="code-snippets" tabindex="-1">Code Snippets <a class="header-anchor" href="#code-snippets" aria-label="Permalink to &quot;Code Snippets&quot;">​</a></h1><p>To make code snippets in the documentation more &quot;real&quot; and robust, it is better to fetch them directly from the source files. The sources are located in other repositories, where they are built, run, and tested.</p><h2 id="how-it-works" tabindex="-1">How it works <a class="header-anchor" href="#how-it-works" aria-label="Permalink to &quot;How it works&quot;">​</a></h2><h3 id="snippet-sources" tabindex="-1">Snippet Sources <a class="header-anchor" href="#snippet-sources" aria-label="Permalink to &quot;Snippet Sources&quot;">​</a></h3><p>Snippet sources are defined in <a href="https://github.com/hyperledger/iroha-2-docs/blob/main/etc/snippet_sources.ts" target="_blank" rel="noreferrer"><code>snippet_sources.ts</code></a>. The <code>snippet_sources.ts</code> file is located at the documentation repository and has the following format:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F47067;">export</span><span style="color:#F69D50;"> </span><span style="color:#F47067;">default</span><span style="color:#F69D50;"> [</span></span>
<span class="line"><span style="color:#F69D50;">  {</span></span>
<span class="line"><span style="color:#F69D50;">    </span><span style="color:#ADBAC7;">src: </span><span style="color:#96D0FF;">&#39;https://raw.githubusercontent.com/hyperledger/iroha/iroha2-stable/MAINTAINERS.md&#39;</span><span style="color:#F69D50;">,</span></span>
<span class="line"><span style="color:#F69D50;">    </span><span style="color:#ADBAC7;">filename: </span><span style="color:#96D0FF;">&#39;iroha-maintainers-at-stable.md&#39;</span><span style="color:#F69D50;">,</span></span>
<span class="line"><span style="color:#F69D50;">  },</span></span>
<span class="line"><span style="color:#F69D50;">  {</span></span>
<span class="line"><span style="color:#F69D50;">    </span><span style="color:#ADBAC7;">src: </span><span style="color:#96D0FF;">&#39;./src/example_code/lorem.rs&#39;</span><span style="color:#F69D50;">,</span></span>
<span class="line"><span style="color:#F69D50;">  },</span></span>
<span class="line"><span style="color:#F69D50;">]</span></span>
<span class="line"></span></code></pre></div><ul><li><code>src</code> defines the source file location and could be either an HTTP(s) URI or a relative file path.</li><li><code>filename</code> (optional) explicitly defines the local filename.</li></ul><h3 id="fetching-snippets" tabindex="-1">Fetching Snippets <a class="header-anchor" href="#fetching-snippets" aria-label="Permalink to &quot;Fetching Snippets&quot;">​</a></h3><p>Code snippets are fetched from the locations specified in <code>snippet_sources.ts</code> and written into the <code>/src/snippets</code> directory. There are two ways to fetch the snippets:</p><ul><li>Automatically after dependencies were installed (i.e. <code>pnpm install</code>)</li><li>Manually by calling <code>pnpm get-snippets</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>By default, snippets are deleted and reloaded each time <code>pnpm get-snippets</code> is called. For local development it might be more convenient to enable &quot;lazy&quot; behavior by calling <code>pnpm get-snippets --force false</code>.</p></div><h3 id="using-snippets-in-markdown" tabindex="-1">Using Snippets in Markdown <a class="header-anchor" href="#using-snippets-in-markdown" aria-label="Permalink to &quot;Using Snippets in Markdown&quot;">​</a></h3><p>Use <a href="https://vitepress.vuejs.org/guide/markdown#import-code-snippets" target="_blank" rel="noreferrer">Code Snippets feature in VitePress</a> to include snippets into documentation:</p><p><strong>Input</strong></p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#ADBAC7;">&lt;&lt;&lt;@/snippets/lorem.rs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">&lt;&lt;&lt;@/snippets/lorem.rs#ipsum</span></span>
<span class="line"></span></code></pre></div><p><strong>Output</strong></p><div class="language-rs"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F47067;">fn</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">main</span><span style="color:#ADBAC7;">() {</span></span>
<span class="line"><span style="color:#768390;">    // #region ipsum</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">println!</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;Lorem ipsum&quot;</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#768390;">    // #endregion ipsum</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-rs"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#DCBDFB;">println!</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;Lorem ipsum&quot;</span><span style="color:#ADBAC7;">);</span></span></code></pre></div><p>Note that we included only the <code>#ipsum</code> code region, not the entire file. This feature is essential when it comes to including code from real source files into the documentation.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p>Let&#39;s add a code snippet from Iroha JavaScript SDK. For example, this one: <a href="https://github.com/hyperledger/iroha-javascript/blob/e300886e76c777776efad1e2f5cb245bfb8ed02e/packages/docs-recipes/src/1.client-install.ts" target="_blank" rel="noreferrer"><code>/packages/docs-recipes/src/1.client-install.ts</code></a>.</p><ol><li><p>First, get a permalink to the file. Open the file on GitHub and click <code>Raw</code> button to get the link. For example: <a href="https://raw.githubusercontent.com/hyperledger/iroha-javascript/e300886e76c777776efad1e2f5cb245bfb8ed02e/packages/docs-recipes/src/1.client-install.ts" target="_blank" rel="noreferrer">https://raw.githubusercontent.com/hyperledger/iroha-javascript/e300886e76c777776efad1e2f5cb245bfb8ed02e/packages/docs-recipes/src/1.client-install.ts</a></p></li><li><p>Define the new snippet in the <a href="#snippet-sources">Snippet Sources</a>:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F47067;">export</span><span style="color:#F69D50;"> </span><span style="color:#F47067;">default</span><span style="color:#F69D50;"> [</span></span>
<span class="line"><span style="color:#F69D50;">  </span><span style="color:#768390;">/// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F69D50;">  {</span></span>
<span class="line"><span style="color:#F69D50;">    </span><span style="color:#ADBAC7;">src: </span><span style="color:#96D0FF;">&#39;https://raw.githubusercontent.com/hyperledger/iroha-javascript/e300886e76c777776efad1e2f5cb245bfb8ed02e/packages/docs-recipes/src/1.client-install.ts&#39;</span><span style="color:#F69D50;">,</span></span>
<span class="line"><span style="color:#F69D50;">    </span><span style="color:#ADBAC7;">filename: </span><span style="color:#96D0FF;">&#39;js-sdk-1-client-install.ts&#39;</span><span style="color:#F69D50;">,</span></span>
<span class="line"><span style="color:#F69D50;">  },</span></span>
<span class="line"><span style="color:#F69D50;">]</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Since <code>snippet_sources.ts</code> is a TypeScript file, we can use all scripting features in it. Meanwhile, we are trying to keep it as simple as possible, so even the one who doesn&#39;t know TypeScript at all could edit it.</p><p>However, we use <em>a bit</em> of scripting. We defined several constants with git revisions from multiple repositories:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F47067;">const</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">IROHA_REV_STABLE</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&#39;c4af68c4f7959b154eb5380aa93c894e2e63fe4e&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F47067;">const</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">IROHA_REV_DEV</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&#39;...&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F47067;">const</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">IROHA_JS_REV</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&#39;...&#39;</span></span>
<span class="line"></span></code></pre></div><p>Then we use them in links to snippet sources in place of git revisions, like this:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F47067;">export</span><span style="color:#F69D50;"> </span><span style="color:#F47067;">default</span><span style="color:#F69D50;"> [</span></span>
<span class="line"><span style="color:#F69D50;">  </span><span style="color:#768390;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F69D50;">  {</span></span>
<span class="line"><span style="color:#F69D50;">    </span><span style="color:#ADBAC7;">src: </span><span style="color:#96D0FF;">\`https://raw.githubusercontent.com/hyperledger/iroha/\${</span><span style="color:#6CB6FF;">IROHA_REV_STABLE</span><span style="color:#96D0FF;">}/MAINTAINERS.md\`</span><span style="color:#F69D50;">,</span></span>
<span class="line"><span style="color:#F69D50;">    </span><span style="color:#768390;">//                                                        ^^^^^^^^^^^^^^^^^^^</span></span>
<span class="line"><span style="color:#F69D50;">    </span><span style="color:#ADBAC7;">filename: </span><span style="color:#96D0FF;">&#39;iroha-maintainers-at-stable.md&#39;</span><span style="color:#F69D50;">,</span></span>
<span class="line"><span style="color:#F69D50;">  },</span></span>
<span class="line"><span style="color:#F69D50;">]</span></span>
<span class="line"></span></code></pre></div><p>It helps us to reduce repetitions and keep sources clean.</p></div></li><li><p><a href="#using-snippets-in-markdown">Include</a> the snippet in any Markdown file in the documentation as follows:</p><p><strong>Input</strong></p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#ADBAC7;">&lt;&lt;&lt;@/snippets/js-sdk-1-client-install.ts</span></span>
<span class="line"></span></code></pre></div><p><strong>Output</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F47067;">import</span><span style="color:#ADBAC7;"> { crypto } </span><span style="color:#F47067;">from</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&#39;@iroha2/crypto-target-node&#39;</span></span>
<span class="line"><span style="color:#F47067;">import</span><span style="color:#ADBAC7;"> { setCrypto } </span><span style="color:#F47067;">from</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&#39;@iroha2/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCBDFB;">setCrypto</span><span style="color:#ADBAC7;">(crypto)</span></span>
<span class="line"></span></code></pre></div></li></ol>`,22),o=[l];function t(c,i,r,d,y,u){return e(),n("div",null,o)}const g=s(p,[["render",t]]);export{m as __pageData,g as default};