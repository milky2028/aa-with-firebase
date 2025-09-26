import { mount } from "svelte";
import "./app.css";
// import Navbar from "./lib/sections/Navbar.svelte";
// import HomeBottomForm from "./lib/sections/HomeBottomForm.svelte";
import GoogleMaps from "./lib/sections/GoogleMaps.svelte";
import Footer from "./lib/sections/Footer.svelte";

// const navbar = document.querySelector("#svelte-navbar")
// if (navbar) mount(Navbar, { target: navbar });

// const bottomTourForm = document.querySelector('#svelte-bottom-tour-form')
// if (bottomTourForm) mount(HomeBottomForm, { target: bottomTourForm })

const googleMaps = document.querySelector('#svelte-google-maps')
if (googleMaps) mount(GoogleMaps, { target: googleMaps })

const footer = document.querySelector("#svelte-footer")
if (footer) mount(Footer, { target: footer });

