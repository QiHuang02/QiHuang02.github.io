import{_ as e,e as n,j as l,o as r}from"./app-PrrJcz8C.js";const d={};function i(a,t){return r(),n("div",null,t[0]||(t[0]=[l('<p><code>client_scripts</code> 文件夹包含每次客户端资源重新加载时都会加载的脚本。可以通过快捷键 <code>F3</code> + <code>T</code> 或者使用指令 <code>/kubejs reload client_scripts</code> 来对该文件夹下的脚本进行重载。</p><h2 id="event_list" tabindex="-1"><a class="header-anchor" href="#event_list"><span>事件列表</span></a></h2><h3 id="client_itemevent" tabindex="-1"><a class="header-anchor" href="#client_itemevent"><span><strong>ItemEvents 事件</strong></span></a></h3><table><thead><tr><th style="text-align:center;">子事件</th><th style="text-align:center;">描述</th><th style="text-align:center;">相关链接</th></tr></thead><tbody><tr><td style="text-align:center;">rightClicked</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">crafted</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">dropped</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">dynamicTooltips</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">firstRightClicked</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">pickedUp</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">destroyed</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">entityInteracted</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">foodEaten</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">firstLeftClicked</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">canPickUp</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">smelted</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">modifyTooltips</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr></tbody></table><h3 id="client_levelevent" tabindex="-1"><a class="header-anchor" href="#client_levelevent"><span><strong>LevelEvents 事件</strong></span></a></h3><table><thead><tr><th style="text-align:center;">子事件</th><th style="text-align:center;">描述</th><th style="text-align:center;">相关链接</th></tr></thead><tbody><tr><td style="text-align:center;">beforeExplosion</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">tick</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">afterExplosion</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr></tbody></table><h3 id="client_networkevent" tabindex="-1"><a class="header-anchor" href="#client_networkevent"><span><strong>NetworkEvents 事件</strong></span></a></h3><table><thead><tr><th style="text-align:center;">子事件</th><th style="text-align:center;">描述</th><th style="text-align:center;">相关链接</th></tr></thead><tbody><tr><td style="text-align:center;">dataReceived</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr></tbody></table><h3 id="client_recipeviewevent" tabindex="-1"><a class="header-anchor" href="#client_recipeviewevent"><span><strong>RecipeViewerEvents 事件</strong></span></a></h3><table><thead><tr><th style="text-align:center;">子事件</th><th style="text-align:center;">描述</th><th style="text-align:center;">相关链接</th></tr></thead><tbody><tr><td style="text-align:center;">addEntries</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">removeEntriesCompletely</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">addInformation</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">removeRecipes</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">removeEntries</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">removeCategories</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">registerSubtypes</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">groupEntries</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr></tbody></table><h3 id="client_entityevent" tabindex="-1"><a class="header-anchor" href="#client_entityevent"><span><strong>EntityEvents 事件</strong></span></a></h3><table><thead><tr><th style="text-align:center;">子事件</th><th style="text-align:center;">描述</th><th style="text-align:center;">相关链接</th></tr></thead><tbody><tr><td style="text-align:center;">afterHurt</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">spawned</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">drops</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">checkSpawn</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">death</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">beforeHurt</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr></tbody></table><h3 id="client_clientevent" tabindex="-1"><a class="header-anchor" href="#client_clientevent"><span><strong>ClientEvents 事件</strong></span></a></h3><table><thead><tr><th style="text-align:center;">子事件</th><th style="text-align:center;">描述</th><th style="text-align:center;">相关链接</th></tr></thead><tbody><tr><td style="text-align:center;">rightDebugInfo</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">particleProviderRegistry</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">leftDebugInfo</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">loggedIn</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">atlasSpriteRegistry</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">loggedOut</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">generateAssets</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">tick</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">lang</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr></tbody></table><h3 id="client_blockevent" tabindex="-1"><a class="header-anchor" href="#client_blockevent"><span><strong>BlockEvents 事件</strong></span></a></h3><table><thead><tr><th style="text-align:center;">子事件</th><th style="text-align:center;">描述</th><th style="text-align:center;">相关链接</th></tr></thead><tbody><tr><td style="text-align:center;">broken</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">placed</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">leftClicked</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">rightClicked</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">startedFalling</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">detectorPowered</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">farmlandTrampled</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">stoppedFalling</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">detectorUnpowered</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">detectorChanged</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">blockEntityTick</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr></tbody></table><h3 id="client_playerevent" tabindex="-1"><a class="header-anchor" href="#client_playerevent"><span><strong>PlayerEvents 事件</strong></span></a></h3><table><thead><tr><th style="text-align:center;">子事件</th><th style="text-align:center;">描述</th><th style="text-align:center;">相关链接</th></tr></thead><tbody><tr><td style="text-align:center;">chestOpened</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">tick</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">stageRemoved</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">stageAdded</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">chestClosed</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">inventoryClosed</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">inventoryChanged</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr><tr><td style="text-align:center;">inventoryOpened</td><td style="text-align:center;">-</td><td style="text-align:center;">link</td></tr></tbody></table>',18)]))}const c=e(d,[["render",i],["__file","index.html.vue"]]),g=JSON.parse('{"path":"/notes/minecraft/kubejs/basic/event/client_scripts/","title":"客户端脚本","lang":"zh-CN","frontmatter":{"title":"客户端脚本","createTime":"2024/11/15 22:53:31","permalink":"/notes/minecraft/kubejs/basic/event/client_scripts/","description":"client_scripts 文件夹包含每次客户端资源重新加载时都会加载的脚本。可以通过快捷键 F3 + T 或者使用指令 /kubejs reload client_scripts 来对该文件夹下的脚本进行重载。 事件列表 ItemEvents 事件 LevelEvents 事件 NetworkEvents 事件 RecipeViewerEvents...","head":[["meta",{"property":"og:url","content":"https://qihuang02.cn/notes/minecraft/kubejs/basic/event/client_scripts/"}],["meta",{"property":"og:site_name","content":"QiHuang02的笔记本"}],["meta",{"property":"og:title","content":"客户端脚本"}],["meta",{"property":"og:description","content":"client_scripts 文件夹包含每次客户端资源重新加载时都会加载的脚本。可以通过快捷键 F3 + T 或者使用指令 /kubejs reload client_scripts 来对该文件夹下的脚本进行重载。 事件列表 ItemEvents 事件 LevelEvents 事件 NetworkEvents 事件 RecipeViewerEvents..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-02T02:00:31.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-02T02:00:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"客户端脚本\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-02T02:00:31.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":0.99,"words":297},"git":{"updatedTime":1738461631000,"contributors":[{"name":"QiHuang02","username":"QiHuang02","email":"2830447227@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/QiHuang02?v=4","url":"https://github.com/QiHuang02"}],"changelog":[{"hash":"2e1940862347b6751daf44ab27e3fd41e964e469","date":1738461631000,"email":"2830447227@qq.com","author":"QiHuang02","message":"更新vuepress-theme-plume至1.0.0-rc.129，迁移旧文档至新版本","commitUrl":"https://github.com/QiHuang02/qihuang02.github.io/commit/2e1940862347b6751daf44ab27e3fd41e964e469"}]},"autoDesc":true,"filePathRelative":"notes/minecraft/kubejs/basic/event/client_scripts.md"}');export{c as comp,g as data};
