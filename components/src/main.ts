import { mount } from "svelte";
import "./app.css";
// import Navbar from "./lib/sections/Navbar.svelte";
import GoogleMaps from "./lib/sections/GoogleMaps.svelte";
import Footer from "./lib/sections/Footer.svelte";

// const navbar = document.querySelector("#svelte-navbar")
// if (navbar) mount(Navbar, { target: navbar });

const googleMaps = document.querySelector('#svelte-google-maps')
if (googleMaps) mount(GoogleMaps, { target: googleMaps })

const footer = document.querySelector("#svelte-footer")
if (footer) mount(Footer, { target: footer });

