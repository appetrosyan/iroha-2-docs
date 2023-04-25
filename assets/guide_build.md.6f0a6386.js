import{_ as s,o as a,c as o,Q as t}from"./chunks/framework.c932f925.js";const f=JSON.parse('{"title":"Build Iroha 2 Client","description":"","frontmatter":{},"headers":[],"relativePath":"guide/build.md","lastUpdated":1682419675000}'),e={name:"guide/build.md"},l=t(`<h1 id="build-iroha-2-client" tabindex="-1">Build Iroha 2 Client <a class="header-anchor" href="#build-iroha-2-client" aria-label="Permalink to &quot;Build Iroha 2 Client&quot;">​</a></h1><p>After you have <a href="./install.html">installed Iroha</a> from GitHub, follow these instructions to build the Iroha 2 client:</p><ol><li><a href="#install-the-rust-toolchain">Install the Rust Toolchain</a></li><li><a href="#build-iroha-client">Build Iroha 2 Client</a></li></ol><h2 id="install-the-rust-toolchain" tabindex="-1">Install the Rust Toolchain <a class="header-anchor" href="#install-the-rust-toolchain" aria-label="Permalink to &quot;Install the Rust Toolchain&quot;">​</a></h2><p>You need <a href="https://www.rust-lang.org/learn/get-started" target="_blank" rel="noreferrer">a working Rust toolchain</a>: <code>cargo</code>, <code>rustc</code> v1.60 and up. <sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup></p><p>Installing the Rust Toolchain is normally a straightforward process, but we&#39;ve added <a href="./troubleshooting/installation-issues.html#troubleshooting-rust-toolchain">troubleshooting</a> details for each stage, in case you experience issues with the installation process.</p><p>The easiest way to get the official <code>rustup</code> script is to run:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F69D50;">$</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">curl</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">--proto</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&#39;=https&#39;</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">--tlsv1.2</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">-sSf</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">https://sh.rustup.rs</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">|</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">sh</span></span>
<span class="line"></span></code></pre></div><p>Or, alternatively, you can install <code>rustup</code> via your operating system’s package manager.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you know what you&#39;re doing, you can also install the Rust toolchain directly, without <code>rustup</code>.</p></div><p>If you chose to use the one-line <code>curl</code> script, you will be guided through the setup process. Just go with the defaults.</p><h2 id="build-iroha-client" tabindex="-1">Build Iroha Client <a class="header-anchor" href="#build-iroha-client" aria-label="Permalink to &quot;Build Iroha Client&quot;">​</a></h2><ol><li><p>Navigate to the directory containing the Iroha repository. If you followed the installation instructions <a href="./install.html#install-iroha-from-github">here</a>, run:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F69D50;">$</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">cd</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">~/Git/iroha</span></span>
<span class="line"></span></code></pre></div></li><li><p>Build the Iroha 2 client using:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F69D50;">$</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">cargo</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">build</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">-p</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">iroha_client_cli</span></span>
<span class="line"></span></code></pre></div><p>Build artifacts are created in the <code>./target/debug/</code> directory.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>We take pride in the fact that Iroha is extremely quick to compile. For reference, compiling hyperledger/substrate takes a good part of ten minutes on a modern M1 machine. Iroha, in comparison, compiles in around one minute.</p></div></li></ol><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p>If you&#39;re having issues with installing Rust compatible with our code (2021 edition), please consult the <a href="#troubleshooting-rust-toolchain">troubleshooting</a> section. <a href="#fnref1" class="footnote-backref">↩︎</a></p></li></ol></section>`,15),n=[l];function i(r,c,p,h,u,d){return a(),o("div",null,n)}const b=s(e,[["render",i]]);export{f as __pageData,b as default};