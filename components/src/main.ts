import { mount } from "svelte";
import "./app.css";
import Footer from "./lib/Footer.svelte";
// import Navbar from "./lib/Navbar.svelte";

const footer = document.querySelector("#svelte-footer") as Element;
mount(Footer, { target: footer });

// const navbar = document.querySelector("#svelte-navbar") as Element;
// mount(Navbar, { target: navbar });
