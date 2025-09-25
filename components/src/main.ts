import { mount } from "svelte";
import "./app.css";
// import Navbar from "./lib/sections/Navbar.svelte";
// import GoogleMaps from "./lib/sections/GoogleMaps.svelte";
import Footer from "./lib/sections/Footer.svelte";

// const navbar = document.querySelector("#svelte-navbar") as Element;
// mount(Navbar, { target: navbar });

// const googleMaps = document.querySelector('#svelte-google-maps') as Element
// mount(GoogleMaps, { target: googleMaps })

const footer = document.querySelector("#svelte-footer") as Element;
mount(Footer, { target: footer });

