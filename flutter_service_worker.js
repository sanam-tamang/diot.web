'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6711e8bc1a0493cf5e638b89b74ab4e0",
".git/config": "e753cebeb2ad2d51c9806d3cd1e81559",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "cd9c32a69dbd2a2915ef907f7a951760",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b442bd6788ed952e280a2960fc87032b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4c81292a58d710cb99ae1dc9f692bb19",
".git/logs/refs/heads/main": "fcd01263f89890c19775fb4c94c5ad05",
".git/logs/refs/remotes/origin/main": "20ff0f89b86b0978c04f007819563e6a",
".git/objects/74/0be0815a67d1e4cebddf92b3be45c4ce9ee04b": "42fd9c5bab99c362c5fa91d2ac431628",
".git/objects/01/12e7da626ca2f959eca850c806779ba55dbfbd": "c094fa0b00e6ea2120d2a30cd1da087e",
".git/objects/01/e94310e77e6584fc4f25be964c29dfae3c056c": "ed3062d45754e909ee88a8f73c2464f3",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/08/4f9c0f5365952d4d860431a1c2dca147e4a9b5": "dab2b7ce77b85dd7850aef2e03638cf6",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/11/825bbcf07c8d2f828c260d3da871547a83b484": "f72ee72ad0af30caea0df63a13c95d2e",
".git/objects/13/e200c6be06efe79405c06cdb4960f2c3259b5a": "16a8e1beaf75270f16e84d61047f32d2",
".git/objects/16/7fdf02c5c1ef22803cfd376b852553515b1761": "61c4ff2be5ebc8b9053cb83b7b1b3bef",
".git/objects/18/4d263e2e70b1b9f799972987571eaf7514f963": "100c4a0faa96fec08671c0a5f556bca3",
".git/objects/1b/5eaa361c7306b4246c48497c79475c0e05c5e2": "797c30b38f4b43082bf674ed21553c74",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/56867e70c434d8dff86a85ca09e6d942a38257": "27d844aa56b9fd88c276a37ccf62cee6",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/28/e376b18505a097f1dda4feb6715e7858fd9de7": "3d02b57122d28aed0ea0042b69322bb8",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/277afb231f7613a49d983217c1aba871741433": "9047448a3d09251b8161710e65810e36",
".git/objects/2e/0dee6a833c4b568d44ac99727f7e0c17c6eb67": "c7ad2d2981af735bdf2421a44b61acb1",
".git/objects/30/185326f1f94f7732fab6c0b944514cb8f3c9db": "3d2269219eb17c2525f7a8264423c3f1",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/52783cf094b50e73db42eb73229b197d8b4df8": "6a45ae36a11e25001a5ac2dc01a63381",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3e/ac245fee4d1adbe97ae3da9706d9547b97b307": "737570cbd4d22bd7fce326e4020344c3",
".git/objects/43/da14d84ecb949ca5f5e8ecca3a514aa7fe1c7d": "d970b955bbe605c4f81533fde279992d",
".git/objects/45/3b7c4750152f981a8e0b41cbabeee8fc710efd": "1355bb58960866e01287dcf985a81b47",
".git/objects/45/dc8a20658bd09ecb8ca1c88f94fe80cc4ca286": "3777040b10a836277a4dcd49b2f159fa",
".git/objects/47/75d54eae117bab3c6d7c5481fc4d724dd3d950": "86c3c1c5331e25d8db21d5ffc759eaa1",
".git/objects/47/9306545f86650db999d9774dc0944024e2b725": "311580754d7ae6183d5dacb38b048198",
".git/objects/48/a5036e8718d17717ff297ed4bfebdac10c632c": "0afa5abf8c0f94e2e919fa4a798cd8c0",
".git/objects/4a/d02563749a759987c89e9ae71dc81178699250": "b0898762d021f3f003405abd3996dd88",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/60/e794bedf9b4efbf7dd050c3ca1b44c23883a4d": "69b63b2bc5eec6dfea4594fa740ac8f8",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/66/06b91f60f843ae7ae3d9a798df5b01a964a674": "0c6b6e22370b2aaa81b3284fd36aa8a0",
".git/objects/68/ac70e1cc000276d84c37fbabb23b552667cc6b": "f38860d5ce8c5392ee86ef62e57f01fc",
".git/objects/69/96fe96dc36fcc4c39fee6c0a631b45f4474078": "f1e5c45e39609d730f936c833df31e3f",
".git/objects/6a/95a130a2175e4e87a70dc66f6939abb95f46e8": "e78be8d0e9474a8bacd16ae588ba69ec",
".git/objects/6c/380f467a1ca94b64d753c9fb660c969640e045": "2cebf43cc47176029fff47b5fd505e88",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/75/729c0e289d1823441776afca674524416cb8b3": "f71d8543a7a90d3ba8154785dc313134",
".git/objects/7b/20f7380ad626aa5973bae3257861c9d9b8cb53": "a0f396f6c709e87500e5514b0cdd01cb",
".git/objects/80/209a37a88bda41166e3dbf39c20b2e7c05cb17": "c56a0948127b86f2671f84c852637b28",
".git/objects/82/9eda8fdcf133ab2083dbc880b6362b11d0c8ea": "72fd972bf7f0020b924435fc702e5219",
".git/objects/84/694bea5f65a8ef7d9193573085ca0d25fdef0b": "fbd967114a9360d6fbce5d4811ec26d4",
".git/objects/86/bb971747f241c1ddcd4e1e99efb09988736db1": "173f1c85e49a6e92cf391fc25f68feba",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/90/4902832581fecf943548c505d877a1c80a6e19": "4154f7441095ac599799e6fbf214af8d",
".git/objects/91/ce57418fb77bb6fd8f2f621e6a1ab8bedba639": "c42daaacd40d5feaf26242d02b5a6b89",
".git/objects/9a/3eda18773c8c5eb91b3e6f000e90b4a1566e9c": "64b9a1e72153c8e9a9068ac147506aa2",
".git/objects/a8/63736911100d7a7aa21d3b124916bc6908d3c2": "c04e081fe9c290944eb188ff050aadc2",
".git/objects/ac/0f908b9c9c73da558b45d65cc5c6094874d3e8": "36f70284c45d845ee774c46e7288afe5",
".git/objects/ae/0b6c94546421db41520d9541ca2840d0a9ebb0": "0f0de66fb52d98e9da2748a44d336a69",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b0/2b52021101d46bed6897ca54c38227873a6565": "af101f209db0159c0c6dc546443e3b04",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/c6aca57bc0d92ab3197d595766bf9285deea00": "a9be37e0f080009d8095a09eb2a7a1c8",
".git/objects/b3/7778a1e899b6bd0d50f6354c4bd5adf0a01453": "33ee5830d42575ebb9e79adcd31bf16c",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/d79b3f319ad1a12e097c77aff922d29caedb1a": "2c5519217344b52850a3f1fcc972554d",
".git/objects/bc/fdab4311f2201f45b341b36310e1cdb8051e34": "0b0600863ba421ab0448fd6eb8546d41",
".git/objects/c2/141b96e037dbedc76bd0d629015c5e45a9e390": "d6c7cde30f916451c426c2b69d3613c1",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/ca/5c8cff6f07910c985d417198b7202d4ddff402": "94a62549d9d1c5929ed196b5ee8cd726",
".git/objects/cd/53062d119f89091509d0caeca072c2f8536e8e": "cccb78c14df21f0d060a7420a72c3e16",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/dc/d63ccfe6014e758a4fe1fd29dc5514516f2c16": "01ff3746ff09b7edcc8e8bad7408b553",
".git/objects/dd/f4bfacb396e97546364ccfeeb9c31dfaea4c25": "049d11285bcbd30a249b4dff756126a0",
".git/objects/e7/307e72c5e7bced5d36c776d0986bf71b605f15": "e493f8bfd12abe75c70dc4782e5beae0",
".git/objects/e8/3bc5822e3b3e549b750d42dbc49d4f1cf80ec5": "b17b50e414d083bf64c13e4d77b7d847",
".git/objects/f1/44555cfd4af7dc9ca07e0413cb1dabe31b7740": "3b52c8bd16edecaf0d8861278fd20d14",
".git/objects/f6/b8515ca8214a875631454c3cfeb649e7fd01a2": "2d02e29a72326b5347904290d9d59842",
".git/objects/fc/0f322e61617230621468a8090f25edb73110d5": "ecc6495fc2bada51dd28771bea5b58eb",
".git/objects/fc/36a4785c50c04c9b18260e4709cda077ed352d": "ab0d50fcc4cfcaba8a0f3772db0b5fed",
".git/objects/fd/7f276f915c6f38e30bdbf9a82dd190f19ec6ee": "76709c79ca3de0a89a280f032404fcb8",
".git/objects/fe/819885733719849965b058543e29f629625a16": "e833ddb8396a6dc68ad2bc75ee0de6f3",
".git/ORIG_HEAD": "12e0f025d909be71a4118b88601a66e2",
".git/refs/heads/main": "12e0f025d909be71a4118b88601a66e2",
".git/refs/remotes/origin/main": "12e0f025d909be71a4118b88601a66e2",
"404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"assets/AssetManifest.bin": "8a5cdf15deac426c6517af7556605c1b",
"assets/AssetManifest.json": "10df7318ca995baace7361a38682787e",
"assets/assets/animations/pulse.gif": "6db8862ff10fdc87d62ec8291d2e5af6",
"assets/assets/icons/logo.png": "d8049d3d520d2b1bc6bf5e1153878d5d",
"assets/assets/icons/person.png": "c29b7434cadbdce6178c474ee00f737e",
"assets/assets/images/image_loading_placeholder.png": "dbf21350afe4c566652c62c50755d104",
"assets/assets/images/no_data.png": "de7b73bb925c9b9313e0c3eab4e679a2",
"assets/FontManifest.json": "0552e9f209a9a7a33c82a44d2635f135",
"assets/fonts/Borel-Regular.ttf": "4789b49393a0672f3df3b62b0a1a03c2",
"assets/fonts/MaterialIcons-Regular.otf": "51a203ad6280615046703ec46b632f36",
"assets/fonts/Roboto-Black.ttf": "d6a6f8878adb0d8e69f9fa2e0b622924",
"assets/fonts/Roboto-BlackItalic.ttf": "c3332e3b8feff748ecb0c6cb75d65eae",
"assets/fonts/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/fonts/Roboto-BoldItalic.ttf": "fd6e9700781c4aaae877999d09db9e09",
"assets/fonts/Roboto-Italic.ttf": "cebd892d1acfcc455f5e52d4104f2719",
"assets/fonts/Roboto-Light.ttf": "881e150ab929e26d1f812c4342c15a7c",
"assets/fonts/Roboto-LightItalic.ttf": "5788d5ce921d7a9b4fa0eaa9bf7fec8d",
"assets/fonts/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/fonts/Roboto-MediumItalic.ttf": "c16d19c2c0fd1278390a82fc245f4923",
"assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/fonts/Roboto-Thin.ttf": "66209ae01f484e46679622dd607fcbc5",
"assets/fonts/Roboto-ThinItalic.ttf": "7bcadd0675fe47d69c2d8aaef683416f",
"assets/NOTICES": "1779574d07abe4f96b1efed2727221fe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "bec4fccb807de7144e9af6a7d6537902",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"icons/android-chrome-192x192.png": "bec4fccb807de7144e9af6a7d6537902",
"icons/android-chrome-512x512.png": "84259c689100df3cfb3ef4ad7a44dd4f",
"icons/apple-touch-icon.png": "8e6f6f244acf06de5cb389fe21fd5e31",
"icons/favicon-16x16.png": "46d4aa8c49c0ff460ff26f7f76e55a9d",
"icons/favicon-32x32.png": "164ad79d726563b579a5f593bc7e9ae1",
"icons/favicon.ico": "f3f7e3acca74eb9b3d10e514b2d2f22e",
"icons/site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"index.html": "94b029d761c8448fc0857b54206f52d4",
"/": "94b029d761c8448fc0857b54206f52d4",
"main.dart.js": "7dd43e233b8122b03f070d8820c1d0fa",
"manifest.json": "1ba2a1387690577a15e6785591e84b19",
"version.json": "8ba12caeacbb49392fb2d8a52a792838"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
