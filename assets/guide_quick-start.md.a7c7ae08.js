import{_ as a,o as s,c as o,Q as n}from"./chunks/framework.c932f925.js";const k=JSON.parse('{"title":"Quick Start with Docker","description":"","frontmatter":{},"headers":[],"relativePath":"guide/quick-start.md","lastUpdated":1682419675000}'),l={name:"guide/quick-start.md"},p=n(`<h1 id="quick-start-with-docker" tabindex="-1">Quick Start with Docker <a class="header-anchor" href="#quick-start-with-docker" aria-label="Permalink to &quot;Quick Start with Docker&quot;">​</a></h1><ol><li><p>Install the prerequisites:</p><ul><li><a href="https://docs.docker.com/get-docker/" target="_blank" rel="noreferrer">Docker</a></li><li><a href="https://docs.docker.com/compose/" target="_blank" rel="noreferrer">Docker compose</a></li></ul></li><li><p><a href="./install.html">Install Iroha from GitHub</a>.</p></li><li><p>Run <code>docker-compose</code> to bring up a network of 4 containerised peers:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F69D50;">$</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">docker-compose</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">up</span></span>
<span class="line"></span></code></pre></div><p>Depending on your set-up, this might either <a href="https://hub.docker.com/r/hyperledger/iroha2/tags" target="_blank" rel="noreferrer">pull the image</a> off of DockerHub, or build the container locally. After this process is complete, you&#39;ll be greeted with,</p><div class="language-ansi"><button title="Copy Code" class="copy"></button><span class="lang">ansi</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#adbac7;">[+] Running 4/0</span></span>
<span class="line"><span style="color:#539bf5;"> ⠿ Container iroha-iroha2-1  Created                                         0.0s</span></span>
<span class="line"><span style="color:#539bf5;"> ⠿ Container iroha-iroha0-1  Created                                         0.0s</span></span>
<span class="line"><span style="color:#539bf5;"> ⠿ Container iroha-iroha3-1  Created                                         0.0s</span></span>
<span class="line"><span style="color:#539bf5;"> ⠿ Container iroha-iroha1-1  Created                                         0.0s</span></span>
<span class="line"><span style="color:#adbac7;">Attaching to iroha-iroha0-1, iroha-iroha1-1, iroha-iroha2-1, iroha-iroha3-1</span></span>
<span class="line"><span style="color:#c69026;">iroha-iroha1-1  | </span><span style="color:#adbac780;">2023-02-27T12:43:08.540651Z</span><span style="color:#adbac7;"> </span><span style="color:#57ab5a;"> INFO</span><span style="color:#adbac7;"> </span><span style="color:#adbac780;">iroha:</span><span style="color:#adbac7;"> Hyperledgerいろは2にようこそ！</span></span>
<span class="line"><span style="color:#c69026;">iroha-iroha1-1  | </span><span style="color:#adbac780;">2023-02-27T12:43:08.542379Z</span><span style="color:#adbac7;"> </span><span style="color:#57ab5a;"> INFO</span><span style="color:#adbac7;"> </span><span style="color:#adbac780;">iroha:</span><span style="color:#adbac7;"> (translation) Welcome to Hyperledger Iroha 2!</span></span>
<span class="line"><span style="color:#c69026;">iroha-iroha1-1  | </span><span style="color:#adbac780;">2023-02-27T12:43:08.542906Z</span><span style="color:#adbac7;"> </span><span style="color:#57ab5a;"> INFO</span><span style="color:#adbac7;"> </span><span style="color:#adbac780;">iroha:</span><span style="color:#adbac7;"> Starting peer </span><span style="color:#adbac7;font-style:italic;">listen_addr</span><span style="color:#adbac780;">=</span><span style="color:#adbac7;">iroha1:1338</span></span>
<span class="line"><span style="color:#c69026;">iroha-iroha1-1  | </span><span style="color:#adbac780;">2023-02-27T12:43:08.543188Z</span><span style="color:#adbac7;"> </span><span style="color:#57ab5a;"> INFO</span><span style="color:#adbac7;"> </span><span style="color:#adbac780;">iroha_p2p::network:</span><span style="color:#adbac7;"> Binding listener </span><span style="color:#adbac7;font-style:italic;">listen_addr</span><span style="color:#adbac780;">=</span><span style="color:#adbac7;">iroha1:1338</span></span>
<span class="line"><span style="color:#c69026;">iroha-iroha1-1  | </span><span style="color:#adbac780;">2023-02-27T12:43:08.551356Z</span><span style="color:#adbac7;"> </span><span style="color:#57ab5a;"> INFO</span><span style="color:#adbac7;"> </span><span style="color:#adbac780;">iroha_p2p::network:</span><span style="color:#adbac7;"> Starting network actor </span><span style="color:#adbac7;font-style:italic;">listen_addr</span><span style="color:#adbac780;">=</span><span style="color:#adbac7;">iroha1:1338</span></span>
<span class="line"><span style="color:#c69026;">iroha-iroha1-1  | </span><span style="color:#adbac780;">2023-02-27T12:43:08.569289Z</span><span style="color:#adbac7;"> </span><span style="color:#57ab5a;"> INFO</span><span style="color:#adbac7;"> </span><span style="color:#adbac780;">iroha_core::kura:</span><span style="color:#adbac7;"> Loaded 0 blocks at init.</span></span>
<span class="line"><span style="color:#c69026;">iroha-iroha1-1  | </span><span style="color:#adbac780;">2023-02-27T12:43:08.572457Z</span><span style="color:#adbac7;"> </span><span style="color:#f47067;">ERROR</span><span style="color:#adbac7;"> </span><span style="color:#adbac780;">iroha:</span><span style="color:#adbac7;"> Telemetry did not start</span></span>
<span class="line"><span style="color:#c69026;">iroha-iroha1-1  | </span><span style="color:#adbac780;">2023-02-27T12:43:08.594190Z</span><span style="color:#adbac7;"> </span><span style="color:#57ab5a;"> INFO</span><span style="color:#adbac7;"> </span><span style="color:#adbac780;">iroha:</span><span style="color:#adbac7;"> Starting Iroha</span></span>
<span class="line"><span style="color:#57ab5a;">iroha-iroha2-1  | </span><span style="color:#adbac780;">2023-02-27T12:43:08.698491Z</span><span style="color:#adbac7;"> </span><span style="color:#57ab5a;"> INFO</span><span style="color:#adbac7;"> </span><span style="color:#adbac780;">iroha:</span><span style="color:#adbac7;"> Hyperledgerいろは2にようこそ！</span></span>
<span class="line"><span style="color:#57ab5a;">iroha-iroha2-1  | </span><span style="color:#adbac780;">2023-02-27T12:43:08.700998Z</span><span style="color:#adbac7;"> </span><span style="color:#57ab5a;"> INFO</span><span style="color:#adbac7;"> </span><span style="color:#adbac780;">iroha:</span><span style="color:#adbac7;"> (translation) Welcome to Hyperledger Iroha 2!</span></span>
<span class="line"><span style="color:#57ab5a;">iroha-iroha2-1  | </span><span style="color:#adbac780;">2023-02-27T12:43:08.701624Z</span><span style="color:#adbac7;"> </span><span style="color:#57ab5a;"> INFO</span><span style="color:#adbac7;"> </span><span style="color:#adbac780;">iroha:</span><span style="color:#adbac7;"> Starting peer </span><span style="color:#adbac7;font-style:italic;">listen_addr</span><span style="color:#adbac780;">=</span><span style="color:#adbac7;">iroha2:1339</span></span>
<span class="line"><span style="color:#57ab5a;">iroha-iroha2-1  | </span><span style="color:#adbac780;">2023-02-27T12:43:08.701895Z</span><span style="color:#adbac7;"> </span><span style="color:#57ab5a;"> INFO</span><span style="color:#adbac7;"> </span><span style="color:#adbac780;">iroha_p2p::network:</span><span style="color:#adbac7;"> Binding listener </span><span style="color:#adbac7;font-style:italic;">listen_addr</span><span style="color:#adbac780;">=</span><span style="color:#adbac7;">iroha2:1339</span></span>
<span class="line"><span style="color:#57ab5a;">iroha-iroha2-1  | </span><span style="color:#adbac780;">2023-02-27T12:43:08.707759Z</span><span style="color:#adbac7;"> </span><span style="color:#57ab5a;"> INFO</span><span style="color:#adbac7;"> </span><span style="color:#adbac780;">iroha_p2p::network:</span><span style="color:#adbac7;"> Starting network actor </span><span style="color:#adbac7;font-style:italic;">listen_addr</span><span style="color:#adbac780;">=</span><span style="color:#adbac7;">iroha2:1339</span></span>
<span class="line"><span style="color:#39c5cf;">iroha-iroha0-1  | </span><span style="color:#adbac780;">2023-02-27T12:43:08.719683Z</span><span style="color:#adbac7;"> </span><span style="color:#57ab5a;"> INFO</span><span style="color:#adbac7;"> </span><span style="color:#adbac780;">iroha:</span><span style="color:#adbac7;"> Hyperledgerいろは2にようこそ！</span></span>
<span class="line"><span style="color:#39c5cf;">iroha-iroha0-1  | </span><span style="color:#adbac780;">2023-02-27T12:43:08.722029Z</span><span style="color:#adbac7;"> </span><span style="color:#57ab5a;"> INFO</span><span style="color:#adbac7;"> </span><span style="color:#adbac780;">iroha:</span><span style="color:#adbac7;"> (translation) Welcome to Hyperledger Iroha 2!</span></span>
<span class="line"><span style="color:#57ab5a;">iroha-iroha2-1  | </span><span style="color:#adbac780;">2023-02-27T12:43:08.730201Z</span><span style="color:#adbac7;"> </span><span style="color:#57ab5a;"> INFO</span><span style="color:#adbac7;"> </span><span style="color:#adbac780;">iroha_core::kura:</span><span style="color:#adbac7;"> Loaded 1 blocks at init.</span></span>
<span class="line"><span style="color:#57ab5a;">iroha-iroha2-1  | </span><span style="color:#adbac780;">2023-02-27T12:43:08.746975Z</span><span style="color:#adbac7;"> </span><span style="color:#f47067;">ERROR</span><span style="color:#adbac7;"> </span><span style="color:#adbac780;">iroha:</span><span style="color:#adbac7;"> Telemetry did not start</span></span>
<span class="line"><span style="color:#39c5cf;">iroha-iroha0-1  | </span><span style="color:#adbac780;">2023-02-27T12:43:08.748879Z</span><span style="color:#adbac7;"> </span><span style="color:#57ab5a;"> INFO</span><span style="color:#adbac7;"> </span><span style="color:#adbac780;">iroha:</span><span style="color:#adbac7;"> Starting peer </span><span style="color:#adbac7;font-style:italic;">listen_addr</span><span style="color:#adbac780;">=</span><span style="color:#adbac7;">iroha0:1337</span></span>
<span class="line"><span style="color:#39c5cf;">iroha-iroha0-1  | </span><span style="color:#adbac780;">2023-02-27T12:43:08.749155Z</span><span style="color:#adbac7;"> </span><span style="color:#57ab5a;"> INFO</span><span style="color:#adbac7;"> </span><span style="color:#adbac780;">iroha_p2p::network:</span><span style="color:#adbac7;"> Binding listener </span><span style="color:#adbac7;font-style:italic;">listen_addr</span><span style="color:#adbac780;">=</span><span style="color:#adbac7;">iroha0:1337</span></span>
<span class="line"><span style="color:#39c5cf;">iroha-iroha0-1  | </span><span style="color:#adbac780;">2023-02-27T12:43:08.754613Z</span><span style="color:#adbac7;"> </span><span style="color:#57ab5a;"> INFO</span><span style="color:#adbac7;"> </span><span style="color:#adbac780;">iroha_p2p::network:</span><span style="color:#adbac7;"> Starting network actor </span><span style="color:#adbac7;font-style:italic;">listen_addr</span><span style="color:#adbac780;">=</span><span style="color:#adbac7;">iroha0:1337</span></span>
<span class="line"><span style="color:#b083f0;">iroha-iroha3-1  | </span><span style="color:#adbac780;">2023-02-27T12:43:08.753230Z</span><span style="color:#adbac7;"> </span><span style="color:#57ab5a;"> INFO</span><span style="color:#adbac7;"> </span><span style="color:#adbac780;">iroha:</span><span style="color:#adbac7;"> Hyperledgerいろは2にようこそ！</span></span>
<span class="line"><span style="color:#b083f0;">iroha-iroha3-1  | </span><span style="color:#adbac780;">2023-02-27T12:43:08.754934Z</span><span style="color:#adbac7;"> </span><span style="color:#57ab5a;"> INFO</span><span style="color:#adbac7;"> </span><span style="color:#adbac780;">iroha:</span><span style="color:#adbac7;"> (translation) Welcome to Hyperledger Iroha 2!</span></span>
<span class="line"><span style="color:#b083f0;">iroha-iroha3-1  | </span><span style="color:#adbac780;">2023-02-27T12:43:08.755503Z</span><span style="color:#adbac7;"> </span><span style="color:#57ab5a;"> INFO</span><span style="color:#adbac7;"> </span><span style="color:#adbac780;">iroha:</span><span style="color:#adbac7;"> Starting peer </span><span style="color:#adbac7;font-style:italic;">listen_addr</span><span style="color:#adbac780;">=</span><span style="color:#adbac7;">iroha3:1340</span></span>
<span class="line"><span style="color:#b083f0;">iroha-iroha3-1  | </span><span style="color:#adbac780;">2023-02-27T12:43:08.755802Z</span><span style="color:#adbac7;"> </span><span style="color:#57ab5a;"> INFO</span><span style="color:#adbac7;"> </span><span style="color:#adbac780;">iroha_p2p::network:</span><span style="color:#adbac7;"> Binding listener </span><span style="color:#adbac7;font-style:italic;">listen_addr</span><span style="color:#adbac780;">=</span><span style="color:#adbac7;">iroha3:1340</span></span>
<span class="line"><span style="color:#b083f0;">iroha-iroha3-1  | </span><span style="color:#adbac780;">2023-02-27T12:43:08.760437Z</span><span style="color:#adbac7;"> </span><span style="color:#57ab5a;"> INFO</span><span style="color:#adbac7;"> </span><span style="color:#adbac780;">iroha_p2p::network:</span><span style="color:#adbac7;"> Starting network actor </span><span style="color:#adbac7;font-style:italic;">listen_addr</span><span style="color:#adbac780;">=</span><span style="color:#adbac7;">iroha3:1340</span></span>
<span class="line"><span style="color:#57ab5a;">iroha-iroha2-1  | </span><span style="color:#adbac780;">2023-02-27T12:43:08.763216Z</span><span style="color:#adbac7;"> </span><span style="color:#57ab5a;"> INFO</span><span style="color:#adbac7;"> </span><span style="color:#adbac780;">iroha:</span><span style="color:#adbac7;"> Starting Iroha</span></span></code></pre></div></li><li><p>Follow the <a href="./bash.html">Bash tutorial</a> to check out Iroha&#39;s capabilities.</p></li><li><p>When you&#39;re done with the test network, just hit <code>Control + C</code> to stop the containers (<code>⌃ + C</code> on Mac).</p></li></ol><h2 id="docker-options" tabindex="-1">Docker Options <a class="header-anchor" href="#docker-options" aria-label="Permalink to &quot;Docker Options&quot;">​</a></h2><p>You might also be interested in other options for local compilation:</p><ul><li>For testing Iroha code quickly, you can use <code>docker-compose-single.yml</code>, which starts a container with a single peer.</li><li>For testing Iroha code in normal conditions, you can use <code>docker-compose-local.yml</code>, which starts 4 connected containers with peers.</li></ul><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Please note that there is ongoing work to make our configurations for Docker even more customizable with the help of Swarm.</p></div>`,6),c=[p];function e(r,t,i,d,y,b){return s(),o("div",null,c)}const u=a(l,[["render",e]]);export{k as __pageData,u as default};
