import{_ as e,o,c as s,Q as a}from"./chunks/framework.c932f925.js";const y=JSON.parse('{"title":"How to hot reload Iroha in a Docker container","description":"","frontmatter":{},"headers":[],"relativePath":"guide/advanced/hot-reload.md","lastUpdated":1682419675000}'),n={name:"guide/advanced/hot-reload.md"},t=a(`<h1 id="how-to-hot-reload-iroha-in-a-docker-container" tabindex="-1">How to hot reload Iroha in a Docker container <a class="header-anchor" href="#how-to-hot-reload-iroha-in-a-docker-container" aria-label="Permalink to &quot;How to hot reload Iroha in a Docker container&quot;">​</a></h1><p>Here is the overall procedure for hot reloading Iroha in a Docker container:</p><ol><li><p>Build Iroha on your host OS.</p><p>To avoid issues with dynamic linking, run:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F69D50;">$</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">cargo</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">build</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">--release</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">--target</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">x86_64-unknown-linux-musl</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">--features</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;vendored&quot;</span></span>
<span class="line"></span></code></pre></div><details><summary> An explanation for using \`cargo build\` with these parameters. </summary><p>You may experience an issue with dynamic linking if your host OS has a newer version of <code>glibc</code> compared to the one in the Docker container. The options used in the command above resolve the issue:</p><ul><li><code>--target x86_64-unknown-linux-musl</code> forces static linking against <code>musl</code> libc implementation</li><li><code>--features &quot;vendored&quot;</code> facilitates static linkage of the <code>openssl</code> library</li></ul></details></li><li><p>Enter Docker container. For example:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F69D50;">$</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">docker</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">exec</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">-it</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">iroha-iroha0-</span><span style="color:#6CB6FF;">1</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">bash</span></span>
<span class="line"></span></code></pre></div></li><li><p>Copy Iroha to the current directory:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F69D50;">$</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">docker</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">cp</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">root/soramitsu/iroha/target/x86_64-unknown-linux-musl/release/iroha</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">.</span></span>
<span class="line"></span></code></pre></div></li><li><p>(Optional) Make any modifications you need:</p><ul><li><a href="#wiping-previous-blockchain-state-recommit-genesis">Recommit genesis block</a></li><li><a href="#use-custom-configuration-files">Use custom configuration files</a></li><li><a href="#use-custom-environment-variables">Use custom environment variables</a></li></ul></li><li><p>Exit docker container and restart it using <code>docker restart</code>.</p><p><strong>Note:</strong> If you use the combination of <code>container down</code> and <code>container up</code>, any modifications you made on the previous step will be lost. Use <code>docker restart</code> to preserve changes.</p></li></ol><p>If you skip the optional step (step 4), the state of the blockchain after hot reload will be the same as it was before the Docker container was restarted.</p><p>Note that if you get the <code>Kura initialisation failed</code> error message, it might mean one of two things: corruption or binary incompatibility of the stored block. To fix this, remove the <code>blocks/</code> directory.</p><h2 id="wiping-previous-blockchain-state-recommit-genesis" tabindex="-1">Wiping previous blockchain state (recommit genesis) <a class="header-anchor" href="#wiping-previous-blockchain-state-recommit-genesis" aria-label="Permalink to &quot;Wiping previous blockchain state (recommit genesis)&quot;">​</a></h2><p>To recommit a custom genesis block, remove the previously stored blocks before restarting the container:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F69D50;">$</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">rm</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">blocks/</span><span style="color:#6CB6FF;">*</span></span>
<span class="line"></span></code></pre></div><p>The new genesis block will be automatically recommited upon container restart.</p><h2 id="use-custom-configuration-files" tabindex="-1">Use custom configuration files <a class="header-anchor" href="#use-custom-configuration-files" aria-label="Permalink to &quot;Use custom configuration files&quot;">​</a></h2><p>To use custom configuration files, such as <code>config.json</code> or <code>genesis.json</code>, copy (or bind mount) them to the <code>config/</code> subvolume before restarting the Docker container.</p><p>The changes will take effect upon container restart.</p><h2 id="use-custom-environment-variables" tabindex="-1">Use custom environment variables <a class="header-anchor" href="#use-custom-environment-variables" aria-label="Permalink to &quot;Use custom environment variables&quot;">​</a></h2><p>To use custom environment variables (e.g. <code>IROHA_PUBLIC_KEY</code>), simply modify them before restarting the Docker container. For example:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F69D50;">$</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">IROHA_PUBLIC_KEY=</span><span style="color:#F47067;">&lt;</span><span style="color:#96D0FF;">new_ke</span><span style="color:#ADBAC7;">y</span><span style="color:#F47067;">&gt;</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">docker</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">restart</span></span>
<span class="line"></span></code></pre></div><p>The changes will take effect upon container restart.</p>`,16),l=[t];function i(r,c,p,d,u,h){return o(),s("div",null,l)}const g=e(n,[["render",i]]);export{y as __pageData,g as default};
