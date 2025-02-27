import{_ as e,e as t,j as a,o as n}from"./app-PrrJcz8C.js";const r={};function i(s,o){return n(),t("div",null,o[0]||(o[0]=[a('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本系列 LootJS 笔记基于 Minecraft 1.21+，并且大部分内容都将翻译自<a href="https://docs.almostreliable.com/lootjs/" target="_blank" rel="noopener noreferrer">官方Wiki</a>和我个人的理解。</p></div><h2 id="about_lootjs" tabindex="-1"><a class="header-anchor" href="#about_lootjs"><span>关于 LootJS</span></a></h2><p>LootJS 是一个基于 Neoforge开发的 KubeJS 附属模组，最主要的作用是帮助我们使用编程的方式来修改战利品表。</p><p>LootJS主要包括 <code>LootJS.lootTables()</code> 和 <code>LootJS.modifiers()</code> 这两个事件。并且这两个事件都是服务器端，因此所有脚本应该放置于 <code>server_scripts</code> 下。</p><h2 id="event_difference" tabindex="-1"><a class="header-anchor" href="#event_difference"><span>事件差异</span></a></h2><h3 id="lootjs-loottables" tabindex="-1"><a class="header-anchor" href="#lootjs-loottables"><span>LootJS.lootTables()</span></a></h3><p>此事件允许直接修改通过数据包加载的战利品表，从而在不丢失抽取(rolls)、条件(conditions)、战利品函数(loot functions)等信息的情况下进行更新。您可以遍历战利品表的各个部分并进行修改。由于是直接修改，因此这些更改会在 JER 或 RER 等模组中得到反映。</p><h3 id="lootjs-modifiers" tabindex="-1"><a class="header-anchor" href="#lootjs-modifiers"><span>LootJS.modifiers()</span></a></h3><p>此事件对于战利品表的修改是在一个战利品表进行抽取后动态调用。也就是说该事件不直接修改战利品表，只是直接修改最终的战利品，因此只写更改不会再 JER 或 RER 等模组中得到反映。</p><p>NeoForge 提供了<a href="https://docs.neoforged.net/docs/resources/server/loottables/glm/" target="_blank" rel="noopener noreferrer">全局战利品修改器（Global Loot Modifier）</a>系统，允许 mod 在抽取出特定战利品表时动态添加战利品。这些信息不在战利品表中，意味着 <code>LootJS.lootTables()</code> 事件无法跟踪任何关于它们的信息。相反，它们可以通过 <code>LootJS.modifiers()</code> 事件进行修改，因为它在 NeoForge 提供的钩子之后运行。</p>',10)]))}const d=e(r,[["render",i],["__file","index.html.vue"]]),l=JSON.parse('{"path":"/notes/minecraft/kubejs/addons/lootjs/introduction/","title":"简介","lang":"zh-CN","frontmatter":{"title":"简介","createTime":"2024/11/11 00:31:04","permalink":"/notes/minecraft/kubejs/addons/lootjs/introduction/","description":"注意 本系列 LootJS 笔记基于 Minecraft 1.21+，并且大部分内容都将翻译自官方Wiki和我个人的理解。 关于 LootJS LootJS 是一个基于 Neoforge开发的 KubeJS 附属模组，最主要的作用是帮助我们使用编程的方式来修改战利品表。 LootJS主要包括 LootJS.lootTables() 和 LootJS.m...","head":[["meta",{"property":"og:url","content":"https://qihuang02.cn/notes/minecraft/kubejs/addons/lootjs/introduction/"}],["meta",{"property":"og:site_name","content":"QiHuang02的笔记本"}],["meta",{"property":"og:title","content":"简介"}],["meta",{"property":"og:description","content":"注意 本系列 LootJS 笔记基于 Minecraft 1.21+，并且大部分内容都将翻译自官方Wiki和我个人的理解。 关于 LootJS LootJS 是一个基于 Neoforge开发的 KubeJS 附属模组，最主要的作用是帮助我们使用编程的方式来修改战利品表。 LootJS主要包括 LootJS.lootTables() 和 LootJS.m..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-02T02:00:31.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-02T02:00:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"简介\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-02T02:00:31.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":1.36,"words":407},"git":{"updatedTime":1738461631000,"contributors":[{"name":"QiHuang02","username":"QiHuang02","email":"2830447227@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/QiHuang02?v=4","url":"https://github.com/QiHuang02"}],"changelog":[{"hash":"2e1940862347b6751daf44ab27e3fd41e964e469","date":1738461631000,"email":"2830447227@qq.com","author":"QiHuang02","message":"更新vuepress-theme-plume至1.0.0-rc.129，迁移旧文档至新版本","commitUrl":"https://github.com/QiHuang02/qihuang02.github.io/commit/2e1940862347b6751daf44ab27e3fd41e964e469"}]},"autoDesc":true,"filePathRelative":"notes/minecraft/kubejs/addons/lootjs/introduction.md"}');export{d as comp,l as data};
