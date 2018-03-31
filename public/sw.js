importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "careers.html",
    "revision": "a3e64d883f8f9d403e34d416ed058125"
  },
  {
    "url": "classes/all-classes.html",
    "revision": "8be00297b6c72b6cfce56174205ef469"
  },
  {
    "url": "classes/am-preschool.html",
    "revision": "91e9acac555f1f707c64d262983c31c6"
  },
  {
    "url": "classes/fours-and-fives.html",
    "revision": "98560dcee264a537b9cd7e868eb94931"
  },
  {
    "url": "classes/infants.html",
    "revision": "ccab71cc68fa0a8481af9a920807e343"
  },
  {
    "url": "classes/threes.html",
    "revision": "655b0cc21bdeee0765b900beac136e6d"
  },
  {
    "url": "classes/toddlers.html",
    "revision": "184b91f67f9ce475caa4fc1909cd7e49"
  },
  {
    "url": "classes/twos.html",
    "revision": "22197643a652df7f78450e282b891122"
  },
  {
    "url": "contact.html",
    "revision": "7c348511d8090e2614c99f7cd5e7f58c"
  },
  {
    "url": "css/adventure-academy-new-site.webflow.css",
    "revision": "2492ec0f0e2721c95a37f04ecfc95cd6"
  },
  {
    "url": "css/normalize.css",
    "revision": "519121fa4cdf6782a4c1c412564605e2"
  },
  {
    "url": "css/webflow.css",
    "revision": "950ff3caf4baa2db0b0420ecac8f6ecb"
  },
  {
    "url": "documents/3-preapplication-spanish-mar2016.pdf",
    "revision": "2a1217878776c5ed79343f8c2931feca"
  },
  {
    "url": "documents/3-preapplications-mar2016.pdf",
    "revision": "df7c107d0bc0d6884d87d6975e21800a"
  },
  {
    "url": "documents/Enrollment-Packet.pdf",
    "revision": "68da483a382777cb2ff460dcdafba851"
  },
  {
    "url": "elements/401.html",
    "revision": "d4185ab104edf3176cb23f6abf1ffd6c"
  },
  {
    "url": "enroll.html",
    "revision": "ec7bb764169921fbb71865c6e09b0f90"
  },
  {
    "url": "event/events-overview.html",
    "revision": "b81ba7d44b1a6a7a4933970076b3c207"
  },
  {
    "url": "event/water-play-day.html",
    "revision": "bbbf0e4b80e39e67ff3cd401d00a5a03"
  },
  {
    "url": "images/256x256.png",
    "revision": "3571c83943c3d04e718fd27c8aa8e9c8"
  },
  {
    "url": "images/32x32png.png",
    "revision": "f9a6ab52eb7d9d18fdf4e0304baa7a47"
  },
  {
    "url": "images/404-kid.jpg",
    "revision": "d87e6ef366427bca10bd908b35b62d7f"
  },
  {
    "url": "images/Another-kid-with-blocks.jpg",
    "revision": "3926388488c222e6c7675ebdb551ef3b"
  },
  {
    "url": "images/Box-car-kids_1.jpg",
    "revision": "5ea6ad6fbd48d4881603e45b711d6f85"
  },
  {
    "url": "images/Box-car-kids.jpg",
    "revision": "918b6edb7c5bdd6524863f05de3f7d21"
  },
  {
    "url": "images/CCDF-Full.jpg",
    "revision": "ffec158bf1e2ac566a2ba770e488eef8"
  },
  {
    "url": "images/CCDF.jpg",
    "revision": "3fb451724b14096be7379244f77759ec"
  },
  {
    "url": "images/Christmas-Kids.jpg",
    "revision": "7a0a5c7e0644bb983c41b2e17f408376"
  },
  {
    "url": "images/close.svg",
    "revision": "a4a60b7f7795b68c1feea704c9e84def"
  },
  {
    "url": "images/cute-kid-mobile.jpg",
    "revision": "18dd8a13d36e8279b6cf755e2e284b4b"
  },
  {
    "url": "images/Cute-kid.jpg",
    "revision": "978f48a3fa97d40d62442fe5e7e4a60d"
  },
  {
    "url": "images/Daycare-Kids-Playing-X-Large.jpg",
    "revision": "2d5f7857570263e5769e492393abed19"
  },
  {
    "url": "images/DSC_0061-01-thumb.jpg",
    "revision": "8e786e7abf3c014f929528233c6d0013"
  },
  {
    "url": "images/DSC_0061-01.jpg",
    "revision": "5af88c2e17588fb91179044d3d5e894e"
  },
  {
    "url": "images/DSC_0068-01-thumb.jpg",
    "revision": "fa2087f6d05396d2ff7e256380c12fe3"
  },
  {
    "url": "images/DSC_0068-01.jpg",
    "revision": "1dfdcc289b2107a42d37a49cb2b96395"
  },
  {
    "url": "images/DSC_0074-01-thumb.jpg",
    "revision": "7748b2080763513e15f35509bd2f9181"
  },
  {
    "url": "images/DSC_0074-01.jpg",
    "revision": "5cd06a2753de219896a374dcd1b97f46"
  },
  {
    "url": "images/DSC_0079-01.jpg",
    "revision": "b4dba641b46fde327cecafbdd2804814"
  },
  {
    "url": "images/DSC_0083-01-thumb.jpg",
    "revision": "e52b291265fa40ee00bfbaa38c0efddb"
  },
  {
    "url": "images/DSC_0083-01.jpg",
    "revision": "2bce2a930dbb6bb9de7707190b86eb02"
  },
  {
    "url": "images/DSC_0090-01.-thumbjpg.jpg",
    "revision": "581590709d75b585da469bf171742ff2"
  },
  {
    "url": "images/DSC_0090-01.jpg",
    "revision": "41a1c143fa8ae01c54ebe042b60513eb"
  },
  {
    "url": "images/DSC_0328-01--thumb.jpg",
    "revision": "f7590fb3103d099a4e54a7c5653e881d"
  },
  {
    "url": "images/DSC_0328-01.jpg",
    "revision": "4d87871152a93df147dfa04c9cafad39"
  },
  {
    "url": "images/DSC_0332-01--thumb.jpg",
    "revision": "bbad45a16532de704d4f9023bbb59781"
  },
  {
    "url": "images/DSC_0332-01.jpg",
    "revision": "810514716ccbd9aec24cdce6a53136f4"
  },
  {
    "url": "images/DSC_0336-01-thumb.jpg",
    "revision": "7b10d87f0bc9b7e2b801fe4a3051cabe"
  },
  {
    "url": "images/DSC_0336-01.jpg",
    "revision": "531c4a1bef3808dceb07be22995c5465"
  },
  {
    "url": "images/DSC_0337-01-thumb.jpg",
    "revision": "23310776e6ad00d9a83401160bd02f09"
  },
  {
    "url": "images/DSC_0337-01.jpg",
    "revision": "e31c57cf78e80e99b1aec1f775587fb8"
  },
  {
    "url": "images/DSC_0339-01-thumb.jpg",
    "revision": "5821630ebadc45ee0e4633bcd087156b"
  },
  {
    "url": "images/DSC_0339-01.jpg",
    "revision": "0660dc2b1b53749d4b6c65e0168086bc"
  },
  {
    "url": "images/DSC_0340-01-thumb.jpg",
    "revision": "8975a055bccafbf0cacdef5b0c445c5d"
  },
  {
    "url": "images/DSC_0340-01.jpg",
    "revision": "8975a055bccafbf0cacdef5b0c445c5d"
  },
  {
    "url": "images/Facebook.svg",
    "revision": "308b87c37036b9ac38de94ede697d2eb"
  },
  {
    "url": "images/family-mobile.jpg",
    "revision": "305057462349c6c8b637101a46edf821"
  },
  {
    "url": "images/family.jpeg",
    "revision": "e03947d65ed588bf6ebc461c60fdb223"
  },
  {
    "url": "images/fours-mobile.jpg",
    "revision": "dff0df96ee7872496a7627150cb7c787"
  },
  {
    "url": "images/fours.jpg",
    "revision": "a01df0b4c03bb308e7687bb2a1e144b5"
  },
  {
    "url": "images/Google.svg",
    "revision": "58501f91df36beb40081b84956c9f661"
  },
  {
    "url": "images/Halloween-Kids.jpg",
    "revision": "01edff2a930a9b3ff9acde02b8232951"
  },
  {
    "url": "images/hero-mobile.jpg",
    "revision": "2172787df3a34be5df806bd6e5669000"
  },
  {
    "url": "images/joyous-kid.jpg",
    "revision": "29c8767126b386ff2ee796f2e2200c61"
  },
  {
    "url": "images/Kid-in-space-helmet.jpg",
    "revision": "6e7f024f5a9b657c6c1a4ad93ea5f6a2"
  },
  {
    "url": "images/Kid-with-Paint.jpg",
    "revision": "ed285b3fcc9a67da6426d68c3a418138"
  },
  {
    "url": "images/Kids-Playing-in-Leaves.jpg",
    "revision": "c835bb312dd75dacb90f9ca3f27c4f97"
  },
  {
    "url": "images/kidsPlaying.jpg",
    "revision": "aab3e0658b0e45afe48ff974365ded11"
  },
  {
    "url": "images/Loader.svg",
    "revision": "f552cb6cbfe506e5aaabf731e613c6fb"
  },
  {
    "url": "images/Momma.jpg",
    "revision": "ea11d3168e5adea014737d41d3d40341"
  },
  {
    "url": "images/nursery-mobile.jpg",
    "revision": "ad4374d779d87ce5239a3d052a1c5d4a"
  },
  {
    "url": "images/Nursery.jpg",
    "revision": "8539837e18e4950ac46ff82a9b65adcf"
  },
  {
    "url": "images/Playground.jpg",
    "revision": "6173e6d1315c53fdd3ab39291c693aff"
  },
  {
    "url": "images/register-icon.svg",
    "revision": "802af70a80b5c8d646f6084df16c4bb4"
  },
  {
    "url": "images/Shouting-Kid.jpg",
    "revision": "480675647d0e789e7a32fb28ea352245"
  },
  {
    "url": "images/Spring-Kid.jpg",
    "revision": "aeecd025c922bfc99c86612de7feff39"
  },
  {
    "url": "images/sun.svg",
    "revision": "6940d4237f14a0b9e8c43fc35636edf4"
  },
  {
    "url": "images/Superkid_1.jpg",
    "revision": "5a7a604ba21d3755759f0d365807be77"
  },
  {
    "url": "images/Superkid.jpg",
    "revision": "9e5cff85a6b9436f2c6252b3b108467a"
  },
  {
    "url": "images/Teacher-and-Kids.jpg",
    "revision": "a03037e863c618e91f4f4adc8c20c211"
  },
  {
    "url": "images/threes-mobile.jpg",
    "revision": "89f9829ffc9c0d53d9df4c6b998a5165"
  },
  {
    "url": "images/threes.jpg",
    "revision": "7209a16e73ce27e10ae25d0e772efa1c"
  },
  {
    "url": "images/tick.svg",
    "revision": "baf742aab78ec157c73261313029ad6a"
  },
  {
    "url": "images/toddlers-mobile.jpg",
    "revision": "dec51f09afb7b0dbd98969444208b6ce"
  },
  {
    "url": "images/toddlers.jpg",
    "revision": "5325dc93f253bc7b6b510302b9560d0e"
  },
  {
    "url": "images/Twitter.svg",
    "revision": "ff32a518627a11a626e0dfc7743c404b"
  },
  {
    "url": "images/twos-mobile.jpg",
    "revision": "b6377d1b3f15d48570ab1fdbff5ff230"
  },
  {
    "url": "images/twos-p-500.jpeg",
    "revision": "b28ce8a9ef7aa092a6e0237d47fcbc90"
  },
  {
    "url": "images/twos.jpg",
    "revision": "9da964a4bef65e7fd8f60a8a3ce401cb"
  },
  {
    "url": "images/Water-Play-larger.jpg",
    "revision": "42309e3aa12a30a2fb7c21f7c460fdb1"
  },
  {
    "url": "images/whiteLogo.svg",
    "revision": "20a2b428eb3da97e8e6e06bb811bd777"
  },
  {
    "url": "index.html",
    "revision": "3b51a4fc30369bad152105b979d826ff"
  },
  {
    "url": "js/webflow.js",
    "revision": "944d1b50f97578884f5e295475afef65"
  },
  {
    "url": "manifest.json",
    "revision": "dc2c3644076e85677611b02f99c866d2"
  },
  {
    "url": "news/adventure-academy-accepts-ccdf.html",
    "revision": "0ba027c83b2aa3a1814a7eddabfa590f"
  },
  {
    "url": "news/april-2017-newsletter.html",
    "revision": "a356bcd3190d705a5bf3737e017ddef9"
  },
  {
    "url": "news/august-2016-newsletter.html",
    "revision": "9dbd391d96167933606500549638be5d"
  },
  {
    "url": "news/august-2017-newsletter.html",
    "revision": "b88c57041addea6e2d841c5d09c43148"
  },
  {
    "url": "news/december-2016-newsletter.html",
    "revision": "e6023970f39c4177cc8cccced35ed470"
  },
  {
    "url": "news/march-2017-newsletter.html",
    "revision": "0b8af45f3b617bbcb2cd6f3ebb1e8741"
  },
  {
    "url": "news/october-2016-newsletter.html",
    "revision": "f256a355370fd60c57362946d443c214"
  },
  {
    "url": "news/october-2017-newsletter.html",
    "revision": "88dd20615cf1665fb7df28ec799b0917"
  },
  {
    "url": "news/overview.html",
    "revision": "5f22d6f57d6d74149d83d40440af6ada"
  },
  {
    "url": "news/september-2016-newsletter.html",
    "revision": "7862783de636a3109fb688de505e511d"
  },
  {
    "url": "news/september-2017-newsletter.html",
    "revision": "b15f09d96ffb83e213909e1a080fc5e4"
  },
  {
    "url": "our-center.html",
    "revision": "0ebfc9ec34c97c02ade73643ba62aa37"
  },
  {
    "url": "prices.html",
    "revision": "5cab6e7e7d7f2f7f9ff6ce34c968c152"
  },
  {
    "url": "thank-you-contact.html",
    "revision": "e382cc8505e7d18d8ce21f8930bc27d4"
  },
  {
    "url": "thank-you.html",
    "revision": "04f980ffc5d52e1965710fd0d602382c"
  },
  {
    "url": "workbox-sw.prod.v2.1.2.js.map",
    "revision": "8e170beaf8b748367396e6039c808c74"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
