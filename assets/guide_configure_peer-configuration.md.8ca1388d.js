import{_ as s,o,c as a,Q as n}from"./chunks/framework.c932f925.js";const C=JSON.parse('{"title":"Peer Configuration","description":"","frontmatter":{},"headers":[],"relativePath":"guide/configure/peer-configuration.md","lastUpdated":1682419675000}'),e={name:"guide/configure/peer-configuration.md"},l=n(`<h1 id="peer-configuration" tabindex="-1">Peer Configuration <a class="header-anchor" href="#peer-configuration" aria-label="Permalink to &quot;Peer Configuration&quot;">​</a></h1><p>The peer configuration file (<code>configs/peer/config.json</code>) determines how your blockchain operates.</p><p>Here&#39;s an example of how peer configuration file looks like:</p><details class="details custom-block"><summary>Peer configuration example</summary><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#ADBAC7;">{</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#8DDB8C;">&quot;PUBLIC_KEY&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">null</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#8DDB8C;">&quot;PRIVATE_KEY&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">null</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#8DDB8C;">&quot;DISABLE_PANIC_TERMINAL_COLORS&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">false</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#8DDB8C;">&quot;KURA&quot;</span><span style="color:#ADBAC7;">: {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;INIT_MODE&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#96D0FF;">&quot;strict&quot;</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;BLOCK_STORE_PATH&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#96D0FF;">&quot;./storage&quot;</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;BLOCKS_PER_STORAGE_FILE&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">1000</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;ACTOR_CHANNEL_CAPACITY&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">100</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;DEBUG_OUTPUT_NEW_BLOCKS&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">false</span></span>
<span class="line"><span style="color:#ADBAC7;">  },</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#8DDB8C;">&quot;SUMERAGI&quot;</span><span style="color:#ADBAC7;">: {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;KEY_PAIR&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">null</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;PEER_ID&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">null</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;BLOCK_TIME_MS&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">1000</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;TRUSTED_PEERS&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">null</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;COMMIT_TIME_LIMIT_MS&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">2000</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;TRANSACTION_LIMITS&quot;</span><span style="color:#ADBAC7;">: {</span></span>
<span class="line"><span style="color:#ADBAC7;">      </span><span style="color:#8DDB8C;">&quot;max_instruction_number&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">4096</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">      </span><span style="color:#8DDB8C;">&quot;max_wasm_size_bytes&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">4194304</span></span>
<span class="line"><span style="color:#ADBAC7;">    },</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;ACTOR_CHANNEL_CAPACITY&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">100</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;GOSSIP_BATCH_SIZE&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">500</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;GOSSIP_PERIOD_MS&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">1000</span></span>
<span class="line"><span style="color:#ADBAC7;">  },</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#8DDB8C;">&quot;TORII&quot;</span><span style="color:#ADBAC7;">: {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;P2P_ADDR&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">null</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;API_URL&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">null</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;TELEMETRY_URL&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">null</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;MAX_TRANSACTION_SIZE&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">32768</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;MAX_CONTENT_LEN&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">16384000</span></span>
<span class="line"><span style="color:#ADBAC7;">  },</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#8DDB8C;">&quot;BLOCK_SYNC&quot;</span><span style="color:#ADBAC7;">: {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;GOSSIP_PERIOD_MS&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">10000</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;BLOCK_BATCH_SIZE&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">4</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;ACTOR_CHANNEL_CAPACITY&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">100</span></span>
<span class="line"><span style="color:#ADBAC7;">  },</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#8DDB8C;">&quot;QUEUE&quot;</span><span style="color:#ADBAC7;">: {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;MAXIMUM_TRANSACTIONS_IN_BLOCK&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">512</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;MAXIMUM_TRANSACTIONS_IN_QUEUE&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">65536</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;MAXIMUM_TRANSACTIONS_IN_SIGNATURE_BUFFER&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">65536</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;TRANSACTION_TIME_TO_LIVE_MS&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">86400000</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;FUTURE_THRESHOLD_MS&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">1000</span></span>
<span class="line"><span style="color:#ADBAC7;">  },</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#8DDB8C;">&quot;LOGGER&quot;</span><span style="color:#ADBAC7;">: {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;MAX_LOG_LEVEL&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#96D0FF;">&quot;INFO&quot;</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;TELEMETRY_CAPACITY&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">1000</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;COMPACT_MODE&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">false</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;LOG_FILE_PATH&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">null</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;TERMINAL_COLORS&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">true</span></span>
<span class="line"><span style="color:#ADBAC7;">  },</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#8DDB8C;">&quot;GENESIS&quot;</span><span style="color:#ADBAC7;">: {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;ACCOUNT_PUBLIC_KEY&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">null</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;ACCOUNT_PRIVATE_KEY&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">null</span></span>
<span class="line"><span style="color:#ADBAC7;">  },</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#8DDB8C;">&quot;WSV&quot;</span><span style="color:#ADBAC7;">: {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;ASSET_METADATA_LIMITS&quot;</span><span style="color:#ADBAC7;">: {</span></span>
<span class="line"><span style="color:#ADBAC7;">      </span><span style="color:#8DDB8C;">&quot;max_len&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">1048576</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">      </span><span style="color:#8DDB8C;">&quot;max_entry_byte_size&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">4096</span></span>
<span class="line"><span style="color:#ADBAC7;">    },</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;ASSET_DEFINITION_METADATA_LIMITS&quot;</span><span style="color:#ADBAC7;">: {</span></span>
<span class="line"><span style="color:#ADBAC7;">      </span><span style="color:#8DDB8C;">&quot;max_len&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">1048576</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">      </span><span style="color:#8DDB8C;">&quot;max_entry_byte_size&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">4096</span></span>
<span class="line"><span style="color:#ADBAC7;">    },</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;ACCOUNT_METADATA_LIMITS&quot;</span><span style="color:#ADBAC7;">: {</span></span>
<span class="line"><span style="color:#ADBAC7;">      </span><span style="color:#8DDB8C;">&quot;max_len&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">1048576</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">      </span><span style="color:#8DDB8C;">&quot;max_entry_byte_size&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">4096</span></span>
<span class="line"><span style="color:#ADBAC7;">    },</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;DOMAIN_METADATA_LIMITS&quot;</span><span style="color:#ADBAC7;">: {</span></span>
<span class="line"><span style="color:#ADBAC7;">      </span><span style="color:#8DDB8C;">&quot;max_len&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">1048576</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">      </span><span style="color:#8DDB8C;">&quot;max_entry_byte_size&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">4096</span></span>
<span class="line"><span style="color:#ADBAC7;">    },</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;IDENT_LENGTH_LIMITS&quot;</span><span style="color:#ADBAC7;">: {</span></span>
<span class="line"><span style="color:#ADBAC7;">      </span><span style="color:#8DDB8C;">&quot;min&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">1</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">      </span><span style="color:#8DDB8C;">&quot;max&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">128</span></span>
<span class="line"><span style="color:#ADBAC7;">    },</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;WASM_RUNTIME_CONFIG&quot;</span><span style="color:#ADBAC7;">: {</span></span>
<span class="line"><span style="color:#ADBAC7;">      </span><span style="color:#8DDB8C;">&quot;FUEL_LIMIT&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">20000000</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">      </span><span style="color:#8DDB8C;">&quot;MAX_MEMORY&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">524288000</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">  },</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#8DDB8C;">&quot;NETWORK&quot;</span><span style="color:#ADBAC7;">: {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;ACTOR_CHANNEL_CAPACITY&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">100</span></span>
<span class="line"><span style="color:#ADBAC7;">  },</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#8DDB8C;">&quot;TELEMETRY&quot;</span><span style="color:#ADBAC7;">: {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;NAME&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">null</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;URL&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">null</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;MIN_RETRY_PERIOD&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">1</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;MAX_RETRY_DELAY_EXPONENT&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">4</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">&quot;FILE&quot;</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">null</span></span>
<span class="line"><span style="color:#ADBAC7;">  }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre></div></details><p>Some of the configuration options are required, while others are used for fine-tuning. When you create a new peer, you are required to provide the following:</p><ul><li><a href="#iroha-keys">Public and private keys for the peer</a> (<code>PUBLIC_KEY</code> and <code>PRIVATE_KEY</code>)</li><li><a href="#iroha-public-addresses">Iroha public addresses</a> (<code>P2P_ADDR</code>, <code>API_URL</code>, <code>TELEMETRY_URL</code>)</li><li><a href="#trusted-peers">Trusted peers</a> (<code>TRUSTED_PEERS</code>)</li><li><a href="#genesis">Public and private keys for the genesis account</a> (<code>ACCOUNT_PUBLIC_KEY</code> and <code>ACCOUNT_PRIVATE_KEY</code>)</li></ul><p>For the full list of configuration options, refer to <a href="https://github.com/hyperledger/iroha/blob/iroha2-dev/docs/source/references/config.md" target="_blank" rel="noreferrer">Iroha Configuration Reference</a>.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Configuration options have different underlying types and default values, which are denoted in code as types wrapped in a single <code>Option&lt;..&gt;</code> or in a double <code>Option&lt;Option&lt;..&gt;&gt;</code>. Refer to <a href="./configuration-types.html">configuration types</a> for details.</p></div><h2 id="generation" tabindex="-1">Generation <a class="header-anchor" href="#generation" aria-label="Permalink to &quot;Generation&quot;">​</a></h2><p>You can use <code>kagami</code> to generate the default peer configuration:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F69D50;">$</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">kagami</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">config</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">peer</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">&gt;</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">peer-config.json</span></span>
<span class="line"></span></code></pre></div><h2 id="public-and-private-keys" tabindex="-1">Public and private keys <a class="header-anchor" href="#public-and-private-keys" aria-label="Permalink to &quot;Public and private keys&quot;">​</a></h2><p>When you are configuring a new peer, you have to provide its public and private keys: <code>PUBLIC_KEY</code> and <code>PRIVATE_KEY</code> configuration options. Refer to <a href="./keys.html">public key cryptography</a> to learn the details.</p><h2 id="trusted-peers" tabindex="-1">Trusted Peers <a class="header-anchor" href="#trusted-peers" aria-label="Permalink to &quot;Trusted Peers&quot;">​</a></h2><p>Iroha is a blockchain ledger. In order for it to work optimally and be Byzantine-fault tolerant with the maximum number of faults allowed, it needs to be started with a set number of peers: <code>4</code>, <code>7</code>, <code>10</code>, ... <code>3f+1</code>, where <code>f</code> is the allowed number of faults.</p><p>So usually, when you want to start an Iroha deployment, you should already know a number of peers that you can trust and join their blockchain. The way it works in the examples is that you just specify in four <code>config.json</code> files four peers with their public keys and API addresses.</p><p>Since Iroha has no automatic peer discovery, the only other way to make peers known to each other is to use the <code>iroha_client_cli</code> to <a href="./peer-management.html#registering-peers">register new peers</a>). This is not too difficult with the provided client libraries. With Python&#39;s <a href="https://www.crummy.com/software/BeautifulSoup/" target="_blank" rel="noreferrer">Beautiful Soup</a>, the curated list of peers can be updated, registered, and un-registered on its own.</p><p>The list of trusted peers is a part of <code>SUMERAGI</code> configuration. Here&#39;s an example of <code>SUMERAGI_TRUSTED_PEERS</code> environment variable to configure trusted peers:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#adbac7;">&#39;[{&quot;address&quot;:&quot;iroha0:1337&quot;, &quot;public_key&quot;: &quot;ed01201c61faf8fe94e253b93114240394f79a607b7fa55f9e5a41ebec74b88055768b&quot;}, {&quot;address&quot;:&quot;iroha1:1338&quot;, &quot;public_key&quot;: &quot;ed0120cc25624d62896d3a0bfd8940f928dc2abf27cc57cefeb442aa96d9081aae58a1&quot;}, {&quot;address&quot;: &quot;iroha2:1339&quot;, &quot;public_key&quot;: &quot;ed0120faca9e8aa83225cb4d16d67f27dd4f93fc30ffa11adc1f5c88fd5495ecc91020&quot;}, {&quot;address&quot;: &quot;iroha3:1340&quot;, &quot;public_key&quot;: &quot;ed01208e351a70b6a603ed285d666b8d689b680865913ba03ce29fb7d13a166c4e7f1f&quot;}]&#39;</span></span>
<span class="line"><span style="color:#adbac7;"></span></span></code></pre></div><h2 id="iroha-public-addresses" tabindex="-1">Iroha Public Addresses <a class="header-anchor" href="#iroha-public-addresses" aria-label="Permalink to &quot;Iroha Public Addresses&quot;">​</a></h2><p><code>TORII</code> is the module in charge of handling incoming and outgoing connections.</p><p>Here we only cover the required configurations: <code>API_URL</code>, <code>P2P_ADDR</code>, and <code>TELEMETRY_URL</code>. Check <a href="https://github.com/hyperledger/iroha/blob/iroha2-dev/docs/source/references/config.md#torii" target="_blank" rel="noreferrer"><code>TORII</code> configuration reference</a> for all available options.</p><h3 id="api-url" tabindex="-1"><code>API_URL</code> <a class="header-anchor" href="#api-url" aria-label="Permalink to &quot;\`API_URL\`&quot;">​</a></h3><p>The <code>API_URL</code> is the location to which the client(s) make their requests. You can also use it to change some peer-specific configuration options.</p><p>Most of the time, the only reason to change the <code>API_URL</code> is to change the port, in case <code>8080</code> is either closed, or if you want to randomise ports to avoid certain kinds of attacks.</p><h3 id="p2p-addr" tabindex="-1"><code>P2P_ADDR</code> <a class="header-anchor" href="#p2p-addr" aria-label="Permalink to &quot;\`P2P_ADDR\`&quot;">​</a></h3><p>The <code>P2P_ADDR</code> is the internal address used for communication between peers. This address should be included in the <code>TRUSTED_PEERS</code> section of the configuration file.</p><h3 id="telemetry-url" tabindex="-1"><code>TELEMETRY_URL</code> <a class="header-anchor" href="#telemetry-url" aria-label="Permalink to &quot;\`TELEMETRY_URL\`&quot;">​</a></h3><p>The <code>TELEMETRY_URL</code> is used to specify the prometheus endpoint address. It&#39;s set by adding <code>&quot;TELEMETRY_URL&quot;: &quot;127.0.0.1:8180&quot;</code> to the <code>TORII</code> section of the configuration file.</p><p>It&#39;s not meant to be human-readable. However, a <code>GET</code> request to the <code>127.0.0.1:8180/status</code> will give you a JSON-encoded representation of the top-level metrics, while a <code>GET</code> request to <code>127.0.0.1:8180/metrics</code> will give you a (somewhat verbose) list of all available metrics gathered in Iroha. You might want to change this if you&#39;re having trouble gathering metrics using <code>prometheus</code>.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Learn how to <a href="/iroha-2-docs/guide/advanced/metrics.html">monitor Iroha performance</a> using prometheus.</p></div><h2 id="genesis" tabindex="-1">Genesis <a class="header-anchor" href="#genesis" aria-label="Permalink to &quot;Genesis&quot;">​</a></h2><p>When you configure a peer, you have to provide private and public keys for the genesis account.</p><p>You can do this via the configuration file (<code>ACCOUNT_PUBLIC_KEY</code>, <code>ACCOUNT_PRIVATE_KEY</code>) or environment variables (<code>IROHA_GENESIS_ACCOUNT_PUBLIC_KEY</code>, <code>IROHA_GENESIS_ACCOUNT_PRIVATE_KEY</code>).</p><p>Read more about <a href="./genesis.html">genesis blocks</a> and <a href="./keys.html">public key cryptography</a>.</p><p>Aside from the public and private keys for the genesis account, which are required configuration options, you can also fine-tune other genesis block configurations, such as:</p><ul><li><code>WAIT_FOR_PEERS_RETRY_COUNT_LIMIT</code>: the number of attempts to connect to peers before genesis block is submitted</li><li><code>WAIT_FOR_PEERS_RETRY_PERIOD_MS</code>: how long to wait before retrying a connection to peers</li><li><code>GENESIS_SUBMISSION_DELAY_MS</code>: the delay before the genesis block submission after the minimum number of peers were discovered.</li></ul><p>You can find more details in <a href="https://github.com/hyperledger/iroha/blob/iroha2-dev/docs/source/references/config.md#genesis" target="_blank" rel="noreferrer"><code>GENESIS</code> Iroha Configuration Reference</a>.</p><h2 id="logger" tabindex="-1">Logger <a class="header-anchor" href="#logger" aria-label="Permalink to &quot;Logger&quot;">​</a></h2><p>Let&#39;s cover the most useful <code>LOGGER</code> configurations, <code>MAX_LOG_LEVEL</code> and <code>LOG_FILE_PATH</code>.</p><h3 id="max-log-level" tabindex="-1"><code>MAX_LOG_LEVEL</code> <a class="header-anchor" href="#max-log-level" aria-label="Permalink to &quot;\`MAX_LOG_LEVEL\`&quot;">​</a></h3><p>The <code>MAX_LOG_LEVEL</code> is used to determine which messages are logged.</p><p>With <code>&quot;MAX_LOG_LEVEL&quot;: &quot;WARN&quot;</code> you won&#39;t get any messages unless they are either a warning or an error. Beside <code>WARN</code>, other available options are:</p><ul><li><code>TRACE</code> (log every time you enter a function)</li><li><code>DEBUG</code> (use when you know something went wrong)</li><li><code>INFO</code> (the default)</li><li><code>WARN</code> (log everything that could be an error)</li><li><code>ERROR</code> (to silence any logging except for error messages)</li></ul><h3 id="log-file-path" tabindex="-1"><code>LOG_FILE_PATH</code> <a class="header-anchor" href="#log-file-path" aria-label="Permalink to &quot;\`LOG_FILE_PATH\`&quot;">​</a></h3><p>Another useful option is <code>&quot;LOG_FILE_PATH&quot;: bunyan.json</code>. It creates (if it didn&#39;t already exist) a file called <code>bunyan.json</code> that contains the message log in a structured format.</p><p>This is extremely useful for two reasons. Firstly, you can use the <code>bunyan</code> log viewer to filter information more precisely than Iroha would allow you to do. Do you only want messages from a specific module or package? You can do that with <code>bunyan</code>. Secondly, while copying logs is not too big of a problem if your instance is just a small setup, for bigger setups the log will be larger. Having it saved to a file makes much more sense in that case.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>You can also set <code>LOG_FILE_PATH</code> to <code>/dev/stdout</code> if you want to use bunyan&#39;s logging facilities directly without saving the output.</p></div><h2 id="kura" tabindex="-1">Kura <a class="header-anchor" href="#kura" aria-label="Permalink to &quot;Kura&quot;">​</a></h2><p><em>Kura</em> is the persistent storage engine of Iroha (Japanese for <em>warehouse</em>). The <code>BLOCK_STORE_PATH</code> specifies where the blocks are stored. You can change it to a custom location if for some reason the default location (<code>./storage</code>) is not available or desirable.</p><p>For more details, check <a href="https://github.com/hyperledger/iroha/blob/iroha2-dev/docs/source/references/config.md#kura" target="_blank" rel="noreferrer"><code>KURA</code> configuration reference</a>.</p>`,51),p=[l];function t(c,r,i,A,u,y){return o(),a("div",null,p)}const D=s(e,[["render",t]]);export{C as __pageData,D as default};
