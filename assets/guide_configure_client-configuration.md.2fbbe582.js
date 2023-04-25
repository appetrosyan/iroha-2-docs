import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.c932f925.js";const y=JSON.parse('{"title":"Client Configuration","description":"","frontmatter":{},"headers":[],"relativePath":"guide/configure/client-configuration.md","lastUpdated":1682419675000}'),e={name:"guide/configure/client-configuration.md"},t=o(`<h1 id="client-configuration" tabindex="-1">Client Configuration <a class="header-anchor" href="#client-configuration" aria-label="Permalink to &quot;Client Configuration&quot;">​</a></h1><p>Let&#39;s look at the client configuration options.</p><details class="details custom-block"><summary>Client configuration example</summary><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#ADBAC7;">{</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#8DDB8C;">&quot;PUBLIC_KEY&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#96D0FF;">&quot;ed01207233bfc89dcbd68c19fde6ce6158225298ec1131b6a130d1aeb454c1ab5183c0&quot;</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#8DDB8C;">&quot;PRIVATE_KEY&quot;</span><span style="color:#ADBAC7;">: {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;digest_function&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#96D0FF;">&quot;ed25519&quot;</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;payload&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#96D0FF;">&quot;9ac47abf59b356e0bd7dcbbbb4dec080e302156a48ca907e47cb6aea1d32719e7233bfc89dcbd68c19fde6ce6158225298ec1131b6a130d1aeb454c1ab5183c0&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">  },</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#8DDB8C;">&quot;ACCOUNT_ID&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#96D0FF;">&quot;alice@wonderland&quot;</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#8DDB8C;">&quot;BASIC_AUTH&quot;</span><span style="color:#ADBAC7;">: {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;web_login&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#96D0FF;">&quot;mad_hatter&quot;</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;password&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#96D0FF;">&quot;ilovetea&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">  },</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#8DDB8C;">&quot;TORII_API_URL&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#96D0FF;">&quot;http://127.0.0.1:8080&quot;</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#8DDB8C;">&quot;TORII_TELEMETRY_URL&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#96D0FF;">&quot;http://127.0.0.1:8180&quot;</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#8DDB8C;">&quot;TRANSACTION_TIME_TO_LIVE_MS&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">100000</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#8DDB8C;">&quot;TRANSACTION_STATUS_TIMEOUT_MS&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">15000</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#8DDB8C;">&quot;TRANSACTION_LIMITS&quot;</span><span style="color:#ADBAC7;">: {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;max_instruction_number&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">4096</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;max_wasm_size_bytes&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">4194304</span></span>
<span class="line"><span style="color:#ADBAC7;">  },</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#8DDB8C;">&quot;ADD_TRANSACTION_NONCE&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">false</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre></div></details><h2 id="generation" tabindex="-1">Generation <a class="header-anchor" href="#generation" aria-label="Permalink to &quot;Generation&quot;">​</a></h2><p>You can use <code>kagami</code> to generate the default client configuration:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F69D50;">$</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">kagami</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">config</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">client</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">&gt;</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">client-config.json</span></span>
<span class="line"></span></code></pre></div><h2 id="public-and-private-keys" tabindex="-1">Public and Private Keys <a class="header-anchor" href="#public-and-private-keys" aria-label="Permalink to &quot;Public and Private Keys&quot;">​</a></h2><p>Client configuration files should contain the pair of public (<code>PUBLIC_KEY</code>) and private (<code>PRIVATE_KEY</code>) keys for the user account (<code>ACCOUNT_ID</code>).</p><p>Refer to the chapter on public key cryptography for more details:</p><ul><li><a href="./keys.html#keys-for-deploying-a-network">Keys for Deploying a Network</a></li><li><a href="./keys.html#keys-on-the-client-side">Keys on the Client side</a></li></ul><h2 id="user-account" tabindex="-1">User account <a class="header-anchor" href="#user-account" aria-label="Permalink to &quot;User account&quot;">​</a></h2><p>The <code>ACCOUNT_ID</code> should be self-explanatory. The only thing you need to worry about is that the account must already exist in the blockchain. In other words, the account you provide here should already be <a href="/iroha-2-docs/guide/blockchain/instructions.html#un-register">registered</a>.</p><div class="info custom-block"><p class="custom-block-title">Note</p><p>Iroha is <strong>case-sensitive</strong>, meaning that <em>Alice</em>@wonderland is different from <em>alice</em>@wonderland. It should go without saying that <em>alice@wonderland</em> is not the same as <em>alice@looking_glass</em> either, since these accounts belong to different domains, <code>wonderland</code> and <code>looking_glass</code>.</p></div><h2 id="basic-authentication-credentials" tabindex="-1">Basic Authentication Credentials <a class="header-anchor" href="#basic-authentication-credentials" aria-label="Permalink to &quot;Basic Authentication Credentials&quot;">​</a></h2><p>Provide basic authentication credentials (login and password):</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#96D0FF;">&quot;BASIC_AUTH&quot;</span><span style="color:#ADBAC7;">: {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;web_login&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#96D0FF;">&quot;mad_hatter&quot;</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;password&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#96D0FF;">&quot;ilovetea&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">  },</span></span>
<span class="line"></span></code></pre></div><h2 id="iroha-public-addresses" tabindex="-1">Iroha Public Addresses <a class="header-anchor" href="#iroha-public-addresses" aria-label="Permalink to &quot;Iroha Public Addresses&quot;">​</a></h2><p><code>TORII</code> is the module in charge of handling incoming and outgoing connections. For client configuration, you can set up two addresses: <code>TORII_API_URL</code> and <code>TORII_TELEMETRY_URL</code>.</p><h3 id="torii-api-url" tabindex="-1"><code>TORII_API_URL</code> <a class="header-anchor" href="#torii-api-url" aria-label="Permalink to &quot;\`TORII_API_URL\`&quot;">​</a></h3><p>First, the <code>TORII_API_URL</code> is the same as <code>TORII</code> <code>API_URL</code> in the <a href="./peer-configuration.html#api_url">peer configuration</a>. This is the module responsible for handling incoming and outgoing connections. You should also add the prefix <code>http://</code> or (<em>preferably</em>) <code>https://</code> to the address. For example:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#96D0FF;">&quot;TORII_API_URL&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#96D0FF;">&quot;http://127.0.0.1:8080&quot;</span></span>
<span class="line"></span></code></pre></div><h3 id="torii-telemetry-url" tabindex="-1"><code>TORII_TELEMETRY_URL</code> <a class="header-anchor" href="#torii-telemetry-url" aria-label="Permalink to &quot;\`TORII_TELEMETRY_URL\`&quot;">​</a></h3><p>The <code>TORII_TELEMETRY_URL</code> is used to specify the prometheus endpoint address. You can set <code>TORII_TELEMETRY_URL</code> like this:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#96D0FF;">&quot;TORII_TELEMETRY_URL&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#96D0FF;">&quot;http://127.0.0.1:8180&quot;</span></span>
<span class="line"></span></code></pre></div><p>A <code>GET</code> request to the <code>127.0.0.1:8180/status</code> will give you a JSON-encoded representation of the top-level metrics, while a <code>GET</code> request to <code>127.0.0.1:8180/metrics</code> will give you a (somewhat verbose) list of all available metrics gathered in Iroha. You might want to change this if you&#39;re having trouble gathering metrics using <code>prometheus</code>.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Learn how to <a href="/iroha-2-docs/guide/advanced/metrics.html">monitor Iroha performance</a> using prometheus.</p></div><h2 id="transaction-limits" tabindex="-1">Transaction Limits <a class="header-anchor" href="#transaction-limits" aria-label="Permalink to &quot;Transaction Limits&quot;">​</a></h2><p>You can specify the transaction limits that each transaction must adhere to: the maximum number of instructions and the maximum size of a WASM blob (in bytes). For example:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#ADBAC7;">{</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#8DDB8C;">&quot;max_instruction_number&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">4096</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#8DDB8C;">&quot;max_wasm_size_bytes&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">4194304</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="transaction-ttl-and-timeout" tabindex="-1">Transaction TTL and Timeout <a class="header-anchor" href="#transaction-ttl-and-timeout" aria-label="Permalink to &quot;Transaction TTL and Timeout&quot;">​</a></h2><p>Configure the time-to-live (TTL) for transactions and the timeout to wait for the status. Both values have to be provided in milliseconds. For example:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#96D0FF;">&quot;TRANSACTION_TIME_TO_LIVE_MS&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">100000</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#96D0FF;">&quot;TRANSACTION_STATUS_TIMEOUT_MS&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">15000</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"></span></code></pre></div><h2 id="transaction-nonce" tabindex="-1">Transaction Nonce <a class="header-anchor" href="#transaction-nonce" aria-label="Permalink to &quot;Transaction Nonce&quot;">​</a></h2><p>If you set <code>ADD_TRANSACTION_NONCE</code> to <code>true</code>, Iroha will create different hashes for transactions that occur repeatedly and simultaneously.</p>`,34),l=[t];function c(p,i,r,d,u,A){return a(),n("div",null,l)}const C=s(e,[["render",c]]);export{y as __pageData,C as default};