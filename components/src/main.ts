import { mount } from "svelte";
import "./app.css";
// import Navbar from "./lib/sections/Navbar.svelte";
// import HomeBottomForm from "./lib/sections/HomeBottomForm.svelte";
import GoogleMaps from "./lib/sections/GoogleMaps.svelte";
import Careers from "./lib/pages/Careers.svelte";
import Footer from "./lib/sections/Footer.svelte";

// page shell
// const navbar = document.querySelector("#svelte-navbar")
// if (navbar) mount(Navbar, { target: navbar });

// home page
// const bottomTourForm = document.querySelector('#svelte-bottom-tour-form')
// if (bottomTourForm) mount(HomeBottomForm, { target: bottomTourForm })

const googleMaps = document.querySelector('#svelte-google-maps')
if (googleMaps) mount(GoogleMaps, { target: googleMaps })

// careers page
const careers = document.querySelector('#svelte-careers-page')
if (careers) mount(Careers, { target: careers })

// page shell
const footer = document.querySelector("#svelte-footer")
if (footer) mount(Footer, { target: footer });

