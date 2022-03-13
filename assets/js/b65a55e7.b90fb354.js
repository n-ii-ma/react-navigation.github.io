"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[6943],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),h=i,g=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return t?a.createElement(g,r(r({ref:n},c),{},{components:t})):a.createElement(g,r({ref:n},c))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},82047:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=t(87462),i=t(63366),o=(t(67294),t(3905)),r=["components"],l={id:"navigation-container",title:"NavigationContainer",sidebar_label:"NavigationContainer"},s=void 0,p={unversionedId:"navigation-container",id:"version-6.x/navigation-container",isDocsHomePage:!1,title:"NavigationContainer",description:"The NavigationContainer is responsible for managing your app state and linking your top-level navigator to the app environment.",source:"@site/versioned_docs/version-6.x/navigation-container.md",sourceDirName:".",slug:"/navigation-container",permalink:"/docs/navigation-container",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/navigation-container.md",tags:[],version:"6.x",frontMatter:{id:"navigation-container",title:"NavigationContainer",sidebar_label:"NavigationContainer"},sidebar:"version-6.x/docs",previous:{title:"Upgrading from 5.x",permalink:"/docs/upgrading-from-5.x"},next:{title:"ServerContainer",permalink:"/docs/server-container"}},c=[{value:"Ref",id:"ref",children:[{value:"Methods on the ref",id:"methods-on-the-ref",children:[{value:"<code>resetRoot</code>",id:"resetroot",children:[],level:4},{value:"<code>getRootState</code>",id:"getrootstate",children:[],level:4},{value:"<code>getCurrentRoute</code>",id:"getcurrentroute",children:[],level:4},{value:"<code>getCurrentOptions</code>",id:"getcurrentoptions",children:[],level:4},{value:"<code>addListener</code>",id:"addlistener",children:[{value:"<code>state</code>",id:"state",children:[],level:5},{value:"<code>options</code>",id:"options",children:[],level:5}],level:4}],level:3}],level:2},{value:"Props",id:"props",children:[{value:"<code>initialState</code>",id:"initialstate",children:[],level:3},{value:"<code>onStateChange</code>",id:"onstatechange",children:[],level:3},{value:"<code>onReady</code>",id:"onready",children:[],level:3},{value:"<code>linking</code>",id:"linking",children:[{value:"Options",id:"options-1",children:[{value:"<code>linking.prefixes</code>",id:"linkingprefixes",children:[],level:5},{value:"<code>linking.config</code>",id:"linkingconfig",children:[],level:5},{value:"<code>linking.enabled</code>",id:"linkingenabled",children:[],level:5},{value:"<code>linking.getInitialURL</code>",id:"linkinggetinitialurl",children:[],level:5},{value:"<code>linking.subscribe</code>",id:"linkingsubscribe",children:[],level:5},{value:"<code>linking.getStateFromPath</code>",id:"linkinggetstatefrompath",children:[],level:5},{value:"<code>linking.getPathFromState</code>",id:"linkinggetpathfromstate",children:[],level:5}],level:4}],level:3},{value:"<code>fallback</code>",id:"fallback",children:[],level:3},{value:"<code>documentTitle</code>",id:"documenttitle",children:[{value:"<code>documentTitle.enabled</code>",id:"documenttitleenabled",children:[],level:4},{value:"<code>documentTitle.formatter</code>",id:"documenttitleformatter",children:[],level:4}],level:3},{value:"<code>theme</code>",id:"theme",children:[],level:3},{value:"<code>independent</code>",id:"independent",children:[],level:3}],level:2}],d={toc:c};function u(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"NavigationContainer")," is responsible for managing your app state and linking your top-level navigator to the app environment."),(0,o.kt)("p",null,"The container takes care of platform specific integration and provides various useful functionality:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Deep link integration with the ",(0,o.kt)("a",{parentName:"li",href:"#linking"},(0,o.kt)("inlineCode",{parentName:"a"},"linking"))," prop."),(0,o.kt)("li",{parentName:"ol"},"Notify state changes for ",(0,o.kt)("a",{parentName:"li",href:"/docs/screen-tracking"},"screen tracking"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/state-persistence"},"state persistence")," etc."),(0,o.kt)("li",{parentName:"ol"},"Handle system back button on Android by using the ",(0,o.kt)("a",{parentName:"li",href:"https://reactnative.dev/docs/backhandler"},(0,o.kt)("inlineCode",{parentName:"a"},"BackHandler"))," API from React Native.")),(0,o.kt)("p",null,"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { NavigationContainer } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nconst Stack = createNativeStackNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator>{/* ... */}</Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n")),(0,o.kt)("h2",{id:"ref"},"Ref"),(0,o.kt)("p",null,"It's also possible to attach a ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/refs-and-the-dom.html#creating-refs"},(0,o.kt)("inlineCode",{parentName:"a"},"ref"))," to the container to get access to various helper methods, for example, dispatch navigation actions."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("samp",{id:"using-refs"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';\n\nfunction App() {\n  const navigationRef = useNavigationContainerRef(); // You can also use a regular ref with `React.useRef()`\n\n  return (\n    <View style={{ flex: 1 }}>\n      <Button onPress={() => navigationRef.navigate('Home')}>\n        Go home\n      </Button>\n      <NavigationContainer ref={navigationRef}>{/* ... */}</NavigationContainer>\n    </View>\n  );\n}\n")),(0,o.kt)("p",null,"If you're using a regular ref object, keep in mind that the ref may be initially ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," in some situations (such as when linking is enabled). To make sure that the ref is initialized, you can use the ",(0,o.kt)("a",{parentName:"p",href:"#onready"},(0,o.kt)("inlineCode",{parentName:"a"},"onReady"))," callback to get notified when the navigation container finishes mounting."),(0,o.kt)("h3",{id:"methods-on-the-ref"},"Methods on the ref"),(0,o.kt)("p",null,"The ref object includes all of the common navigation methods such as ",(0,o.kt)("inlineCode",{parentName:"p"},"navigate"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"goBack")," etc. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/navigation-actions"},"docs for ",(0,o.kt)("inlineCode",{parentName:"a"},"CommonActions"))," for more details."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"navigationRef.navigate(name, params);\n")),(0,o.kt)("p",null,"All of these methods will act as if they were called inside the currently focused screen. It's important note that there must be a navigator rendered to handle these actions."),(0,o.kt)("p",null,"In addition to these methods, the ref object also includes the following special methods:"),(0,o.kt)("h4",{id:"resetroot"},(0,o.kt)("inlineCode",{parentName:"h4"},"resetRoot")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"resetRoot")," method lets you reset the state of the navigation tree to the specified state object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"navigationRef.resetRoot({\n  index: 0,\n  routes: [{ name: 'Profile' }],\n});\n")),(0,o.kt)("p",null,"Unlike the ",(0,o.kt)("inlineCode",{parentName:"p"},"reset")," method, this acts on the root navigator instead of navigator of the currently focused screen."),(0,o.kt)("h4",{id:"getrootstate"},(0,o.kt)("inlineCode",{parentName:"h4"},"getRootState")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"getRootState")," method returns a ",(0,o.kt)("a",{parentName:"p",href:"/docs/navigation-state"},"navigation state")," object containing the navigation states for all navigators in the navigation tree:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const state = navigationRef.getRootState();\n")),(0,o.kt)("p",null,"Note that the returned ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," object will be ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," if there are no navigators currently rendered."),(0,o.kt)("h4",{id:"getcurrentroute"},(0,o.kt)("inlineCode",{parentName:"h4"},"getCurrentRoute")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"getCurrentRoute")," method returns the route object for the currently focused screen in the whole navigation tree:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const route = navigationRef.getCurrentRoute();\n")),(0,o.kt)("p",null,"Note that the returned ",(0,o.kt)("inlineCode",{parentName:"p"},"route")," object will be ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," if there are no navigators currently rendered."),(0,o.kt)("h4",{id:"getcurrentoptions"},(0,o.kt)("inlineCode",{parentName:"h4"},"getCurrentOptions")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"getCurrentOptions")," method returns the options for the currently focused screen in the whole navigation tree:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const options = navigationRef.getCurrentOptions();\n")),(0,o.kt)("p",null,"Note that the returned ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," object will be ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," if there are no navigators currently rendered."),(0,o.kt)("h4",{id:"addlistener"},(0,o.kt)("inlineCode",{parentName:"h4"},"addListener")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"addListener")," method lets you listen to the following events:"),(0,o.kt)("h5",{id:"state"},(0,o.kt)("inlineCode",{parentName:"h5"},"state")),(0,o.kt)("p",null,"The event is triggered whenever the ",(0,o.kt)("a",{parentName:"p",href:"/docs/navigation-state"},"navigation state")," changes in any navigator in the navigation tree:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const unsubscribe = navigationRef.addListener('state', (e) => {\n  // You can get the raw navigation state (partial state object of the root navigator)\n  console.log(e.data.state);\n\n  // Or get the full state object with `getRootState()`\n  console.log(navigationRef.getRootState());\n});\n")),(0,o.kt)("p",null,"This is analogous to the ",(0,o.kt)("a",{parentName:"p",href:"#onstatechange"},(0,o.kt)("inlineCode",{parentName:"a"},"onStateChange"))," method. The only difference is that the ",(0,o.kt)("inlineCode",{parentName:"p"},"e.data.state")," object might contain partial state object unlike the ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," argument in ",(0,o.kt)("inlineCode",{parentName:"p"},"onStateChange")," which will always contain the full state object."),(0,o.kt)("h5",{id:"options"},(0,o.kt)("inlineCode",{parentName:"h5"},"options")),(0,o.kt)("p",null,"The event is triggered whenever the options change for the currently focused screen in the navigation tree:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const unsubscribe = navigationRef.addListener('options', (e) => {\n  // You can get the new options for the currently focused screen\n  console.log(e.data.options);\n});\n")),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("h3",{id:"initialstate"},(0,o.kt)("inlineCode",{parentName:"h3"},"initialState")),(0,o.kt)("p",null,"Prop that accepts initial state for the navigator. This can be useful for cases such as deep linking, state persistence etc."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<NavigationContainer\n  onStateChange={(state) => console.log('New state is', state)}\n  initialState={initialState}\n>\n  {/* ... */}\n</NavigationContainer>\n")),(0,o.kt)("p",null,"Providing a custom initial state object will override the initial state object obtained via linking configuration or from browser's URL. If you're providing an initial state object, make sure that you don't pass it on web and that there's no deep link to handle."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const initialUrl = await Linking.getInitialURL();\n\nif (Platform.OS !== 'web' && initialUrl == null) {\n  // Only restore state if there's no deep link and we're not on web\n}\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/state-persistence"},"state persistence guide")," for more details on how to persist and restore state."),(0,o.kt)("h3",{id:"onstatechange"},(0,o.kt)("inlineCode",{parentName:"h3"},"onStateChange")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Consider the navigator's state object to be internal and subject to change in a minor release. Avoid using properties from the navigation state object except ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"routes"),", unless you really need it. If there is some functionality you cannot achieve without relying on the structure of the state object, please open an issue.")),(0,o.kt)("p",null,"Function that gets called every time ",(0,o.kt)("a",{parentName:"p",href:"/docs/navigation-state"},"navigation state")," changes. It receives the new navigation state as the argument."),(0,o.kt)("p",null,"You can use it to track the focused screen, persist the navigation state etc."),(0,o.kt)("h3",{id:"onready"},(0,o.kt)("inlineCode",{parentName:"h3"},"onReady")),(0,o.kt)("p",null,"Function which is called after the navigation container and all its children finish mounting for the first time. You can use it for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Making sure that the ",(0,o.kt)("inlineCode",{parentName:"li"},"ref")," is usable. See ",(0,o.kt)("a",{parentName:"li",href:"/docs/navigating-without-navigation-prop#handling-initialization"},"docs regarding initialization of the ref")," for more details."),(0,o.kt)("li",{parentName:"ul"},"Hiding your native splash screen")),(0,o.kt)("h3",{id:"linking"},(0,o.kt)("inlineCode",{parentName:"h3"},"linking")),(0,o.kt)("p",null,"Configuration for linking integration used for deep linking, URL support in browsers etc."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { NavigationContainer } from '@react-navigation/native';\n\nfunction App() {\n  const linking = {\n    prefixes: ['https://mychat.com', 'mychat://'],\n    config: {\n      screens: {\n        Home: 'feed/:sort',\n      },\n    },\n  };\n\n  return (\n    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>\n      {/* content */}\n    </NavigationContainer>\n  );\n}\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/configuring-links"},"configuring links guide")," for more details on how to configure deep links and URL integration."),(0,o.kt)("h4",{id:"options-1"},"Options"),(0,o.kt)("h5",{id:"linkingprefixes"},(0,o.kt)("inlineCode",{parentName:"h5"},"linking.prefixes")),(0,o.kt)("p",null,"URL prefixes to handle. You can provide multiple prefixes to support custom schemes as well as ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/ios/universal-links/"},"universal links"),"."),(0,o.kt)("p",null,"Only URLs matching these prefixes will be handled. The prefix will be stripped from the URL before parsing."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<NavigationContainer\n  linking={{\n    prefixes: ['https://mychat.com', 'mychat://'],\n    config: {\n      screens: {\n        Chat: 'feed/:sort',\n      },\n    },\n  }}\n>\n  {/* content */}\n</NavigationContainer>\n")),(0,o.kt)("p",null,"This is only supported on iOS and Android."),(0,o.kt)("h5",{id:"linkingconfig"},(0,o.kt)("inlineCode",{parentName:"h5"},"linking.config")),(0,o.kt)("p",null,"Config to fine-tune how to parse the path. The config object should represent the structure of the navigators in the app."),(0,o.kt)("p",null,"For example, if we have ",(0,o.kt)("inlineCode",{parentName:"p"},"Catalog")," screen inside ",(0,o.kt)("inlineCode",{parentName:"p"},"Home")," screen and want it to handle the ",(0,o.kt)("inlineCode",{parentName:"p"},"item/:id")," pattern:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  screens: {\n    Home: {\n      screens: {\n        Catalog: {\n          path: 'item/:id',\n          parse: {\n            id: Number,\n          },\n        },\n      },\n    },\n  }\n}\n")),(0,o.kt)("p",null,"The options for parsing can be an object or a string:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  screens: {\n    Catalog: 'item/:id',\n  }\n}\n")),(0,o.kt)("p",null,"When a string is specified, it's equivalent to providing the ",(0,o.kt)("inlineCode",{parentName:"p"},"path")," option."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"path")," option is a pattern to match against the path. Any segments starting with ",(0,o.kt)("inlineCode",{parentName:"p"},":")," are recognized as a param with the same name. For example ",(0,o.kt)("inlineCode",{parentName:"p"},"item/42")," will be parsed to ",(0,o.kt)("inlineCode",{parentName:"p"},"{ name: 'item', params: { id: '42' } }"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"initialRouteName")," option ensures that the route name passed there will be present in the state for the navigator, e.g. for config:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  screens: {\n    Home: {\n      initialRouteName: 'Feed',\n      screens: {\n        Catalog: {\n          path: 'item/:id',\n          parse: {\n            id: Number,\n          },\n        },\n        Feed: 'feed',\n      },\n    },\n  }\n}\n")),(0,o.kt)("p",null,"and URL : ",(0,o.kt)("inlineCode",{parentName:"p"},"/item/42"),", the state will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  routes: [\n    {\n      name: 'Home',\n      state: {\n        index: 1,\n        routes: [\n          {\n            name: 'Feed'\n          },\n          {\n            name: 'Catalog',\n            params: { id: 42 },\n          },\n        ],\n      },\n    },\n  ],\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"parse")," option controls how the params are parsed. Here, you can provide the name of the param to parse as a key, and a function which takes the string value for the param and returns a parsed value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  screens: {\n    Catalog: {\n      path: 'item/:id',\n      parse: {\n        id: id => parseInt(id, 10),\n      },\n    },\n  }\n}\n")),(0,o.kt)("p",null,"If no custom function is provided for parsing a param, it'll be parsed as a string."),(0,o.kt)("h5",{id:"linkingenabled"},(0,o.kt)("inlineCode",{parentName:"h5"},"linking.enabled")),(0,o.kt)("p",null,"Optional boolean to enable or disable the linking integration. Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if the ",(0,o.kt)("inlineCode",{parentName:"p"},"linking")," prop is specified."),(0,o.kt)("h5",{id:"linkinggetinitialurl"},(0,o.kt)("inlineCode",{parentName:"h5"},"linking.getInitialURL")),(0,o.kt)("p",null,"By default, linking integrates with React Native's ",(0,o.kt)("inlineCode",{parentName:"p"},"Linking")," API and uses ",(0,o.kt)("inlineCode",{parentName:"p"},"Linking.getInitialURL()")," to provide built-in support for deep linking. However, you might also want to handle links from other sources, such as ",(0,o.kt)("a",{parentName:"p",href:"https://help.branch.io/developers-hub/docs/react-native"},"Branch"),", or push notifications using ",(0,o.kt)("a",{parentName:"p",href:"https://rnfirebase.io/messaging/notifications"},"Firebase")," etc."),(0,o.kt)("p",null,"You can provide a custom ",(0,o.kt)("inlineCode",{parentName:"p"},"getInitialURL")," function where you can return the link which we should use as the initial URL. The ",(0,o.kt)("inlineCode",{parentName:"p"},"getInitialURL")," function should return a ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," if there's a URL to handle, otherwise ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,o.kt)("p",null,"For example, you could do something like following to handle both deep linking and ",(0,o.kt)("a",{parentName:"p",href:"https://rnfirebase.io/messaging/notifications"},"Firebase notifications"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<NavigationContainer\n  linking={{\n    prefixes: ['https://mychat.com', 'mychat://'],\n    config: {\n      screens: {\n        Chat: 'feed/:sort',\n      },\n    },\n    async getInitialURL() {\n      // Check if app was opened from a deep link\n      const url = await Linking.getInitialURL();\n\n      if (url != null) {\n        return url;\n      }\n\n      // Check if there is an initial firebase notification\n      const message = await messaging().getInitialNotification();\n\n      // Get the `url` property from the notification which corresponds to a screen\n      // This property needs to be set on the notification payload when sending it\n      return message?.notification.url;\n    },\n  }}\n>\n  {/* content */}\n</NavigationContainer>\n")),(0,o.kt)("p",null,"This option is not available on Web."),(0,o.kt)("h5",{id:"linkingsubscribe"},(0,o.kt)("inlineCode",{parentName:"h5"},"linking.subscribe")),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("a",{parentName:"p",href:"#linkinggetinitialurl"},(0,o.kt)("inlineCode",{parentName:"a"},"getInitialURL")),", you can provide a custom ",(0,o.kt)("inlineCode",{parentName:"p"},"subscribe")," function to handle any incoming links instead of the default deep link handling. The ",(0,o.kt)("inlineCode",{parentName:"p"},"subscribe")," function will receive a listener as the argument and you can call it with a URL string whenever there's a new URL to handle. It should return a cleanup function where you can unsubscribe from any event listeners that you have setup."),(0,o.kt)("p",null,"For example, you could do something like following to handle both deep linking and ",(0,o.kt)("a",{parentName:"p",href:"https://rnfirebase.io/messaging/notifications"},"Firebase notifications"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<NavigationContainer\n  linking={{\n    prefixes: ['https://mychat.com', 'mychat://'],\n    config: {\n      screens: {\n        Chat: 'feed/:sort',\n      },\n    },\n    subscribe(listener) {\n      const onReceiveURL = ({ url }: { url: string }) => listener(url);\n\n      // Listen to incoming links from deep linking\n      Linking.addEventListener('url', onReceiveURL);\n\n      // Listen to firebase push notifications\n      const unsubscribeNotification = messaging().onNotificationOpenedApp(\n        (message) => {\n          const url = message.notification.url;\n\n          if (url) {\n            // Any custom logic to check whether the URL needs to be handled\n            //...\n\n            // Call the listener to let React Navigation handle the URL\n            listener(url);\n          }\n        }\n      );\n\n      return () => {\n        // Clean up the event listeners\n        Linking.removeEventListener('url', onReceiveURL);\n        unsubscribeNotification();\n      };\n    },\n  }}\n>\n  {/* content */}\n</NavigationContainer>\n")),(0,o.kt)("p",null,"This option is not available on Web."),(0,o.kt)("h5",{id:"linkinggetstatefrompath"},(0,o.kt)("inlineCode",{parentName:"h5"},"linking.getStateFromPath")),(0,o.kt)("p",null,"You can optionally override the way React Navigation parses links to a state object by providing your own implementation."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<NavigationContainer\n  linking={{\n    prefixes: ['https://mychat.com', 'mychat://'],\n    config: {\n      screens: {\n        Chat: 'feed/:sort',\n      },\n    },\n    getStateFromPath(path, config) {\n      // Return a state object here\n      // You can also reuse the default logic by importing `getStateFromPath` from `@react-navigation/native`\n    },\n  }}\n>\n  {/* content */}\n</NavigationContainer>\n")),(0,o.kt)("h5",{id:"linkinggetpathfromstate"},(0,o.kt)("inlineCode",{parentName:"h5"},"linking.getPathFromState")),(0,o.kt)("p",null,"You can optionally override the way React Navigation serializes state objects to link by providing your own implementation. This is necessary for proper web support if you have specified ",(0,o.kt)("inlineCode",{parentName:"p"},"getStateFromPath"),"."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<NavigationContainer\n  linking={{\n    prefixes: ['https://mychat.com', 'mychat://'],\n    config: {\n      screens: {\n        Chat: 'feed/:sort',\n      },\n    },\n    getPathFromState(state, config) {\n      // Return a path string here\n      // You can also reuse the default logic by importing `getPathFromState` from `@react-navigation/native`\n    },\n  }}\n>\n  {/* content */}\n</NavigationContainer>\n")),(0,o.kt)("h3",{id:"fallback"},(0,o.kt)("inlineCode",{parentName:"h3"},"fallback")),(0,o.kt)("p",null,"React Element to use as a fallback while we resolve deep links. Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,o.kt)("p",null,"If you have a native splash screen, please use ",(0,o.kt)("a",{parentName:"p",href:"#onready"},(0,o.kt)("inlineCode",{parentName:"a"},"onReady"))," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"fallback")," prop."),(0,o.kt)("h3",{id:"documenttitle"},(0,o.kt)("inlineCode",{parentName:"h3"},"documentTitle")),(0,o.kt)("p",null,"By default, React Navigation automatically updates the document title on Web to match the ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," option of the focused screen. You can disable it or customize it using this prop. It accepts a configuration object with the following options:"),(0,o.kt)("h4",{id:"documenttitleenabled"},(0,o.kt)("inlineCode",{parentName:"h4"},"documentTitle.enabled")),(0,o.kt)("p",null,"Whether document title handling should be enabled. Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("h4",{id:"documenttitleformatter"},(0,o.kt)("inlineCode",{parentName:"h4"},"documentTitle.formatter")),(0,o.kt)("p",null,"Custom formatter to use if you want to customize the title text. Defaults to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"(options, route) => options?.title ?? route?.name;\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { NavigationContainer } from '@react-navigation/native';\n\nfunction App() {\n  return (\n    <NavigationContainer\n      documentTitle={{\n        formatter: (options, route) =>\n          `${options?.title ?? route?.name} - My Cool App`,\n      }}\n    >\n      {/* content */}\n    </NavigationContainer>\n  );\n}\n")),(0,o.kt)("h3",{id:"theme"},(0,o.kt)("inlineCode",{parentName:"h3"},"theme")),(0,o.kt)("p",null,"Custom theme to use for the navigation components such as the header, tab bar etc. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/themes"},"theming guide")," for more details and usage guide."),(0,o.kt)("h3",{id:"independent"},(0,o.kt)("inlineCode",{parentName:"h3"},"independent")),(0,o.kt)("p",null,"Whether this navigation container should be independent of parent containers. If this is not set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", this container cannot be nested inside another container. Setting it to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," disconnects any children navigators from parent container."),(0,o.kt)("p",null,"You probably don't want to set this to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," in a typical React Native app. This is only useful if you have navigation trees that work like their own mini-apps and don't need to navigate to the screens outside of them."))}u.isMDXComponent=!0}}]);