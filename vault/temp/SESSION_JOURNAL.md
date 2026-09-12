## 2026-09-12 17:11:33.741Z load
- url: http://localhost:3000/
- title: Hostinger Horizons

## 2026-09-12 17:11:34.018Z console.error
- text: 
    The above error occurred in the <iframe> component:
    
        at iframe
        at div
        at a
        at MotionComponent (http://localhost:3000/node_modules/.vite/deps/framer-motion.js?v=df09a857:942:40)
        at WhatsAppButton
        at div
        at App
    
    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

## 2026-09-12 17:11:34.020Z window.error
- message: Uncaught Error: The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.
- source: http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180
- line: 19466
- col: 13
- stack: 
    Error: The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.
        at assertValidProps (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:2707:19)
        at setInitialProperties (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:7626:11)
        at finalizeInitialChildren (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:8392:11)
        at completeWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:16341:23)
        at completeUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19277:24)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19259:13)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:18734:30)

## 2026-09-12 17:11:35.510Z click
- element: {"tag":"html","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"\n\t\timport { injectIntoGlobalHook } from \"/@react-refresh\";\ninjectIntoGlobalHook(window);\nwindow.$RefreshReg$ = () => {};\nwindow.$RefreshSig$ = () => (type) => type;\n\n\t\t\n\n\t\t\n\t\t\n\t\t\n\t\t\n\t\tSamuel Santana - Full-Stack Developer Portfolio\n\t\tconst SITE_PAGES_ENDPOINT = '/__horizons/site-pages';\n\nconst OUTGOING_SITE_PAGES_MESSAGE = 'sitePages';\nconst INCOMING_REQUEST_SITE_PAGES_MESSAGE = 'request-site-pages';\n\nconst ALLOWED_PARENT_ORIGINS = [\n\t'https://horizons.hostinger.com',\n\t'https://horizons.hostinger.dev',\n\t'https://horizons-frontend-local.hostinger.dev',\n\t'http://localhost:4000',\n];\n\nfunction postSitePages(pages) {\n\tlet parentOrigin = window.location.ancestorOrigins?.[0];\n\tif (!parentOrigin && document.referrer) {\n\t\ttry {\n\t\t\tparentOrigin = new URL(document.referrer).origin;\n\t\t} catch {}\n\t}\n\tif (parentOrigin && ALLOWED_PARENT_ORIGINS.includes(parentOrigin)) {\n\t\twindow.parent.postMessage({ type: OUTGOING_SITE_PAGES_MESSAGE, payload: { pages } }, parentOrigin);\n\t}\n}\n\nasync function sendSitePagesToParent() {\n\tif (window.self === window.top) {\n\t\treturn;\n\t}\n\n\ttry {\n\t\tconst response = await fetch(SITE_PAGES_ENDPOINT);\n\t\tif (!response.ok) {\n\t\t\tthrow new Error(`HTTP ${response.status}`);\n\t\t}\n\t\tpostSitePages(await response.json());\n\t} catch (error) {\n\t\tconsole.error('[site-pages] Failed to send site pages to parent:', error);\n\t}\n}\n\nif (window.self !== window.top) {\n\twindow.addEventListener('load', sendSitePagesToParent);\n\twindow.addEventListener('message', (event) => {\n\t\tif (event.data?.type === INCOMING_REQUEST_SITE_PAGES_MESSAGE) {\n\t\t\tsendSitePagesToParent();\n\t\t}\n\t});\n}\n\n\t\t\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id],\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-assisted-id] {\n\t\tcursor: default !important;\n\t\toverflow-wrap: anywhere;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id][contenteditable=\"true\"],\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-assisted-id][contenteditable=\"true\"] {\n\t\toutline: 1px solid #673DE6;\n\t\tcaret-color: currentColor;\n\t\tuser-..."}

## 2026-09-12 17:12:00.240Z load
- url: http://localhost:3000/home
- title: Hostinger Horizons

## 2026-09-12 17:12:00.376Z console.error
- text: 
    The above error occurred in the <iframe> component:
    
        at iframe
        at div
        at a
        at MotionComponent (http://localhost:3000/node_modules/.vite/deps/framer-motion.js?v=df09a857:942:40)
        at WhatsAppButton
        at div
        at App
    
    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

## 2026-09-12 17:12:00.378Z window.error
- message: Uncaught Error: The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.
- source: http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180
- line: 19466
- col: 13
- stack: 
    Error: The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.
        at assertValidProps (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:2707:19)
        at setInitialProperties (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:7626:11)
        at finalizeInitialChildren (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:8392:11)
        at completeWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:16341:23)
        at completeUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19277:24)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19259:13)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:18734:30)

## 2026-09-12 17:13:16.019Z load
- url: http://localhost:3000/
- title: Hostinger Horizons

## 2026-09-12 17:13:16.847Z console.error
- text: 
    The above error occurred in the <iframe> component:
    
        at iframe
        at div
        at a
        at MotionComponent (http://localhost:3000/node_modules/.vite/deps/framer-motion.js?v=df09a857:942:40)
        at WhatsAppButton
        at div
        at App
    
    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

## 2026-09-12 17:13:16.852Z window.error
- message: Uncaught Error: The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.
- source: http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180
- line: 2707
- col: 19
- stack: 
    Error: The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.
        at assertValidProps (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:2707:19)
        at setInitialProperties (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:7626:11)
        at finalizeInitialChildren (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:8392:11)
        at completeWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:16341:23)
        at completeUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19277:24)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19259:13)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:18734:30)

## 2026-09-12 17:14:02.333Z load
- url: http://localhost:3000/
- title: Hostinger Horizons

## 2026-09-12 17:29:49.376Z load
- url: http://localhost:3000/home
- title: Hostinger Horizons

## 2026-09-12 17:30:57.342Z load
- url: http://localhost:3000/home
- title: Hostinger Horizons

## 2026-09-12 19:03:26.770Z load
- url: http://localhost:3000/home
- title: Hostinger Horizons

## 2026-09-12 19:06:45.525Z click
- element: {"tag":"section","role":null,"ariaLabel":null,"name":null,"type":null,"id":"projects","placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Projetos em DestaqueAlguns dos projetos que desenvolvi utilizando as mais modernas tecnologiasE-Commerce PlatformPlataforma completa de e-commerce com carrinho de compras, sistema de pagamento, gerenciamento de produtos e painel administrativo.ReactNode.jsMongoDBStripeReduxExpressCódigoDemoTask Management DashboardDashboard para gerenciamento de tarefas e projetos com drag-and-drop, filtros avançados, notificações em tempo real e colaboração em equipe.Next.jsTypeScriptPrismaPostgreSQLTailwind CSSCódigoDemoReal-Time Chat ApplicationAplicação de chat em tempo real com suporte para mensagens privadas, grupos, compartilhamento de arquivos e notificações push.ReactSocket.ioNode.jsMongoDBJWTCódigoDemoWeather Forecast AppAplicação de previsão do tempo com mapas interativos, previsão de 7 dias, alertas meteorológicos e geolocalização.ReactOpenWeather APILeafletChart.jsCódigoDemoSocial Media AnalyticsPlataforma de análise de métricas de redes sociais com gráficos interativos, relatórios personalizados e integração com múltiplas APIs.Next.jsD3.jsGraphQLPostgreSQLDockerCódigoDemoFitness Tracking AppAplicativo para rastreamento de exercícios, nutrição, progresso de metas e planos de treino personalizados.React NativeFirebaseReduxChart.jsCódigoDemoVer Mais Projetos no GitHub"}

## 2026-09-12 19:33:00.436Z click
- element: {"tag":"h3","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Desenvolvedor Full-Stack e Automações"}

## 2026-09-12 19:33:00.623Z click
- element: {"tag":"h3","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Desenvolvedor Full-Stack e Automações"}

## 2026-09-12 19:33:00.810Z click
- element: {"tag":"h3","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Desenvolvedor Full-Stack e Automações"}

## 2026-09-12 19:33:46.906Z click
- element: {"tag":"a","role":null,"ariaLabel":"YouTube","name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"YouTube"}

## 2026-09-12 19:36:42.491Z click
- element: {"tag":"section","role":null,"ariaLabel":null,"name":null,"type":null,"id":"experience","placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Experiência ProfissionalMinha trajetória profissional construindo soluções web modernas e escaláveisDesenvolvedor Full-Stack e AutomaçõesClivy CompanyJaneiro 2026 - Junho 2026•RemotoDesenvolvimento de aplicações full-stack e automações, com integração de APIs, modelagem de dados, autenticação, observabilidade e colaboração com times multidisciplinares em rituais ágeis.ReactNext.jsReact Hook FormReduxJotaiChakra UIPrismaNestJSNode.jsExpress.jsSequelizegRPCPHPSwaggerOpenAPISocketsn8nAWSDesenvolvedor Full-StackStart TecnologiaAbril 2025 - Julho 2025•RemotoDesenvolvimento de aplicações web modernas utilizando React, Next.js e TypeScript. Implementação de interfaces responsivas, integração com APIs RESTful, e otimização de performance.ReactNext.jsTypeScriptTailwind CSSGraphQLFigmaRedux ToolkitFramer MotionDesenvolvedor Full-StackCogno TechFevereiro 2025 - Maio 2025•RemotoDesenvolvimento com React e gerenciamento de estado com React Query e Redux Toolkit. Implementação de design system, componentes reutilizáveis, testes unitários e integrações com APIs.ReactNext.jsRedux ToolkitZustandStyled ComponentsStorybookWebpackDesenvolvedor Full-StackLusa TecnologiasJunho 2024 - Março 2025•RemotoDesenvolvimento de aplicações com React 19 e TypeScript. Implementação de arquitetura Clean Code, padrões de design, bibliotecas internas, testes automatizados e documentação técnica.React 19TypeScriptNext.jsShopify LiquidDesign SystemTesting LibraryGitHub ActionsDesenvolvedor Full-StackPipe TechJaneiro 2024 - Janeiro 2025•RemotoIntegração de APIs RESTful e GraphQL, desenvolvimento de interfaces com React, implementação de autenticação JWT/OIDC, e criação de sistemas escaláveis com Node.js.ReactNode.jsGraphQLJWTAzure DevOpsWordPressMongoDBDesenvolvedor Full-StackAutônomoJaneiro 2023 - Janeiro 2024•RemotoDesenvolvimento de soluções personalizadas com TypeScript, Node.js e MongoDB. Criação de interfaces responsivas, APIs escaláveis, arquitetura limpa e testes automatizados.TypeScriptNode.jsMon..."}

## 2026-09-12 19:36:50.357Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ler artigo completo no blog →"}

## 2026-09-12 19:38:02.210Z console.error
- text: 
    Warning: Invalid DOM property `%s`. Did you mean `%s`?%s frameborder frameBorder 
        at iframe
        at div
        at div
        at MotionComponent (http://localhost:3000/node_modules/.vite/deps/framer-motion.js?v=df09a857:942:40)
        at div
        at section
        at About (http://localhost:3000/src/components/About.jsx?t=1789241881330:10:21)
        at main
        at div
        at App

## 2026-09-12 19:38:02.212Z console.error
- text: 
    Warning: Invalid DOM property `%s`. Did you mean `%s`?%s referrerpolicy referrerPolicy 
        at iframe
        at div
        at div
        at MotionComponent (http://localhost:3000/node_modules/.vite/deps/framer-motion.js?v=df09a857:942:40)
        at div
        at section
        at About (http://localhost:3000/src/components/About.jsx?t=1789241881330:10:21)
        at main
        at div
        at App

## 2026-09-12 19:38:02.214Z console.error
- text: 
    Warning: Invalid DOM property `%s`. Did you mean `%s`?%s allowfullscreen allowFullScreen 
        at iframe
        at div
        at div
        at MotionComponent (http://localhost:3000/node_modules/.vite/deps/framer-motion.js?v=df09a857:942:40)
        at div
        at section
        at About (http://localhost:3000/src/components/About.jsx?t=1789241881330:10:21)
        at main
        at div
        at App

## 2026-09-12 19:38:17.135Z load
- url: http://localhost:3000/home
- title: Hostinger Horizons

## 2026-09-12 19:38:17.282Z console.error
- text: 
    Warning: Invalid DOM property `%s`. Did you mean `%s`?%s frameborder frameBorder 
        at iframe
        at div
        at div
        at MotionComponent (http://localhost:3000/node_modules/.vite/deps/framer-motion.js?v=df09a857:942:40)
        at div
        at section
        at About (http://localhost:3000/src/components/About.jsx?t=1789241881330:10:21)
        at main
        at div
        at App

## 2026-09-12 19:38:17.282Z console.error
- text: 
    Warning: Invalid DOM property `%s`. Did you mean `%s`?%s referrerpolicy referrerPolicy 
        at iframe
        at div
        at div
        at MotionComponent (http://localhost:3000/node_modules/.vite/deps/framer-motion.js?v=df09a857:942:40)
        at div
        at section
        at About (http://localhost:3000/src/components/About.jsx?t=1789241881330:10:21)
        at main
        at div
        at App

## 2026-09-12 19:38:17.282Z console.error
- text: 
    Warning: Invalid DOM property `%s`. Did you mean `%s`?%s allowfullscreen allowFullScreen 
        at iframe
        at div
        at div
        at MotionComponent (http://localhost:3000/node_modules/.vite/deps/framer-motion.js?v=df09a857:942:40)
        at div
        at section
        at About (http://localhost:3000/src/components/About.jsx?t=1789241881330:10:21)
        at main
        at div
        at App

## 2026-09-12 19:39:06.844Z load
- url: http://localhost:3000/home
- title: Hostinger Horizons

## 2026-09-12 19:39:06.962Z console.error
- text: 
    Warning: Invalid DOM property `%s`. Did you mean `%s`?%s frameborder frameBorder 
        at iframe
        at div
        at div
        at MotionComponent (http://localhost:3000/node_modules/.vite/deps/framer-motion.js?v=df09a857:942:40)
        at div
        at section
        at About (http://localhost:3000/src/components/About.jsx?t=1789241942904:10:21)
        at main
        at div
        at App

## 2026-09-12 19:39:06.962Z console.error
- text: 
    Warning: Invalid DOM property `%s`. Did you mean `%s`?%s referrerpolicy referrerPolicy 
        at iframe
        at div
        at div
        at MotionComponent (http://localhost:3000/node_modules/.vite/deps/framer-motion.js?v=df09a857:942:40)
        at div
        at section
        at About (http://localhost:3000/src/components/About.jsx?t=1789241942904:10:21)
        at main
        at div
        at App

## 2026-09-12 19:39:06.962Z console.error
- text: 
    Warning: Invalid DOM property `%s`. Did you mean `%s`?%s allowfullscreen allowFullScreen 
        at iframe
        at div
        at div
        at MotionComponent (http://localhost:3000/node_modules/.vite/deps/framer-motion.js?v=df09a857:942:40)
        at div
        at section
        at About (http://localhost:3000/src/components/About.jsx?t=1789241942904:10:21)
        at main
        at div
        at App

## 2026-09-12 19:42:32.824Z load
- url: http://localhost:3000/links
- title: Hostinger Horizons

## 2026-09-12 19:42:48.393Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Links"}

## 2026-09-12 19:42:48.618Z load
- url: http://localhost:3000/links
- title: Hostinger Horizons

## 2026-09-12 19:42:52.728Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Samuel Santana | Full Stack Developer React.js e Node.js"}

## 2026-09-12 19:42:55.181Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Automações com IA para Negócios"}

## 2026-09-12 19:42:57.752Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Samuel Santana | Web & Automações"}

## 2026-09-12 19:43:00.790Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Canal no YouTube"}

## 2026-09-12 19:43:54.610Z click
- element: {"tag":"main","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Samuel SantanaDesenvolvedor de softwareFormado em Análise e Desenvolvimento de SistemasGitHubSamuel Santana | Full Stack Developer React.js e Node.jsAutomações com IA para NegóciosSamuel Santana | Java BackendSamuel Santana | Web & AutomaçõesMundo de Sucesso: Consultoria e DesenvolvimentoCanal no YouTube← Voltar ao portfólio"}

## 2026-09-12 19:46:10.208Z window.error
- message: Uncaught ReferenceError: link is not defined
- source: http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174
- line: 97
- col: 21
- stack: 
    ReferenceError: link is not defined
        at http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:97:21
        at Array.map (<anonymous>)
        at LinksPage (http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:92:120)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:11596:26)
        at updateFunctionComponent (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:14630:28)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:15972:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19818:15)

## 2026-09-12 19:46:10.226Z window.error
- message: Uncaught ReferenceError: link is not defined
- source: http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174
- line: 97
- col: 21
- stack: 
    ReferenceError: link is not defined
        at http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:97:21
        at Array.map (<anonymous>)
        at LinksPage (http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:92:120)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:11596:26)
        at updateFunctionComponent (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:14630:28)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:15972:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19818:15)

## 2026-09-12 19:46:10.230Z console.error
- text: 
    The above error occurred in the <LinksPage> component:
    
        at LinksPage (http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:92:120)
        at App
    
    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

## 2026-09-12 19:46:10.235Z unhandledrejection
- message: link is not defined
- stack: 
    ReferenceError: link is not defined
        at http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:97:21
        at Array.map (<anonymous>)
        at LinksPage (http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:92:120)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:11596:26)
        at updateFunctionComponent (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:14630:28)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:15972:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19169:15)

## 2026-09-12 19:46:11.209Z root.empty
- url: http://localhost:3000/links

## 2026-09-12 19:46:12.210Z window.error
- message: Uncaught ReferenceError: link is not defined
- source: http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174
- line: 97
- col: 21
- stack: 
    ReferenceError: link is not defined
        at http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:97:21
        at Array.map (<anonymous>)
        at LinksPage (http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:92:120)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:15962:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19818:15)

## 2026-09-12 19:46:12.214Z window.error
- message: Uncaught ReferenceError: link is not defined
- source: http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174
- line: 97
- col: 21
- stack: 
    ReferenceError: link is not defined
        at http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:97:21
        at Array.map (<anonymous>)
        at LinksPage (http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:92:120)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:15962:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19818:15)

## 2026-09-12 19:46:12.215Z console.error
- text: 
    The above error occurred in the <LinksPage> component:
    
        at LinksPage (http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:92:120)
        at App
    
    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

## 2026-09-12 19:46:12.216Z unhandledrejection
- message: link is not defined
- stack: 
    ReferenceError: link is not defined
        at http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:97:21
        at Array.map (<anonymous>)
        at LinksPage (http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:92:120)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19169:15)

## 2026-09-12 19:46:14.208Z window.error
- message: Uncaught ReferenceError: link is not defined
- source: http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174
- line: 97
- col: 21
- stack: 
    ReferenceError: link is not defined
        at http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:97:21
        at Array.map (<anonymous>)
        at LinksPage (http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:92:120)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:15962:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19818:15)

## 2026-09-12 19:46:14.210Z window.error
- message: Uncaught ReferenceError: link is not defined
- source: http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174
- line: 97
- col: 21
- stack: 
    ReferenceError: link is not defined
        at http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:97:21
        at Array.map (<anonymous>)
        at LinksPage (http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:92:120)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:15962:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19818:15)

## 2026-09-12 19:46:14.211Z console.error
- text: 
    The above error occurred in the <LinksPage> component:
    
        at LinksPage (http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:92:120)
        at App
    
    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

## 2026-09-12 19:46:14.213Z unhandledrejection
- message: link is not defined
- stack: 
    ReferenceError: link is not defined
        at http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:97:21
        at Array.map (<anonymous>)
        at LinksPage (http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:92:120)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19169:15)

## 2026-09-12 19:47:05.130Z load
- url: http://localhost:3000/freelancer
- title: Hostinger Horizons

## 2026-09-12 19:47:12.403Z load
- url: http://localhost:3000/consultoria-ia
- title: Hostinger Horizons

## 2026-09-12 19:47:57.175Z load
- url: http://localhost:3000/links
- title: Hostinger Horizons

## 2026-09-12 19:47:57.301Z window.error
- message: Uncaught ReferenceError: link is not defined
- source: http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174
- line: 97
- col: 21
- stack: 
    ReferenceError: link is not defined
        at http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:97:21
        at Array.map (<anonymous>)
        at LinksPage (http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:92:120)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:15962:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19818:15)

## 2026-09-12 19:47:57.302Z window.error
- message: Uncaught ReferenceError: link is not defined
- source: http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174
- line: 97
- col: 21
- stack: 
    ReferenceError: link is not defined
        at http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:97:21
        at Array.map (<anonymous>)
        at LinksPage (http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:92:120)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:15962:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19818:15)

## 2026-09-12 19:47:57.303Z console.error
- text: 
    The above error occurred in the <LinksPage> component:
    
        at LinksPage (http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:92:120)
        at App
    
    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

## 2026-09-12 19:47:57.303Z window.error
- message: Uncaught ReferenceError: link is not defined
- source: http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180
- line: 19466
- col: 13
- stack: 
    ReferenceError: link is not defined
        at http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:97:21
        at Array.map (<anonymous>)
        at LinksPage (http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:92:120)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19169:15)

## 2026-09-12 19:47:58.720Z load
- url: http://localhost:3000/home
- title: Hostinger Horizons

## 2026-09-12 19:47:58.773Z console.error
- text: 
    Warning: Invalid DOM property `%s`. Did you mean `%s`?%s frameborder frameBorder 
        at iframe
        at div
        at div
        at MotionComponent (http://localhost:3000/node_modules/.vite/deps/framer-motion.js?v=df09a857:942:40)
        at div
        at section
        at About (http://localhost:3000/src/components/About.jsx?t=1789241942904:10:21)
        at main
        at div
        at App

## 2026-09-12 19:47:58.774Z console.error
- text: 
    Warning: Invalid DOM property `%s`. Did you mean `%s`?%s referrerpolicy referrerPolicy 
        at iframe
        at div
        at div
        at MotionComponent (http://localhost:3000/node_modules/.vite/deps/framer-motion.js?v=df09a857:942:40)
        at div
        at section
        at About (http://localhost:3000/src/components/About.jsx?t=1789241942904:10:21)
        at main
        at div
        at App

## 2026-09-12 19:47:58.774Z console.error
- text: 
    Warning: Invalid DOM property `%s`. Did you mean `%s`?%s allowfullscreen allowFullScreen 
        at iframe
        at div
        at div
        at MotionComponent (http://localhost:3000/node_modules/.vite/deps/framer-motion.js?v=df09a857:942:40)
        at div
        at section
        at About (http://localhost:3000/src/components/About.jsx?t=1789241942904:10:21)
        at main
        at div
        at App

## 2026-09-12 19:48:10.775Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Samuel Santana"}

## 2026-09-12 19:48:10.978Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Samuel Santana"}

## 2026-09-12 19:48:13.986Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"About"}

## 2026-09-12 19:48:14.594Z click
- element: {"tag":"li","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Experience"}

## 2026-09-12 19:48:15.080Z click
- element: {"tag":"li","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Skills"}

## 2026-09-12 19:48:15.440Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Skills"}

## 2026-09-12 19:48:16.017Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Experience"}

## 2026-09-12 19:48:16.520Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Projects"}

## 2026-09-12 19:48:17.061Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Contact"}

## 2026-09-12 19:48:35.711Z load
- url: http://localhost:3000/links
- title: Hostinger Horizons

## 2026-09-12 19:48:35.789Z window.error
- message: Uncaught ReferenceError: link is not defined
- source: http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174
- line: 97
- col: 21
- stack: 
    ReferenceError: link is not defined
        at http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:97:21
        at Array.map (<anonymous>)
        at LinksPage (http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:92:120)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:15962:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19818:15)

## 2026-09-12 19:48:35.793Z window.error
- message: Uncaught ReferenceError: link is not defined
- source: http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174
- line: 97
- col: 21
- stack: 
    ReferenceError: link is not defined
        at http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:97:21
        at Array.map (<anonymous>)
        at LinksPage (http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:92:120)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:15962:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19818:15)

## 2026-09-12 19:48:35.795Z console.error
- text: 
    The above error occurred in the <LinksPage> component:
    
        at LinksPage (http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:92:120)
        at App
    
    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

## 2026-09-12 19:48:35.796Z window.error
- message: Uncaught ReferenceError: link is not defined
- source: http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180
- line: 19466
- col: 13
- stack: 
    ReferenceError: link is not defined
        at http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:97:21
        at Array.map (<anonymous>)
        at LinksPage (http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:92:120)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19169:15)

## 2026-09-12 19:48:38.052Z load
- url: http://localhost:3000/link
- title: Hostinger Horizons

## 2026-09-12 19:48:38.154Z console.error
- text: 
    Warning: Invalid DOM property `%s`. Did you mean `%s`?%s frameborder frameBorder 
        at iframe
        at div
        at div
        at MotionComponent (http://localhost:3000/node_modules/.vite/deps/framer-motion.js?v=df09a857:942:40)
        at div
        at section
        at About (http://localhost:3000/src/components/About.jsx?t=1789241942904:10:21)
        at main
        at div
        at App

## 2026-09-12 19:48:38.154Z console.error
- text: 
    Warning: Invalid DOM property `%s`. Did you mean `%s`?%s referrerpolicy referrerPolicy 
        at iframe
        at div
        at div
        at MotionComponent (http://localhost:3000/node_modules/.vite/deps/framer-motion.js?v=df09a857:942:40)
        at div
        at section
        at About (http://localhost:3000/src/components/About.jsx?t=1789241942904:10:21)
        at main
        at div
        at App

## 2026-09-12 19:48:38.164Z console.error
- text: 
    Warning: Invalid DOM property `%s`. Did you mean `%s`?%s allowfullscreen allowFullScreen 
        at iframe
        at div
        at div
        at MotionComponent (http://localhost:3000/node_modules/.vite/deps/framer-motion.js?v=df09a857:942:40)
        at div
        at section
        at About (http://localhost:3000/src/components/About.jsx?t=1789241942904:10:21)
        at main
        at div
        at App

## 2026-09-12 19:49:13.627Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Consultoria IA"}

## 2026-09-12 19:49:13.867Z load
- url: http://localhost:3000/consultoria-ia
- title: Hostinger Horizons

## 2026-09-12 19:49:19.080Z click
- element: {"tag":"section","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Aulas remotas de tecnologiaTambém atuo como professor de tecnologia. Ofereço aulas particulares e mentorias somente de forma remota, com cobrança por hora, adaptadas ao seu nível e objetivo. Conteúdos práticos, acompanhamento individual e foco em aplicação real."}

## 2026-09-12 19:49:19.401Z click
- element: {"tag":"section","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Quer aplicar IA e tecnologia de forma prática?Converse comigo para identificar oportunidades de automação, melhoria de processos e desenvolvimento de novas soluções.Solicitar contato "}

## 2026-09-12 19:49:21.178Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Solicitar contato "}

## 2026-09-12 19:49:27.658Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Meus links"}

## 2026-09-12 19:49:27.867Z load
- url: http://localhost:3000/links
- title: Hostinger Horizons

## 2026-09-12 19:49:27.929Z window.error
- message: Uncaught ReferenceError: link is not defined
- source: http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174
- line: 97
- col: 21
- stack: 
    ReferenceError: link is not defined
        at http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:97:21
        at Array.map (<anonymous>)
        at LinksPage (http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:92:120)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:15962:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19818:15)

## 2026-09-12 19:49:27.930Z window.error
- message: Uncaught ReferenceError: link is not defined
- source: http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174
- line: 97
- col: 21
- stack: 
    ReferenceError: link is not defined
        at http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:97:21
        at Array.map (<anonymous>)
        at LinksPage (http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:92:120)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:15962:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19818:15)

## 2026-09-12 19:49:27.931Z console.error
- text: 
    The above error occurred in the <LinksPage> component:
    
        at LinksPage (http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:92:120)
        at App
    
    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

## 2026-09-12 19:49:27.932Z window.error
- message: Uncaught ReferenceError: link is not defined
- source: http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180
- line: 19466
- col: 13
- stack: 
    ReferenceError: link is not defined
        at http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:97:21
        at Array.map (<anonymous>)
        at LinksPage (http://localhost:3000/src/pages/LinksPage.jsx?t=1789242369174:92:120)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19169:15)

## 2026-09-12 19:49:28.464Z window.error
- message: Uncaught ReferenceError: link is not defined
- source: http://localhost:3000/src/pages/LinksPage.jsx?t=1789242568210
- line: 96
- col: 21
- stack: 
    ReferenceError: link is not defined
        at http://localhost:3000/src/pages/LinksPage.jsx?t=1789242568210:96:21
        at Array.map (<anonymous>)
        at LinksPage (http://localhost:3000/src/pages/LinksPage.jsx?t=1789242568210:91:120)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:15962:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19818:15)

## 2026-09-12 19:49:28.465Z window.error
- message: Uncaught ReferenceError: link is not defined
- source: http://localhost:3000/src/pages/LinksPage.jsx?t=1789242568210
- line: 96
- col: 21
- stack: 
    ReferenceError: link is not defined
        at http://localhost:3000/src/pages/LinksPage.jsx?t=1789242568210:96:21
        at Array.map (<anonymous>)
        at LinksPage (http://localhost:3000/src/pages/LinksPage.jsx?t=1789242568210:91:120)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:15962:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19818:15)

## 2026-09-12 19:49:28.465Z console.error
- text: 
    The above error occurred in the <LinksPage> component:
    
        at LinksPage (http://localhost:3000/src/pages/LinksPage.jsx?t=1789242568210:91:120)
        at App
    
    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

## 2026-09-12 19:49:28.466Z unhandledrejection
- message: link is not defined
- stack: 
    ReferenceError: link is not defined
        at http://localhost:3000/src/pages/LinksPage.jsx?t=1789242568210:96:21
        at Array.map (<anonymous>)
        at LinksPage (http://localhost:3000/src/pages/LinksPage.jsx?t=1789242568210:91:120)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19169:15)

## 2026-09-12 19:49:33.084Z load
- url: http://localhost:3000/link
- title: Hostinger Horizons

## 2026-09-12 19:49:33.176Z console.error
- text: 
    Warning: Invalid DOM property `%s`. Did you mean `%s`?%s frameborder frameBorder 
        at iframe
        at div
        at div
        at MotionComponent (http://localhost:3000/node_modules/.vite/deps/framer-motion.js?v=df09a857:942:40)
        at div
        at section
        at About (http://localhost:3000/src/components/About.jsx?t=1789241942904:10:21)
        at main
        at div
        at App

## 2026-09-12 19:49:33.177Z console.error
- text: 
    Warning: Invalid DOM property `%s`. Did you mean `%s`?%s referrerpolicy referrerPolicy 
        at iframe
        at div
        at div
        at MotionComponent (http://localhost:3000/node_modules/.vite/deps/framer-motion.js?v=df09a857:942:40)
        at div
        at section
        at About (http://localhost:3000/src/components/About.jsx?t=1789241942904:10:21)
        at main
        at div
        at App

## 2026-09-12 19:49:33.177Z console.error
- text: 
    Warning: Invalid DOM property `%s`. Did you mean `%s`?%s allowfullscreen allowFullScreen 
        at iframe
        at div
        at div
        at MotionComponent (http://localhost:3000/node_modules/.vite/deps/framer-motion.js?v=df09a857:942:40)
        at div
        at section
        at About (http://localhost:3000/src/components/About.jsx?t=1789241942904:10:21)
        at main
        at div
        at App

## 2026-09-12 19:49:49.161Z load
- url: http://localhost:3000/link
- title: Hostinger Horizons

## 2026-09-12 19:49:49.263Z console.error
- text: 
    Warning: Invalid DOM property `%s`. Did you mean `%s`?%s frameborder frameBorder 
        at iframe
        at div
        at div
        at MotionComponent (http://localhost:3000/node_modules/.vite/deps/framer-motion.js?v=df09a857:942:40)
        at div
        at section
        at About (http://localhost:3000/src/components/About.jsx?t=1789241942904:10:21)
        at main
        at div
        at App

## 2026-09-12 19:49:49.264Z console.error
- text: 
    Warning: Invalid DOM property `%s`. Did you mean `%s`?%s referrerpolicy referrerPolicy 
        at iframe
        at div
        at div
        at MotionComponent (http://localhost:3000/node_modules/.vite/deps/framer-motion.js?v=df09a857:942:40)
        at div
        at section
        at About (http://localhost:3000/src/components/About.jsx?t=1789241942904:10:21)
        at main
        at div
        at App

## 2026-09-12 19:49:49.264Z console.error
- text: 
    Warning: Invalid DOM property `%s`. Did you mean `%s`?%s allowfullscreen allowFullScreen 
        at iframe
        at div
        at div
        at MotionComponent (http://localhost:3000/node_modules/.vite/deps/framer-motion.js?v=df09a857:942:40)
        at div
        at section
        at About (http://localhost:3000/src/components/About.jsx?t=1789241942904:10:21)
        at main
        at div
        at App

## 2026-09-12 19:49:53.340Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Links"}

## 2026-09-12 19:49:53.522Z load
- url: http://localhost:3000/links
- title: Hostinger Horizons

## 2026-09-12 19:49:53.568Z window.error
- message: Uncaught ReferenceError: link is not defined
- source: http://localhost:3000/src/pages/LinksPage.jsx?t=1789242568210
- line: 96
- col: 21
- stack: 
    ReferenceError: link is not defined
        at http://localhost:3000/src/pages/LinksPage.jsx?t=1789242568210:96:21
        at Array.map (<anonymous>)
        at LinksPage (http://localhost:3000/src/pages/LinksPage.jsx?t=1789242568210:91:120)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:15962:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19818:15)

## 2026-09-12 19:49:53.569Z window.error
- message: Uncaught ReferenceError: link is not defined
- source: http://localhost:3000/src/pages/LinksPage.jsx?t=1789242568210
- line: 96
- col: 21
- stack: 
    ReferenceError: link is not defined
        at http://localhost:3000/src/pages/LinksPage.jsx?t=1789242568210:96:21
        at Array.map (<anonymous>)
        at LinksPage (http://localhost:3000/src/pages/LinksPage.jsx?t=1789242568210:91:120)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:15962:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19818:15)

## 2026-09-12 19:49:53.570Z console.error
- text: 
    The above error occurred in the <LinksPage> component:
    
        at LinksPage (http://localhost:3000/src/pages/LinksPage.jsx?t=1789242568210:91:120)
        at App
    
    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

## 2026-09-12 19:49:53.570Z window.error
- message: Uncaught ReferenceError: link is not defined
- source: http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180
- line: 19466
- col: 13
- stack: 
    ReferenceError: link is not defined
        at http://localhost:3000/src/pages/LinksPage.jsx?t=1789242568210:96:21
        at Array.map (<anonymous>)
        at LinksPage (http://localhost:3000/src/pages/LinksPage.jsx?t=1789242568210:91:120)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19169:15)

## 2026-09-12 19:50:07.827Z load
- url: http://localhost:3000/link
- title: Hostinger Horizons

## 2026-09-12 19:50:07.924Z console.error
- text: 
    Warning: Invalid DOM property `%s`. Did you mean `%s`?%s frameborder frameBorder 
        at iframe
        at div
        at div
        at MotionComponent (http://localhost:3000/node_modules/.vite/deps/framer-motion.js?v=df09a857:942:40)
        at div
        at section
        at About (http://localhost:3000/src/components/About.jsx?t=1789241942904:10:21)
        at main
        at div
        at App

## 2026-09-12 19:50:07.925Z console.error
- text: 
    Warning: Invalid DOM property `%s`. Did you mean `%s`?%s referrerpolicy referrerPolicy 
        at iframe
        at div
        at div
        at MotionComponent (http://localhost:3000/node_modules/.vite/deps/framer-motion.js?v=df09a857:942:40)
        at div
        at section
        at About (http://localhost:3000/src/components/About.jsx?t=1789241942904:10:21)
        at main
        at div
        at App

## 2026-09-12 19:50:07.925Z console.error
- text: 
    Warning: Invalid DOM property `%s`. Did you mean `%s`?%s allowfullscreen allowFullScreen 
        at iframe
        at div
        at div
        at MotionComponent (http://localhost:3000/node_modules/.vite/deps/framer-motion.js?v=df09a857:942:40)
        at div
        at section
        at About (http://localhost:3000/src/components/About.jsx?t=1789241942904:10:21)
        at main
        at div
        at App

## 2026-09-12 19:50:10.516Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Skills"}

## 2026-09-12 19:50:16.170Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Samuel SantanaHomeAboutSkillsExperienceProjectsContactFreelancerConsultoria IALinks"}

## 2026-09-12 19:50:16.537Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Consultoria IA"}

## 2026-09-12 19:50:16.688Z load
- url: http://localhost:3000/consultoria-ia
- title: Hostinger Horizons

## 2026-09-12 19:50:18.697Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Voltar ao portfólio"}

## 2026-09-12 19:50:18.894Z load
- url: http://localhost:3000/
- title: Hostinger Horizons

## 2026-09-12 19:50:19.515Z load
- url: http://localhost:3000/links
- title: Hostinger Horizons

## 2026-09-12 19:50:19.039Z console.error
- text: 
    Warning: Invalid DOM property `%s`. Did you mean `%s`?%s frameborder frameBorder 
        at iframe
        at div
        at div
        at MotionComponent (http://localhost:3000/node_modules/.vite/deps/framer-motion.js?v=df09a857:942:40)
        at div
        at section
        at About (http://localhost:3000/src/components/About.jsx?t=1789241942904:10:21)
        at main
        at div
        at App

## 2026-09-12 19:50:19.041Z console.error
- text: 
    Warning: Invalid DOM property `%s`. Did you mean `%s`?%s referrerpolicy referrerPolicy 
        at iframe
        at div
        at div
        at MotionComponent (http://localhost:3000/node_modules/.vite/deps/framer-motion.js?v=df09a857:942:40)
        at div
        at section
        at About (http://localhost:3000/src/components/About.jsx?t=1789241942904:10:21)
        at main
        at div
        at App

## 2026-09-12 19:50:19.041Z console.error
- text: 
    Warning: Invalid DOM property `%s`. Did you mean `%s`?%s allowfullscreen allowFullScreen 
        at iframe
        at div
        at div
        at MotionComponent (http://localhost:3000/node_modules/.vite/deps/framer-motion.js?v=df09a857:942:40)
        at div
        at section
        at About (http://localhost:3000/src/components/About.jsx?t=1789241942904:10:21)
        at main
        at div
        at App

## 2026-09-12 19:50:20.041Z window.error
- message: Uncaught ReferenceError: link is not defined
- source: http://localhost:3000/src/pages/LinksPage.jsx?t=1789242568210
- line: 96
- col: 21
- stack: 
    ReferenceError: link is not defined
        at http://localhost:3000/src/pages/LinksPage.jsx?t=1789242568210:96:21
        at Array.map (<anonymous>)
        at LinksPage (http://localhost:3000/src/pages/LinksPage.jsx?t=1789242568210:91:120)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:15962:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19818:15)

## 2026-09-12 19:50:20.055Z window.error
- message: Uncaught ReferenceError: link is not defined
- source: http://localhost:3000/src/pages/LinksPage.jsx?t=1789242568210
- line: 96
- col: 21
- stack: 
    ReferenceError: link is not defined
        at http://localhost:3000/src/pages/LinksPage.jsx?t=1789242568210:96:21
        at Array.map (<anonymous>)
        at LinksPage (http://localhost:3000/src/pages/LinksPage.jsx?t=1789242568210:91:120)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:15962:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19818:15)

## 2026-09-12 19:50:20.063Z console.error
- text: 
    The above error occurred in the <LinksPage> component:
    
        at LinksPage (http://localhost:3000/src/pages/LinksPage.jsx?t=1789242568210:91:120)
        at App
    
    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

## 2026-09-12 19:50:20.070Z window.error
- message: Uncaught ReferenceError: link is not defined
- source: http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180
- line: 19466
- col: 13
- stack: 
    ReferenceError: link is not defined
        at http://localhost:3000/src/pages/LinksPage.jsx?t=1789242568210:96:21
        at Array.map (<anonymous>)
        at LinksPage (http://localhost:3000/src/pages/LinksPage.jsx?t=1789242568210:91:120)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19169:15)

## 2026-09-12 19:50:25.185Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Links"}

## 2026-09-12 19:50:25.395Z load
- url: http://localhost:3000/links
- title: Hostinger Horizons

## 2026-09-12 19:50:25.480Z window.error
- message: Uncaught ReferenceError: link is not defined
- source: http://localhost:3000/src/pages/LinksPage.jsx?t=1789242568210
- line: 96
- col: 21
- stack: 
    ReferenceError: link is not defined
        at http://localhost:3000/src/pages/LinksPage.jsx?t=1789242568210:96:21
        at Array.map (<anonymous>)
        at LinksPage (http://localhost:3000/src/pages/LinksPage.jsx?t=1789242568210:91:120)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:15962:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19818:15)

## 2026-09-12 19:50:25.482Z window.error
- message: Uncaught ReferenceError: link is not defined
- source: http://localhost:3000/src/pages/LinksPage.jsx?t=1789242568210
- line: 96
- col: 21
- stack: 
    ReferenceError: link is not defined
        at http://localhost:3000/src/pages/LinksPage.jsx?t=1789242568210:96:21
        at Array.map (<anonymous>)
        at LinksPage (http://localhost:3000/src/pages/LinksPage.jsx?t=1789242568210:91:120)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:15962:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19818:15)

## 2026-09-12 19:50:25.483Z console.error
- text: 
    The above error occurred in the <LinksPage> component:
    
        at LinksPage (http://localhost:3000/src/pages/LinksPage.jsx?t=1789242568210:91:120)
        at App
    
    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

## 2026-09-12 19:50:25.483Z window.error
- message: Uncaught ReferenceError: link is not defined
- source: http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180
- line: 19466
- col: 13
- stack: 
    ReferenceError: link is not defined
        at http://localhost:3000/src/pages/LinksPage.jsx?t=1789242568210:96:21
        at Array.map (<anonymous>)
        at LinksPage (http://localhost:3000/src/pages/LinksPage.jsx?t=1789242568210:91:120)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-QOMV747J.js?v=4474e180:19169:15)

## 2026-09-12 19:50:41.733Z load
- url: http://localhost:3000/freelancer
- title: Hostinger Horizons

## 2026-09-12 19:50:52.156Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Voltar ao portfólio"}

## 2026-09-12 19:50:52.354Z load
- url: http://localhost:3000/
- title: Hostinger Horizons

## 2026-09-12 19:50:52.471Z console.error
- text: 
    Warning: Invalid DOM property `%s`. Did you mean `%s`?%s frameborder frameBorder 
        at iframe
        at div
        at div
        at MotionComponent (http://localhost:3000/node_modules/.vite/deps/framer-motion.js?v=df09a857:942:40)
        at div
        at section
        at About (http://localhost:3000/src/components/About.jsx?t=1789241942904:10:21)
        at main
        at div
        at App

## 2026-09-12 19:50:52.471Z console.error
- text: 
    Warning: Invalid DOM property `%s`. Did you mean `%s`?%s referrerpolicy referrerPolicy 
        at iframe
        at div
        at div
        at MotionComponent (http://localhost:3000/node_modules/.vite/deps/framer-motion.js?v=df09a857:942:40)
        at div
        at section
        at About (http://localhost:3000/src/components/About.jsx?t=1789241942904:10:21)
        at main
        at div
        at App

## 2026-09-12 19:50:52.471Z console.error
- text: 
    Warning: Invalid DOM property `%s`. Did you mean `%s`?%s allowfullscreen allowFullScreen 
        at iframe
        at div
        at div
        at MotionComponent (http://localhost:3000/node_modules/.vite/deps/framer-motion.js?v=df09a857:942:40)
        at div
        at section
        at About (http://localhost:3000/src/components/About.jsx?t=1789241942904:10:21)
        at main
        at div
        at App

## 2026-09-12 19:50:53.731Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Freelancer"}

## 2026-09-12 19:50:53.960Z load
- url: http://localhost:3000/freelancer
- title: Hostinger Horizons

## 2026-09-12 19:50:56.024Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Voltar ao portfólio"}

## 2026-09-12 19:50:56.250Z load
- url: http://localhost:3000/
- title: Hostinger Horizons

## 2026-09-12 19:50:56.380Z console.error
- text: 
    Warning: Invalid DOM property `%s`. Did you mean `%s`?%s frameborder frameBorder 
        at iframe
        at div
        at div
        at MotionComponent (http://localhost:3000/node_modules/.vite/deps/framer-motion.js?v=df09a857:942:40)
        at div
        at section
        at About (http://localhost:3000/src/components/About.jsx?t=1789241942904:10:21)
        at main
        at div
        at App

## 2026-09-12 19:50:56.381Z console.error
- text: 
    Warning: Invalid DOM property `%s`. Did you mean `%s`?%s referrerpolicy referrerPolicy 
        at iframe
        at div
        at div
        at MotionComponent (http://localhost:3000/node_modules/.vite/deps/framer-motion.js?v=df09a857:942:40)
        at div
        at section
        at About (http://localhost:3000/src/components/About.jsx?t=1789241942904:10:21)
        at main
        at div
        at App

## 2026-09-12 19:50:56.381Z console.error
- text: 
    Warning: Invalid DOM property `%s`. Did you mean `%s`?%s allowfullscreen allowFullScreen 
        at iframe
        at div
        at div
        at MotionComponent (http://localhost:3000/node_modules/.vite/deps/framer-motion.js?v=df09a857:942:40)
        at div
        at section
        at About (http://localhost:3000/src/components/About.jsx?t=1789241942904:10:21)
        at main
        at div
        at App

## 2026-09-12 19:50:57.765Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Consultoria IA"}

## 2026-09-12 19:50:58.016Z load
- url: http://localhost:3000/consultoria-ia
- title: Hostinger Horizons

## 2026-09-12 19:51:18.017Z load
- url: http://localhost:3000/links
- title: Hostinger Horizons

## 2026-09-12 19:51:31.268Z click
- element: {"tag":"header","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Voltar ao portfólioMeus links"}

## 2026-09-12 19:51:32.070Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Meus links"}

## 2026-09-12 19:51:32.244Z load
- url: http://localhost:3000/links
- title: Hostinger Horizons

## 2026-09-12 19:51:40.393Z load
- url: http://localhost:3000/consultoria-ia
- title: Hostinger Horizons

## 2026-09-12 19:51:43.387Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Voltar ao portfólio"}

## 2026-09-12 19:51:43.558Z load
- url: http://localhost:3000/
- title: Hostinger Horizons

## 2026-09-12 19:51:43.673Z console.error
- text: 
    Warning: Invalid DOM property `%s`. Did you mean `%s`?%s frameborder frameBorder 
        at iframe
        at div
        at div
        at MotionComponent (http://localhost:3000/node_modules/.vite/deps/framer-motion.js?v=df09a857:942:40)
        at div
        at section
        at About (http://localhost:3000/src/components/About.jsx?t=1789241942904:10:21)
        at main
        at div
        at App

## 2026-09-12 19:51:43.673Z console.error
- text: 
    Warning: Invalid DOM property `%s`. Did you mean `%s`?%s referrerpolicy referrerPolicy 
        at iframe
        at div
        at div
        at MotionComponent (http://localhost:3000/node_modules/.vite/deps/framer-motion.js?v=df09a857:942:40)
        at div
        at section
        at About (http://localhost:3000/src/components/About.jsx?t=1789241942904:10:21)
        at main
        at div
        at App

## 2026-09-12 19:51:43.673Z console.error
- text: 
    Warning: Invalid DOM property `%s`. Did you mean `%s`?%s allowfullscreen allowFullScreen 
        at iframe
        at div
        at div
        at MotionComponent (http://localhost:3000/node_modules/.vite/deps/framer-motion.js?v=df09a857:942:40)
        at div
        at section
        at About (http://localhost:3000/src/components/About.jsx?t=1789241942904:10:21)
        at main
        at div
        at App

## 2026-09-12 19:51:45.818Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Freelancer"}

## 2026-09-12 19:51:46.027Z load
- url: http://localhost:3000/freelancer
- title: Hostinger Horizons

## 2026-09-12 19:52:06.360Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Meus links"}

## 2026-09-12 19:52:06.502Z load
- url: http://localhost:3000/links
- title: Hostinger Horizons

## 2026-09-12 19:52:17.438Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Mundo de Sucesso: Consultoria e Desenvolvimento"}

## 2026-09-12 19:52:20.348Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Samuel Santana | Web & Automações"}

## 2026-09-12 19:56:28.631Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Professor e Consultoria de Programação em Projetos e Automações"}

## 2026-09-12 19:56:31.196Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Portfólio"}

## 2026-09-12 19:56:58.508Z load
- url: http://localhost:3000/consultoria-ia
- title: Hostinger Horizons

## 2026-09-12 19:58:07.911Z click
- element: {"tag":"section","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Aulas remotas de tecnologiaTambém atuo como professor de tecnologia. Ofereço aulas particulares e mentorias somente de forma remota, com cobrança por hora, adaptadas ao seu nível e objetivo. Conteúdos práticos, acompanhamento individual e foco em aplicação real."}

## 2026-09-12 19:58:15.260Z load
- url: http://localhost:3000/links
- title: Hostinger Horizons

